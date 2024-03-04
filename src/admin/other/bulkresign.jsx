import React, { useState } from 'react'

import MUIDataTable from 'mui-datatables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faSearch, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { MDBDataTable } from "mdbreact";
const BulkResign = () => {
//   const columns = ["Name", "Company", "City", "State"];

//   const data = [
//     ["John Doe", "ABC Inc", "New York", "NY"],
//     ["Jane Doe", "XYZ Corp", "Los Angeles", "CA"],
//     // Add more rows as needed
//   ];

// const options = {
  
//   filterType: 'checkbox',
//   selectableRows: 'multiple',
//   responsive: 'standard',
//   rowsPerPage: 10,
//   pagination: true,
// };
const data = {
  columns: [
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Position",
      field: "position",
      sort: "asc",
      width: 270,
    },
    {
      label: "Office",
      field: "office",
      sort: "asc",
      width: 200,
    },
    {
      label: "Age",
      field: "age",
      sort: "asc",
      width: 100,
    },
    {
      label: "Start date",
      field: "date",
      sort: "asc",
      width: 150,
    },
    {
      label: "Salary",
      field: "salary",
      sort: "asc",
      width: 100,
    },
  ],
  rows: [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      date: "2011/04/25",
      salary: "$320",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "$170",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      date: "2009/01/12",
      salary: "$86",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      date: "2012/03/29",
      salary: "$433",
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      date: "2008/11/28",
      salary: "$162",
    },
  ],
};
const [isHovered, setIsHovered] = useState(false);
const [isHovered1, setIsHovered1] = useState(false);
const [isHovered2, setIsHovered2] = useState(false);
const [isHovered3, setIsHovered3] = useState(false);
  return (
    <div className='container'>
      <div className='card m-3 shadow'>
        <div className='card-header headingcolor'>
          <h2 className='text-center'>Bulk Re-Asign</h2>
        </div>
        <div className='card-body'>
          <div className='row m-2'>
            <div className='col-lg-2'>
            Officer Assigned
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
          <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'>
            <Button variant="contained" className='btn btn-primary' style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} mt={1}>Search &nbsp; <FontAwesomeIcon  icon={faSearch} className={isHovered ? 'faSearchHovered' : ''}/></Button>
              <Button variant="contained" style={{ margin: '0 8px' }} color="error" onMouseEnter={() => setIsHovered1(true)} className='btn btn-secondary'
onMouseLeave={() => setIsHovered1(false)}>
              Back &nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} className={isHovered1 ? 'faarrowrightHovered' : ''}/>
            </Button>
            </div>
            <div className='col-lg-4'></div>
          </div>
          </div>
          <div className='card mt-3 shadow'>
        <div className='card-header headingcolor'>
          <h2 className='text-center'>Bulk Re-Asign</h2>
        </div>
        <div className='card-body'>
        {/* <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      /> */}
      <MDBDataTable striped bordered hover data={data} />

        </div>
      </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'>
           
              <Button variant="contained" style={{ margin: '0 8px' }} color="error" onMouseEnter={() => setIsHovered2(true)} className='btn btn-primary'
onMouseLeave={() => setIsHovered2(false)}>
              Re-Asign &nbsp; <FontAwesomeIcon icon={faUserCheck} className={isHovered2 ? 'faarrowrightHovered' : ''}/>
            </Button>
              <Button variant="contained" style={{ margin: '0 8px' }} color="error" onMouseEnter={() => setIsHovered3(true)} className='btn btn-secondary'
onMouseLeave={() => setIsHovered3(false)}>
              Back &nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} className={isHovered3 ? 'faarrowrightHovered' : ''}/>
            </Button>
            </div>
            <div className='col-lg-4'></div>
          </div>
        </div>
      
  )
}

export default BulkResign
