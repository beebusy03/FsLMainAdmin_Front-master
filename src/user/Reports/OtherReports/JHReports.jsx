


import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { faExchangeAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../../common/Heading';
import { Card, Container } from 'react-bootstrap';
import { CardContent } from '@mui/material';

const JHReports = () => {
  const [selectedOption2, setSelectedOption2] = useState('');


  const handleRadioChange1 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <>
    <Container>
      <Card className='m-3 shadow'>
        <Heading title="Section Transfer" />
        <CardContent>
        <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <div className="row mt-3">
     
         
                  <div className='col'>
                    <label className='label'>Office Code</label>
                  </div>
                  <div className='col-3'>
                    <input className='form-control' type='text' />
                  </div>
              

               
                  <div className='col'>
                    <label className='label'>Main File No</label>
                  </div>
                  <div className='col-3'>
                    <input className='form-control' type='text' />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <label className='label'>Section</label>
                  </div>
                  <div className='col-3'>
                    <select className='form-select' name='' >
                      <option value="" selected disabled>Select Option</option>
                      <option value="1"> Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
              
                  <div className='col'>
                    <label className='label'>Division No</label>
                  </div>
                  <div className='col-3'>
                    <input className='form-control' type='text' />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <label className='label'>Year</label>
                  </div>
                  <div className='col-3'>
                    <select className='form-select' name='' >
                      <option value="" selected disabled>Select Year</option>
                      <option value="1"> Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
               
                  <div className='col'>
                    <label className='label'>Annexure Type</label>
                  </div>
                  <div className='col-3'>
                    <select className='form-select' name='' >
                      <option value="" selected disabled>Select Option</option>
                      <option value="1"> Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
                </div>
              
                <div className='col mt-3'>
                  <div className='d-flex justify-content-center'>
                
                            <Button variant="contained"    onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)} mt={1}>Search &nbsp; <FontAwesomeIcon icon={faSearch} className={isHovered1 ? 'faSearchHovered' : ''}/></Button>
                       
                  </div>
                </div>
              </div>
        </CardContent>
        </Card>
        </Container>
    </>
  );
};




export default JHReports