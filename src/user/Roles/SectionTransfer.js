import React, { useEffect, useState } from 'react';
import { callApi } from '../../common/CallApi';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Container, Card, CardContent } from '@mui/material';
import Heading from '../../common/Heading';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionTransferDialog from './InnerComps/SectionTransferDialog';
const Edition = () => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const [sections, setSections] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState('');
  const [isHovered1, setIsHovered1] = useState(false);

  const handleRadioChange1 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showtbl2, setshowtbl2] = useState(false);
  const handleOpenDetails = () => {
    setshowtbl2(true);
  };

  const handleModel = () => {
    setIsModalOpen(true);
  };
  const [formData, setFormData] = useState({
    userid: "",
    section: "",
  });
  const apigetSection = `${apiPrefix}/alluser/allddl/getallsection`;

  useEffect(() => {
    callApi(apigetSection).then((response) => {
      setSections(response);
    });
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Container>
      <Card className='m-3 shadow'>
        <Heading title="Section Transfer" />
        <CardContent>
          <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <div className='row mt-3'>
              <div className='col'>
                <label className='label'>Office Code</label>
              </div>
              <div className='col-8'>
                <input className='form-control' type='text' disabled />
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col'>
                <label className='label'>Main File No</label>
              </div>
              <div className='col-8'>
                <input className='form-control' type='text' />
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col'>
                <label className='label'>Section</label>
              </div>
              <div className='col-8'>
                <select
                  className="form-select"
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select Section
                  </option>
                  {sections.map((data) => (
                    <option key={data.sectionId} value={data.sectionId}>
                      {data.sectionName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col'>
                <label className='label'>Division No</label>
              </div>
              <div className='col-8'>
                <input className='form-control' type='text' />
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col'>
                <label className='label'>Year</label>
              </div>
              <div className='col-8'>
                <select className='form-select' name=''>
                  <option value='' selected disabled>Select Year</option>
                  <option value='1'> Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                </select>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col'>
                <label className='label'>Transfer To</label>
              </div>
              <div className='col-8'>
                <select className='form-select' name=''>
                  <option value='' selected disabled>Select Year</option>
                  <option value='1'> Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                </select>
              </div>
            </div>
            <div className='row mt-2'>
              <div className='d-flex justify-content-start'>
                <div className='col '>
                  <label className='form-label'> Generate Type :</label>
                </div> <div className='col-8'>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      aria-label="receivedFrom"
                      name="receivedFrom"
                      value={selectedOption2}
                      onChange={handleRadioChange1}
                    >
                      <FormControlLabel value="Option1" control={<Radio />} label="Same Main File No" />
                      <FormControlLabel value="Option2" control={<Radio />} label="New Main File No" />
                    </RadioGroup>
                  </FormControl></div>
              </div>
            </div>
            <div className='col mt-3'>
              <div className='d-flex justify-content-center'>
                <Button variant="contained" onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} onClick={handleModel}>
                  Transfer&nbsp;
                  <FontAwesomeIcon icon={faExchangeAlt} className={isHovered1 ? 'fatimeshover' : ''} />
                </Button>
              </div>
            </div>
            <SectionTransferDialog
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Edition;
