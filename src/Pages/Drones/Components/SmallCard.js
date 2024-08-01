import React, { } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../drones.css";


const SmallCard = ({ label, value, status }) => {

    return (
        <>
            <Card className="drone-card">
                <CardContent>
                    <Typography variant="body2" color="text.secondary" className='card-label1'>
                        {label}
                    </Typography>
                    <hr />
                    <Typography variant='body2' color="text.secondary" className={
                        status === 'Available' ? "status-green" :
                            status === 'In-flight' ? "status-blue" :
                                status === 'Maintenance' ? "status-red" : ''
                    }>
                        {value}
                    </Typography>
                    <br />

                </CardContent>
            </Card>
        </>
    );
}

export default SmallCard;
