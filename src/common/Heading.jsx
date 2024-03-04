import React from 'react';
import { Card, CardHeader, Typography } from '@mui/material';

const Heading = (props) => {
    return (
        <Card sx={{ boxShadow: 4 }}>
            <CardHeader
                sx={{ background: '#248888', color: 'white', fontSize: '15px', padding: '7px' }}
                title={<Typography variant="h5" align="center" sx={{ fontFamily: 'Monstreet' }}>{props.title}</Typography>}
                subheader={<Typography variant="h6" align="center" sx={{ fontFamily: 'Monstreet' }}>{props.title1}</Typography>}
            />
        </Card>
    );
}

export default Heading;
    