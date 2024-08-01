import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Store/actions/authActions';
import { useNavigate, Navigate } from 'react-router-dom';
import { AiOutlineLogout } from "react-icons/ai";
import { Grid, AppBar, Toolbar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import './header.css';
import DoneImage from '../../Assets/Images/drone.png';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [profileAnchorEl, setProfileAnchorEl] = useState(null);

    const handleProfileClose = () => {
        setProfileAnchorEl(null);
    };
    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/');
        localStorage.setItem('isAuthenticated', false);
    }
    return (
        <AppBar position="static" className='header-appbar'>
            <Toolbar>
                <Grid container className='header-main'>
                    <Grid item xs={10} className='header-leftbar'>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => <Navigate to={'/drone'} replace />}>
                            <img src={DoneImage} style={{ width: '50px' }} alt="logo" />
                        </IconButton>
                        <Typography variant="h6" style={{ cursor: 'pointer' }} onClick={() => <Navigate to={'/drone'} replace />}>
                            Drone Fleet Management
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className='header-rightbar' >
                        <Menu
                            id="profile-menu"
                            anchorEl={profileAnchorEl}
                            keepMounted
                            open={Boolean(profileAnchorEl)}
                            onClose={handleProfileClose}
                        >
                            <MenuItem onClick={handleLogout}>Profile</MenuItem>
                        </Menu>

                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleLogout}>
                            <AiOutlineLogout />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;