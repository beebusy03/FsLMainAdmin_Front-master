


import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { faChevronCircleLeft, faRocket, faSearch, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../common/Heading';
import { Card, Container } from 'react-bootstrap';
import { CardContent } from '@mui/material';

const ChangePassword = () => {
  const [selectedOption2, setSelectedOption2] = useState('');


  const handleRadioChange1 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <>
     <Container>
      <Card className='m-3 shadow'>
        <Heading title="CHANGE PASSWORD " />
        <CardContent>
        <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <div className="row m-2">
          
                  <div className='col'>
                    <label className='label'>Login Id</label>
                  </div>
                  <div className='col-3'>
                    <input className='form-control' type='text' disabled />
                  </div>
              
               
                  <div className='col'>
                    <label className='label'>Old Password</label>
                  </div>
                  <div className='col-3'>
                    <input className='form-control' type='text' />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <label className='label'>New Password</label>
                  </div>
                  <div className='col-3'>
                  <input className='form-control' type='text' />
                  </div>
              
                  <div className='col'>
                    <label className='label'>Re-Type New Password</label>
                  </div>
                  <div className='col-3'>
                    <input className='form-control' type='text' />
                  </div>
                </div>
               

                <div className='col mt-3'>
                  <div className='d-flex justify-content-center'>
                  <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >Save  &nbsp;<FontAwesomeIcon icon={faRocket} className={isHovered ? 'farockethover' : ''} /></Button>
                        <Button variant="contained" style={{ margin: '0 8px' }} color="error"onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)} mt={1}>Reset &nbsp; <FontAwesomeIcon icon={faSync} className={isHovered1 ? 'faResetHovered' : ''}/></Button>

                  </div>
                </div>
                <div className='mt-3'>
                  <p>
                    
1.Password must be at least 8 characters<br></br>
2.Password must contain at least one Small letter and one Capital Letter<br></br>
3.Password must contain at least one digit<br></br>
4.Password must contain at least special Characters<br></br>
                  </p>
                </div>
              </div>
          </CardContent>
          </Card>
          </Container>
    </>
  );
};



export default ChangePassword