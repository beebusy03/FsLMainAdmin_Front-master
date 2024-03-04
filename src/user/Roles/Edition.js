import React, { useState } from 'react'
import { Button } from '@mui/material';
import Heading from '../../common/Heading';
import { faChevronCircleLeft, faReply, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUserAlt } from 'react-icons/fa';

const Edition = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <Heading title="Edit Registration" />
                    <div className='card-body'>
                        <div className='row justify-content-center'>
                            <div className='col-2'>
                                <label className='label'>File Number</label>
                            </div>
                            <div className='col-3'>
                                <input className='form-control' disabled type='text' />
                            </div>
                        </div>

                        <div className='col mt-3'>
                            <div className='d-flex justify-content-center'>
                                <Button variant="contained" style={{ margin: '0 8px' }}onMouseEnter={() => setIsHovered4(true)}
onMouseLeave={() => setIsHovered4(false)}>Registration&nbsp; <FontAwesomeIcon icon={faUserAlt} className={isHovered4 ? 'fatimeshover' : ''}/></Button>
                                <Button variant="contained" style={{ margin: '0 8px' }} color="success" onMouseEnter={() => setIsHovered2(true)}
onMouseLeave={() => setIsHovered2(false)} >Forwarding&nbsp; <FontAwesomeIcon icon={faReply} className={isHovered2 ? 'faarrowrightHovered' : ''}/></Button>
                                <Button variant="contained" style={{ margin: '0 8px' }} color="success">Other</Button>
                                <Button variant="contained" style={{ margin: '0 8px' }} color='error' onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)} >Back &nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} className={isHovered1 ? 'faarrowrightHovered' : ''}/></Button>
                            </div>
                        </div>
                        <div className='card p-4 mt-3 shadow' style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}> {/* Add shadow-sm class for small shadow */}
                            <div className='card-body'>
                                <div className='row mt-3'>
                                    <div className='col'>
                                        <label className='label'>Office Code</label>
                                    </div>
                                    <div className='col-8'>
                                        <input className='form-control' type='text' />
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col'>
                                        <label className='label'>Main File No</label>
                                    </div>
                                    <div className='col-8'>
                                        <input className='form-control' type='text' />
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col'>
                                        <label className='label'>Section</label>
                                    </div>
                                    <div className='col-8'>
                                        <select className='form-select' name='' >
                                            <option value="" selected disabled>Select Option</option>
                                            <option value="1"> Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col'>
                                        <label className='label'>Division No</label>
                                    </div>
                                    <div className='col-8'>
                                        <input className='form-control' type='text' />
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col'>
                                        <label className='label'>Year</label>
                                    </div>
                                    <div className='col-8'>
                                        <select className='form-select' name='' >
                                            <option value="" selected disabled>Select Year</option>
                                            <option value="1"> Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col mt-3'>
                                    <div className='d-flex justify-content-center'>
                                        <Button variant="contained" color='success' onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} mt={1}>Search &nbsp; <FontAwesomeIcon icon={faSearch} className={isHovered ? 'faSearchHovered' : ''}/></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edition;
