import React, { } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Store/actions/authActions';
import { useNavigate } from 'react-router-dom';


const Drone = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/');
        localStorage.setItem('isAuthenticated', false);
    }
    return (<>
        <button onClick={handleLogout}>Logout</button>
    </>)
}

export default Drone;