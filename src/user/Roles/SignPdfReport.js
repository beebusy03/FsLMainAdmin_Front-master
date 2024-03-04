import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Heading from '../../common/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';

const SignPdfReport = () => {
  const [selectedOption, setSelectedOption] = useState(''); // State to manage selected radio option

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <>
      <div className='container'>
        <div className='card m-3 shadow'>
          <Heading title="e-Signing of FSL Report" />
          <div className='card-body'>
            <div className="row m-2">
              <div className="d-flex justify-content-center">
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="receivedFrom"
                    name="receivedFrom"
                    value={selectedOption}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel value="Option1" control={<Radio />} label=" By Upload of File" />
                    <FormControlLabel value="Option2" control={<Radio />} label=" Fetch From Post Exam" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col'>
                <label className='label'>  office Prefix</label>
                <input className='form-control' type='text' />
              </div>
              <div className='col'>
                <label className='label'> Main Case No  </label>
                <select className='form-select' name='section'>
                  <option value="" selected disabled>Select Section</option>
                </select>
              </div>
              <div className='col'>
                <label className='label'>Division</label>
                <input className='form-control' type='text' />
              </div>
              <div className='col'>
                <label className='label'>Division No</label>
                <select className='form-select' name='section'>
                  <option value="" selected disabled>Select Year</option>
                </select>
              </div>
              <div className='col'>
                <label className='label'>Year</label>
                <select className='form-select' name='section'>
                  <option value="" selected disabled>Select Year</option>
                </select>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col'>
                <label className='label'> Approval Type</label>
                <select className='form-select' name='section'>
                  <option value="" selected disabled>Select Year</option>
                </select>              </div>
              <div className='col'>
                <label className='label'> User Name
                </label>
                <input className='form-control' type='text' />
              </div>
              <div className='col'>
                <label className='label'>AAdhar No Last 4 Digits
                </label>
                <input className='form-control' type='text' />
              </div>
            </div>
            <div className='col mt-3'>
              <div className='d-flex justify-content-center'>
              <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}>Search &nbsp; <FontAwesomeIcon icon={faSearch} className={isHovered ? 'faSearchHovered' : ''}/></Button>
                <Button variant="contained" style={{ margin: '0 8px' }} color="error" onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)}>
              Back &nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} className={isHovered1 ? 'faarrowrightHovered' : ''}/>
            </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignPdfReport;
