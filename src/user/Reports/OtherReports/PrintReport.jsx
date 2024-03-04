

import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import MUIDataTable from 'mui-datatables';
import { faCheckCircle, faChevronCircleLeft, faRocket, faSync, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../../common/Heading';
import { Card, Container } from 'react-bootstrap';
import { CardContent } from '@mui/material';

const PrintReport = () => {
  const [selectedOption, setSelectedOption] = useState(''); // State to manage selected radio option

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };



  const handleAssignButtonClick = () => {
    // Add your logic for the "Assign" button
    console.log('Assign button clicked');
  };

  const columns = [
    'Sr#',
    'File No',
    'Received From ',
    'Fir Details',
    'Refrence Details',
    'Id',
 
  ];

  const data = [
    // ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
    // ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
    // ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
    // ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
    // ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
    // ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
    // ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
    // ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
    // ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
    // ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
    // ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
    // ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
    // ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
    // ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
    // ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
    // ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
    // ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
    // ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
    // ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
    // ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
    // ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
  ];

  const options = {
    filterType: false,
    selectableRows: false,
    responsive: 'standard',
    rowsPerPage: 10,
    pagination: true,
  };
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);



  return (
    <Container>
      <Card className='m-3 shadow'>
        <Heading title="EXAMINATION REPORT PRINTING" />
        <CardContent>
        <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <div className="row m-2">
        <div className='col-3'></div>
            <div className='col-3'>
            Generate Report By
              </div>
              <div className='col-3'>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="receivedFrom"
                  name="receivedFrom"
                  value={selectedOption}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel value="Option1" control={<Radio />} label="PDF" />
                  <FormControlLabel value="Option2" control={<Radio />} label="DOC" />
                </RadioGroup>
              </FormControl>
            </div>
        
        
</div></div>
         

            <div className="col mt-3">
              <MUIDataTable
                data={data}
                columns={columns}
                options={options}
              />
            </div>



          

        </CardContent>
        </Card>
        </Container>
  );
};



export default PrintReport