import React, { useEffect, useState } from 'react';
import { callApi } from "../../common/CallApi";
import { Button, CardContent, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Heading from '../../common/Heading';
import { faChevronCircleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReportUploadDialog from './InnerComps/ReportUploadDialog';
import { Card, Container } from 'react-bootstrap';
const ReportUpload = () => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const [sections, setSections] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState('');


  const handleRadioChange1 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
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
    <>
<Container>
      <Card className='m-3 shadow'>
        <Heading title="Report Upload" />
        <CardContent>
        <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <div className="row m-2">
        <div className='col'>
                    <label className='label'>Office Code</label>
                  </div>
                  <div className='col-3'>
                    <input className='form-control' type='text' disabled/>
                  </div>
                  <div className='col'>
                    <label className='label'>Main File No</label>
                  </div>
                  <div className='col-3'>
                    <input className='form-control' type='text' />
                  </div>
                </div>
                <div className="row m-2">
                <div className='col'>
                    <label className='label'>Section</label>
                  </div>
                  <div className='col-3'>
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
                  <div className='col'>
                    <label className='label'>Division No</label>
                  </div>
                  <div className='col-3'>
                    <input className='form-control' type='text' />
                  </div>
                </div>
                <div className="row m-2">
                <div className='col-3'>
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
                </div>
    




      

                <div className='col mt-3'>
                  <div className='d-flex justify-content-center'>
                    <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} mt={1} onClick={handleModel}>Search &nbsp; <FontAwesomeIcon icon={faSearch} className={isHovered ? 'faSearchHovered' : ''}/></Button>
                    <Button variant="contained" style={{ margin: '0 8px' }} color="error" onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)}>
              Back &nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} className={isHovered1 ? 'faarrowrightHovered' : ''}/>
            </Button>

                  </div>
                </div>
            
        <ReportUploadDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
                  </div>
                </CardContent>
                </Card>
</Container>
    </>
  );
};

export default ReportUpload;
