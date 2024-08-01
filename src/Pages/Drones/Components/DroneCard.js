import React, { } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import "../drones.css";
import { images } from "../../../Setup/assets";


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

const DroneCard = ({ drone }) => {
    const navigate = useNavigate();

    return (
        <>
            <Card className="drone-card" key={drone.id}>
                <CardContent onClick={() => navigate(`/drones/${drone.id}`)}>
                    <div className='drone-detail'>
                        <Typography gutterBottom variant="h5" component="div" className='drone-name'>
                            {drone.id}
                        </Typography>
                        <img src={images[drone.id]} alt={'drone-img'} className='drone-image' />
                    </div>
                    <hr />
                    <Typography variant="body2" color="text.secondary"
                        className={drone?.status === 'Available' ? "status-green" : drone?.status === 'In-flight' ? "status-blue" : "status-red"}>
                        {drone.status}
                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                        <strong>Flight Hours: </strong>{drone.flight_hours}
                    </Typography>
                    <br />
                    <Typography variant='body2' color="text.secondary">
                        <span>Battery: </span><span style={{ float: 'right' }}>{drone.battery_status}%</span>
                        <BorderLinearProgress variant="determinate" value={drone.battery_status} />
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default DroneCard;
