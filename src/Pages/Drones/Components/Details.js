import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { images } from "../../../Setup/assets";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../drones.css';
import L from 'leaflet';
import MaintenanceTable from './MaintenanceTable';
import SmallCard from './SmallCard';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const DroneDetails = () => {
    const location = useLocation();
    const { drone } = location.state || {};
    const [cardUI, setCardUI] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    const [latitude, longitude] = drone['last_known_location'] || [0, 0];

    useEffect(() => {
        function updateScreenSize() {
            setCardUI({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }

        window.addEventListener('resize', updateScreenSize);
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    const iconHtml = ReactDOMServer.renderToStaticMarkup(
        <div style={{ color: 'red', fontSize: '24px' }}>
            <FaMapMarkerAlt />
        </div>
    );
    const icon = L.divIcon({
        className: 'custom-icon',
        html: iconHtml,
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    });

    return (
        <Grid container spacing={2} className='card-details-main'>
            <Grid item xs={12} lg={3} md={3} className='card-details-sec1' style={{ height: `${cardUI.height - 80}px`, overflow: 'hidden' }}>
                <Card className='details-card' style={{ height: '100%', overflow: 'hidden' }}>
                    <CardContent>
                        <div className='drone-details-div'>
                            <Typography gutterBottom variant="h5" component="div" className='drone-name'>
                                {drone.id}
                            </Typography>
                            <img src={images[drone.id]} alt={'drone-img'} className='card-image' />
                            <Typography variant='body2' color="text.secondary" className='drone-card-label2' style={{ textAlign: 'left' }}>
                                <span>Battery </span><span style={{ float: 'right' }}>{drone.battery_status}%</span>
                                <BorderLinearProgress variant="determinate" value={drone.battery_status} />
                            </Typography>
                        </div>
                        <div className='drone-details-map'>
                            <Typography gutterBottom variant="h5" component="div" className='drone-content-title'>
                                Last Known Location
                            </Typography>
                            <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '40vh', width: '100%' }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[latitude, longitude]} icon={icon}>
                                    <Popup>
                                        Last Known Location
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} lg={9} md={9} className='card-details-sec2' style={{ height: `${cardUI.height - 80}px`, overflow: 'hidden' }}>
                <Card className='details-card' style={{ height: '100%', overflow: 'hidden' }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <SmallCard label={'Status'} value={drone.status} status={drone.status} />
                            </Grid>
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <SmallCard label={'Current Mission'} value={drone.current_mission} />
                            </Grid>
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <SmallCard label={'Flight Hours'} value={drone.flight_hours} />
                            </Grid>
                        </Grid>
                        <div className='drone-details-div'>
                            <Typography gutterBottom variant="h5" component="div" className='drone-content-title'>
                                Maintenance Logs
                            </Typography>
                            <MaintenanceTable data={drone['maintenance_logs']} />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default DroneDetails;
