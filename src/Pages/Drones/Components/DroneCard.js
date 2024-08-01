import React, { } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const DroneCard = ({ drone }) => {
    return (
        <>
            <Card sx={{ maxWidth: '500px' }} key={drone.id}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {drone.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {drone.status}
                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                        <strong>Battery: </strong>{drone.battery_status}<br />
                        <strong>Flight Hours: </strong>{drone.flight_hours}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/drones/${drone.id}`}>
                        <Button variant="small">View Details</Button>
                    </Link>
                </CardActions>
            </Card>
        </>


    );
}

export default DroneCard;
