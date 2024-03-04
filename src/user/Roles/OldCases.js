import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Heading from '../../common/Heading';
import FirCourt from './OldCasescomp/FirCourt';
import Faseal from './OldCasescomp/Faseal';
import Sections from './OldCasescomp/Sections';

const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

const OldCases = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container'>
            <div className='card m-3 shadow'>
                <Heading title="Old Cases" />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="FIR/COURT   " {...a11yProps(0)} />
                            <Tab label="FA AUTHO./SEAL" {...a11yProps(1)} />
                            <Tab label="SECTIONS" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {value === 0 && <FirCourt />}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {value === 1 && <Faseal />}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    {value === 2 && <Sections />}
                </CustomTabPanel>
            </div>
        </div>
    );
};

export default OldCases;
