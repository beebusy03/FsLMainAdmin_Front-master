import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Heading from '../../common/Heading';
import RegiRegistration from './RegiNewComp/RegiRegistration';
import ForwardingAuthorityTab from './RegiNewComp/ForwardingAuthorityTab'
import ParcelSectionDetailsTab from './RegiNewComp/ParcelSectionDetailsTab';
import { faChevronCircleLeft, faSync, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const RegiNew = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <div className='container'>
      <div className='card m-3 shadow'>
        <Heading title="Regi New" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Registration" {...a11yProps(0)} />
              <Tab label="Forwarding Authority" {...a11yProps(1)} />
              <Tab label="Parcel/Section Details" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Box>
            {/* Add buttons on the right side */}
            <Button variant="contained" color="primary" onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)}>
              Last Case Details &nbsp; <FontAwesomeIcon icon={faUserEdit} className={isHovered1 ? 'fatimeshover' : ''}/>
            </Button>
            <Button variant="contained" color="error" style={{ margin: '3px' }}  onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)}>Reset &nbsp; <FontAwesomeIcon icon={faSync} className={isHovered1 ? 'faResetHovered' : ''}/></Button>
         
            <Button variant="contained" color="error" style={{ margin: '3px' }} onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}>
              Back &nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} className={isHovered ? 'faarrowrightHovered' : ''}/>
            </Button>
          </Box>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {/* Conditionally render RegistrationContent when the Registration tab is selected */}
          {value === 0 && <RegiRegistration />}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {value === 1 && <ForwardingAuthorityTab />}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {value === 2 && <ParcelSectionDetailsTab />}
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default RegiNew;
