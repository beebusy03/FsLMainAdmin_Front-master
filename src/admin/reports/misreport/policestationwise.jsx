import React, { useState } from "react";
import MUIDataTable from 'mui-datatables';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { MDBDataTable } from "mdbreact";
const PoliceStationWise = () => {
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
  return (
    <div className='container'>
      <div className='card m-3 shadow'>
        <div className='card-header headingcolor'>
        <h2 className='text-center'>POLICE STATION WISE REPORTS 243</h2>
        </div>
        <div className='card-body'>
        <div className='row m-2'>
            <div className='col-lg-2'>
            Report From
            </div>
            <div className='col-lg-4'>
              <input type='text' className='form-control' />
            </div>
            <div className='col-lg-2'>
            Report Till
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
            <div className='col-lg-2'>
            Select Office
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
          <div className='row m-2'>
          <MDBDataTable striped bordered hover data={data} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default PoliceStationWise
