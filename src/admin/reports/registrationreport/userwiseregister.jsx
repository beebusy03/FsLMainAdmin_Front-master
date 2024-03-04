import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UserWiseRegister = () => {
  const columns = ["Name", "Company", "City", "State"];
  const data = [
    ["John Doe", "ABC Inc", "New York", "NY"],
    ["Jane Doe", "XYZ Corp", "Los Angeles", "CA"],
    // Add more rows as needed
  ];
  const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    responsive: 'standard',
    rowsPerPage: 10,
    pagination: true,
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='container'>
      <div className='card m-3 shadow'>
        <div className='card-header headingcolor' >
          <h2 className='text-center' style={{fontFamily:'Rubik sans-serif'}}>User & Section Wise Reports</h2>
        </div>
        <div className='card-body'>
        <div className='row m-2'>
            <div className='col-lg-2'>
            Generate Report By
            </div>
            <div className='col-lg-4'>
              <input type='text' className='form-control' />
            </div>
            <div className='col-lg-2'>
            Section
            </div>
            <div className='col-lg-4'>
              <input type='text' className='form-control' />
            </div>
          </div>
          <div className='row m-2'>
            <div className='col-lg-2'>
            Start Date
            </div>
            <div className='col-lg-4'>
              <input type='text' className='form-control' />
            </div>
            <div className='col-lg-2'>
            End Date
            </div>
            <div className='col-lg-4'>
              <input type='text' className='form-control' />
            </div>
          </div>
          <div className='row m-2'>
            <div className='col-lg-2'>
            Generate Report By
            </div>
            <div className='col-lg-4'>
              <input type='text' className='form-control' />
            </div>
          </div>
          <div className='row m-2'>
            <div className='col-lg-5'></div>
            <div className='col-lg-3'>
            <Button variant="contained" style={{ margin: "0 8px" }} className='btn btn-primary m-2' color='primary'  onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >  Generate  Report &nbsp;<FontAwesomeIcon icon={faFilePen}className={isHovered ? 'famoushover' : ''}/></Button>
            </div>
            <div className='col-lg-4'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserWiseRegister
