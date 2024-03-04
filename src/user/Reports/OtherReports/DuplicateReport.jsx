


import React, { useState } from 'react'

import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material';

import { faCheckCircle, faSearch, faUserCheck, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../../common/Heading';
const DuplicateReport = () => {
    const columns = [
        "Sr#",
        "File No",
        "Registered On",
        "Received From",
        "Police Station",
        "FIR No",
        "FIR Date",
        "U/S",
        "No. of Parcels",
        "Case No"
    ];

    // const data = [
    //     ["1", "FCR123", "FSL456", "FIR789", "Police Station A", "John Doe", "2022-01-01", "2022-01-02", "Select"],
    //     ["2", "FCR124", "FSL457", "FIR790", "Police Station B", "Jane Doe", "2022-01-03", "2022-01-04", "Select"],
    //     ["3", "FCR125", "FSL458", "FIR791", "Police Station C", "Bob Smith", "2022-01-05", "2022-01-06", "Select"]
    // ];
    const options = {
        filterType: false,
        selectableRows: false,
        responsive: 'standard',
        rowsPerPage: 10,
        pagination: true,
    };
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='container'>
            <div className='card'>
                <Heading title=" DUPLICATE REPORTS	" />
                <div className='card-body'>
                    <div className='row m-2'>
                        <div className='col'>
                            <label className='form-label'>
                                Report Type</label>
                            <select className='form-select'>
                                <option value='' selected disabled>Register</option>
                                <option>Return of Cases</option>
                                <option>Appendix-28</option>
                                <option>Initmation</option>
                                <option>Forwarding</option>
                            </select>

                        </div>


                        <div className='col'>
                            <label className='form-label'>Days</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className="col mt-3">
                            <div className="d-flex justify-content-center">
                                <Button variant="contained">Go&nbsp;<FontAwesomeIcon icon={faCheckCircle} /></Button>
                            </div>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <Heading title="Register Letter" />
                        <MUIDataTable
                        // title={"Employee List"}
                        // data={data}
                        // columns={columns}
                        // options={options}
                        />
                    </div>


                </div>
            </div>
        </div>
    )
}




export default DuplicateReport

