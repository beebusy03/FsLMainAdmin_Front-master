import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { Button, TextField } from '@mui/material';
import Heading from '../../common/Heading';
import { faCheckCircle, faUserCheck, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AssignToIncharge = () => {
    const columns = [
        'Sr#',
        'File No',
        'Fir No',
        'Recived Form',
        'Refrence Form',
        'Parcels',
        'Case No',
        'Report Date',
        'Remarks',
    ];

    const data = [
        ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
        ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
        ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
        ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
        ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
        ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
        ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
        ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
        ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
        ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
        ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
        ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
        ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
        ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
        ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
        ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
        ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
        ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
        ['1', 'FCR123', 'FSL456', 'FIR789', 'Police Station A', 'John Doe', '2022-01-01', '2022-01-02', 'Select'],
        ['2', 'FCR124', 'FSL457', 'FIR790', 'Police Station B', 'Jane Doe', '2022-01-03', '2022-01-04', 'Select'],
        ['3', 'FCR125', 'FSL458', 'FIR791', 'Police Station C', 'Bob Smith', '2022-01-05', '2022-01-06', 'Select'],
    ];

    const options = {
        filterType: false,
        selectableRows: false,
        responsive: 'standard',
        rowsPerPage: 10,
        pagination: true,
    };
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    return (
        <div className="container">
            <div className="card">
                <Heading title="PRE EXAM ASSIGNMENT	" />
                <div className="card-body">
                    <div className="row m-2">
                        <div className="row" style={{ alignItems: 'center' }}>
                            <div className='col-3'>
                                <div className='form-lable'>CASES RECEIVED FROM :</div>
                            </div>
                            <div className='col-3'>
                                <select className='form-select'>
                                    <option value="" selected disabled>Select </option>
                                    <option value="1">Option </option>
                                    <option value="1">Option </option>
                                    <option value="1">Option </option>
                                    <option value="1">Option </option>s
                                </select>

                            </div>
                            <div className='col-3'>
                                <select className='form-select'>
                                    <option value="" selected disabled>Select </option>
                                    <option value="1">Option </option>
                                    <option value="1">Option </option>
                                    <option value="1">Option </option>
                                    <option value="1">Option </option>s
                                </select>
                            </div>
                            <div className="col">
                                <Button variant="contained" color="success">
                                Go<FontAwesomeIcon icon={faCheckCircle} /></Button>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </div>
                  
                    <div className='col mt-3'>
                        <div className='d-flex justify-content-center'>
                            <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered4(true)}
onMouseLeave={() => setIsHovered4(false)}>Assign&nbsp; <FontAwesomeIcon icon={faUserCheck} className={isHovered4 ? 'fatimeshover' : ''}/></Button>
                            <Button variant="contained" style={{ margin: '0 8px' }} color="success"onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >Reject &nbsp; <FontAwesomeIcon icon={faUserTimes} className={isHovered ? 'fatimeshover' : ''}/></Button>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AssignToIncharge;
