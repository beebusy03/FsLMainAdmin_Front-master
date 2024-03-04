import React, { useState } from 'react'
import "../../css/iconanimation.css"
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material';
import Heading from '../../common/Heading';
import { faChevronCircleLeft, faPrint, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MOReturnLetter = () => {
    const columns = [
        "Sr#",
        "File No",
        "Diary No",
        "Received Form",
        "Remarks",
    ];

    const data = [
        ["1", "12343", "2342", "FIR789", "Police Station A"],
        ["2", "12343", "2342", "FIR789", "Police Station A"],
        ["3", "12343", "2342", "FIR789", "Police Station A"],
    ];
    const options = {
        filterType: 'checkbox',
        selectableRows: 'multiple',
        responsive: 'standard',
        rowsPerPage: 10,
        pagination: true,
    };
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    return (
        <div className='container'>
            <div className='card'>
                <Heading title="Rejection Cases Updation" />
                <div className='col'>
                    <MUIDataTable
                        // title={"Employee List"}
                        data={data}
                        columns={columns}
                        options={options}
                    />

                </div>
                <div className='row m-3'>
                    <div className='col'>
                        <label className="form-label">Remarks</label>
                        <textarea className="form-control" typeof='text' />
                    </div>
                    <div className='col'>
                        <label className="form-label">For Action
                        </label>
                        <textarea className="form-control" typeof='text' />
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col'>
                        <label className="form-label">Copy To</label>
                        <input className="form-control" typeof='text' />
                    </div>
                    <div className='col mt-4'>
                        <div className='d-flex justify-content-end'>
                            <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >Save Data &nbsp;<FontAwesomeIcon icon={faRocket} className={isHovered ? 'farockethover' : ''} /></Button>
                            <Button variant="contained" style={{ margin: '0 8px' }} color='inherit'onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)} >Print Letter  &nbsp; <FontAwesomeIcon icon={faPrint}className={isHovered1 ? 'faSearchHovered' : ''}/></Button>
                            <Button variant="contained" style={{ margin: '0 8px' }} color='error' onMouseEnter={() => setIsHovered2(true)}
onMouseLeave={() => setIsHovered2(false)} >Back &nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} className={isHovered2 ? 'faarrowrightHovered' : ''}/></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MOReturnLetter
