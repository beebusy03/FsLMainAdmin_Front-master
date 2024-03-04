import React, { useState } from 'react'

import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material';
import Heading from '../../common/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faQrcode, faSearch, faSync, faUserCheck, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import "../../css/iconanimation.css"
import { FaResearchgate } from 'react-icons/fa';
import BarcodeScanner from '../../recognization/BarcodeScanner';
const RegistrationN = () => {
    const columns = [
        "Sr#",
        "FCR ID",
        "FSL ID",
        "Fir No/DD No",
        "Police Station",
        "IO Name",
        "Fir Date/DD Date",
        "Record Created Date",
        "Selection"
    ];

    const data = [
        ["1", "FCR123", "FSL456", "FIR789", "Police Station A", "John Doe", "2022-01-01", "2022-01-02", "Select"],
        ["2", "FCR124", "FSL457", "FIR790", "Police Station B", "Jane Doe", "2022-01-03", "2022-01-04", "Select"],
        ["3", "FCR125", "FSL458", "FIR791", "Police Station C", "Bob Smith", "2022-01-05", "2022-01-06", "Select"]
    ];
    const options = {
        filterType: false,
        selectableRows: false,
        responsive: 'standard',
        rowsPerPage: 10,
        pagination: true,
    };
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);

    const [barcodeshow, setbarcodeshow] = useState(false)

    const handleQRCOde = () => {
        setbarcodeshow(true)


    }
    return (
        <div className='container'>
            <div className='card'>
                <Heading title="CFSL BIDAR" />
                <div className='card-body'>
                    <div className='row m-2'>
                        <div className='col'>
                            <label className='form-label'>District</label>
                            <select type='text' className="form-select">
                                <option value="" disabled selected>Select District</option>
                                <option>Delhi</option>
                                <option>Chandigarh</option>
                            </select>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Police Station</label>
                            <select type='text' className="form-select">
                                <option value="" disabled selected>Select Police Station</option>
                                <option>Delhi</option>
                                <option>Chandigarh</option>
                            </select>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Start Date</label>
                            <input type='date' className='form-control' />
                        </div>
                        <div className='col'>
                            <label className='form-label'>Till Date</label>
                            <input type='date' className='form-control' />
                        </div>
                        <div className='col mt-4'>
                            <Button variant="contained" onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)} mt={1}>Search &nbsp; <FontAwesomeIcon icon={faSearch} className={isHovered ? 'faSearchHovered' : ''} /></Button>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <Heading title="List of Exhibit Uploaded by the Police" />
                        <MUIDataTable
                            // title={"Employee List"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <div className='d-flex justify-content-start'>
                                <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered1(true)}
                                    onMouseLeave={() => setIsHovered1(false)} mt={1}>Reset &nbsp; <FontAwesomeIcon icon={faSync} className={isHovered1 ? 'faResetHovered' : ''} /></Button>
                                <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered2(true)}
                                    onMouseLeave={() => setIsHovered2(false)} color='error'>Back &nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} className={isHovered2 ? 'faarrowrightHovered' : ''} /></Button>
                                <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered3(true)}
                                    onMouseLeave={() => setIsHovered3(false)} color="success" onClick={handleQRCOde}>QR Code &nbsp; <FontAwesomeIcon icon={faQrcode} className={isHovered3 ? 'faqrcodehover' : ''} /></Button>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex justify-content-end'>
                                <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered4(true)}
                                    onMouseLeave={() => setIsHovered4(false)}>Accept & Register &nbsp; <FontAwesomeIcon icon={faUserCheck} className={isHovered4 ? 'fatimeshover' : ''} /></Button>
                                <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered5(true)}
                                    onMouseLeave={() => setIsHovered5(false)} color='error'>Reject &nbsp; <FontAwesomeIcon icon={faUserTimes} className={isHovered5 ? 'fatimeshover' : ''} /></Button>
                            </div>
                        </div>

                    </div>
                    {barcodeshow && (
                        <BarcodeScanner />
                    )}

                </div>
            </div>
        </div>
    )
}

export default RegistrationN
