


import React, { useState } from 'react';
import { Button } from '@mui/material';

import { faSearch, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../../common/Heading';

const CourtReports = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <>
      <div className='container'>
        <div className='card m-3 shadow'>
          <Heading title="COURT REPORTS" />
          <div className='card-body'>
            <div className='row justify-content-center'>
              <div className='col-2 text-bold'>
                <label className='label'>Office Code</label>
              </div>
              <div className='col-3'>
                <input className='form-control' disabled type='text' />
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col'>
                <label className='label'> Main File No</label>
                <input className='form-control' type='text' />
              </div>
              <div className='col'>
                <label className='label'> Division</label>
                <select className='form-select' name='section'>
                  <option value="" selected disabled>Select Section</option>
                </select>
              </div>
              <div className='col'>
                <label className='label'>Division No</label>
                <input className='form-control' type='text' />
              </div>
              <div className='col'>
                <label className='label'>Year</label>
                <select className='form-select' name='section'>
                  <option value="" selected disabled>Select Year</option>
                </select>
              </div>
            </div>
            <div className='row justify-content-center mt-3'>
              <div className='col-2 text-bold'>
                <label className='label'>Report Type</label>
              </div>
              <div className='col-3'>
              <select className='form-select' name='section'>
                  <option value="" selected disabled>Select Section</option>
                  <option >Not Pending</option>
                  <option >Reply to Reminder</option>

                  <option >Deputing Messenger</option>
                  <option >Further Examination Pending</option> 
                  <option > Appendix 41</option>
                  <option >Appendix 42</option>
                  
                </select>
              </div>
            </div>
            <div className='col mt-3'>
              <div className='d-flex justify-content-center'>
                <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} mt={1}>Search &nbsp; <FontAwesomeIcon icon={faSearch} className={isHovered ? 'faSearchHovered' : ''}/></Button>
                <Button variant="contained" style={{ margin: '0 8px' }} color="error"onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)} mt={1}>Reset &nbsp; <FontAwesomeIcon icon={faSync} className={isHovered1 ? 'faResetHovered' : ''}/></Button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};




export default CourtReports