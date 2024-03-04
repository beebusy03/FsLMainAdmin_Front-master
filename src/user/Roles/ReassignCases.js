import React, { useState } from 'react'

import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material';
import Heading from '../../common/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const ReassignCases = () => {
    const columns = [
        "Sr#",
        "FCR ID",
        "FSL ID",
        "Fir No/DD No",
        "Police Station",
        "IO Name",

    ];

    const data = [
        ["1", "FCR123", "FSL456", "FIR789", "Police Station A", "John Doe"],
        ["2", "FCR123", "FSL456", "FIR789", "Police Station A", "John Doe"],
        ["3", "FCR123", "FSL456", "FIR789", "Police Station A", "John Doe"],
    ];
    const options = {
        filterType: false,
        selectableRows: false,
        responsive: 'standard',
        rowsPerPage: 10,
        pagination: true,
    };


    return (
        <div className='container'>
            <div className='card'>
                <Heading title="RE-ASSIGNING OF CASES" />
                <div className='card-body'>
                    <div className='row m-2'>

                        <div className='col-4'>
                            <label className='form-label'>From Date</label>
                            <input type='date' className='form-control' />

                        </div>
                        <div className='col-4'>
                            <label className='form-label'>Till Date</label>
                            <input type='date' className='form-control' />

                        </div>
                        <div className='col-4 mt-4'>
                            <Button variant="contained" style={{ marginTop: '5px' }} color='success'>Go<FontAwesomeIcon icon={faCheckCircle} /></Button>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <MUIDataTable
                            // title={"Employee List"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReassignCases
