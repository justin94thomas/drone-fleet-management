import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import { images } from "../../../Setup/assets";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosCloseCircle } from "react-icons/io";
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
    const navigate = useNavigate();
    const { drone } = location.state || {};
    const [cardUI, setCardUI] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
        mapHeight: null
    });

    const mapContainerRef = useRef(null);

    useEffect(() => {
        function updateScreenSize() {
            const newHeight = window.innerHeight;
            const mapContainerHeight = newHeight * 0.4;

            setCardUI({
                height: newHeight,
                width: window.innerWidth,
                mapHeight: mapContainerHeight
            });

            if (mapContainerRef.current) {
                mapContainerRef.current.style.height = `${mapContainerHeight}px`;
            }
        }
        window.addEventListener('resize', updateScreenSize);
        updateScreenSize();
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    const { last_known_location = [0, 0], battery_status, id, status, current_mission, flight_hours, maintenance_logs } = drone || {};
    const [latitude, longitude] = last_known_location;


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
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate(`/drones`)} className='go-back'>
                    < IoIosCloseCircle />
                </IconButton>
                <Card className='details-card' style={{ height: '100%', overflow: 'hidden' }}>
                    <CardContent>
                        <div className='drone-details-div'>
                            <Typography gutterBottom variant="h5" component="div" className='drone-name'>
                                {id}
                            </Typography>
                            <img src={images[id]} alt={'drone-img'} className='card-image' />
                            <Typography variant='body2' color="text.secondary" className='drone-card-label2' style={{ textAlign: 'left' }}>
                                <span>Battery </span><span style={{ float: 'right' }}>{battery_status}%</span>
                                <BorderLinearProgress variant="determinate" value={battery_status} />
                            </Typography>
                        </div>
                        <div className='drone-details-map' ref={mapContainerRef}>
                            <Typography gutterBottom variant="h5" component="div" className='drone-content-title'>
                                Last Known Location
                            </Typography>
                            {cardUI?.mapHeight && <MapContainer
                                center={[latitude, longitude]}
                                zoom={13}
                                style={{ height: `${cardUI.mapHeight - 35}px`, width: '100%' }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[latitude, longitude]} icon={icon}>
                                    <Popup>
                                        Last Known Location
                                    </Popup>
                                </Marker>
                            </MapContainer>}

                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} lg={9} md={9} className='card-details-sec2' style={{ height: `${cardUI.height - 80}px`, overflow: 'hidden' }}>
                <Card className='details-card' style={{ height: '100%', overflow: 'hidden' }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item lg={3} md={3} sm={6} xs={12}>
                                <SmallCard label={'Status'} value={status} status={status} />
                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={12}>
                                <SmallCard label={'Current Mission'} value={current_mission} />
                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={12}>
                                <SmallCard label={'Flight Hours'} value={flight_hours} />
                            </Grid>
                        </Grid>
                        <div className='drone-details-div'>
                            <Typography gutterBottom variant="h5" component="div" className='drone-content-title'>
                                Maintenance Logs
                            </Typography>
                            <MaintenanceTable data={maintenance_logs} />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default DroneDetails;
