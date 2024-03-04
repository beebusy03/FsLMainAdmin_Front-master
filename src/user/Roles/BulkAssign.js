import React, { useEffect, useState } from 'react';
import { callApi } from "../../common/CallApi";
import { Button } from '@mui/material';
import Heading from '../../common/Heading';
import { faChevronCircleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BulkAssign = () => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const [sections, setSections] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
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
      <div className='container'>
        <div className='card m-3 shadow'>
          <Heading title="Bulk Re-Assignment" />
          <div className='card-body'>
            <div className='row justify-content-center'>
              <div className='col-2 text-bold'>
                <label className='label'>Officer Assigned</label>
              </div>
              <div className='col-3'>
                <select className='form-select' name='section'>
                  <option value="" selected disabled>Select Year</option>
                </select>
              </div>
              <div className='col-2 text-bold'>
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

export default BulkAssign;
