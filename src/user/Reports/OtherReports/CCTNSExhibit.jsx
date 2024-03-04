


import React, { useState } from 'react'

import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faFileAlt, faQrcode, faSearch, faSync, faUserCheck, faUserTimes } from '@fortawesome/free-solid-svg-icons';
 import "../../../css/iconanimation.css"
import { FaResearchgate } from 'react-icons/fa';
import Heading from '../../../common/Heading';
const CCTNSExhibit = () => {
    const columns = [
        "Sr#",
        "Police Code",
        "Fir No/dd_no",
        "Accepted On",
        "Rejected On",
        "Parcel Details",
      
    ];

    const data = [
      
    ];
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
               
                <div className='card-body'>
                    <div className='row m-2'>
                     
                       
                        <div className='col'>
                          
                            <input type='date' className='form-control' />
                        </div>
                        <div className='col'>
                           
                            <input type='date' className='form-control' />
                        </div>
                        <div className='col'>
                           
                            <select type='text' className="form-select">
                                <option value="" disabled selected>accepted</option>
                                <option>Rejected</option>
                               
                            </select>
                        </div>
                        <div className='col mt-4'>
                        <Button variant="contained" style={{ margin: "0 8px" }} color='primary'  onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >   Reports&nbsp;<FontAwesomeIcon icon={faFileAlt}className={isHovered ? 'faarrowrightHovered' : ''}/></Button>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <Heading title="List of Accepted Case between and" />
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



export default CCTNSExhibit