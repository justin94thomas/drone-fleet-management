import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../../Pages/Login';
import DroneList from '../../Pages/Drones';
import DroneDetails from '../../Pages/Drones/Details'

const AppRoutes = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return (
        <Routes>
            <Route path="/" element={<Navigate to={`${isAuthenticated ? '/drones' : '/login'}`} replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/drones" element={<DroneList />} />
            <Route path="/drones/:droneId" element={<DroneDetails />} />
        </Routes>
    );
};

export default AppRoutes;