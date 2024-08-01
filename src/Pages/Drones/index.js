import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDrones } from '../../Store/actions/droneActions';
import DroneCard from './Components/DroneCard';
import './drones.css';

const Drone = () => {
    const dispatch = useDispatch();
    const drones = useSelector(state => state.drone.drones);

    useEffect(() => {
        dispatch(loadDrones());
    }, [dispatch]);

    return (
        <div className='drone-main'>
            <div className='drone-cards'>
                {drones.map(drone => (
                    <DroneCard drone={drone} />
                ))}
            </div>
        </div>
    )
}
export default Drone;