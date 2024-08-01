import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../../Pages/Login';
import Drone from '../../Pages/Drones';
import DroneDetails from '../../Pages/Drones/Components/Details';
import Header from '../../Pages/Header';
import { Box } from '@mui/material';

const Layout = () => {
    return (
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box style={{ flexGrow: 1 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

const AppRoutes = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return (
        <Routes>
            <Route path="/" element={<Navigate to={`${isAuthenticated ? '/drones' : '/login'}`} replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route path="/drones" element={<Drone />} />
                <Route path="/drones/:droneId" element={<DroneDetails />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;