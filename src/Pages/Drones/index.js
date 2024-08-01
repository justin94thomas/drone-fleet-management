import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDrones } from '../../Store/actions/droneActions';
import { Grid } from '@mui/material';
import DroneCard from './Components/DroneCard';
import './drones.css';

const Drone = () => {
    const dispatch = useDispatch();
    const drones = useSelector(state => state.drone.drones);

    useEffect(() => {
        dispatch(loadDrones());
    }, [dispatch]);

    return (
        <Grid container spacing={2} className='drone-main'>
            {drones.map(drone => (
                <Grid item xs={12} lg={3} className='drone-cards'>
                    <DroneCard drone={drone} />
                </Grid>
            ))}
        </Grid>
    )
}
export default Drone;