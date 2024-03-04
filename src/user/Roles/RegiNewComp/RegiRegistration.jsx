import React from 'react'
import Redstar from './../../../common/Redstar';
import { Button } from '@mui/material';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegiRegistration = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    Received Date <Redstar />
                </div>
                <div className='col-3'>
                    <input type='date' className='form-control' />
                </div>
                <div className='col-3'>
                    Diary No  <Redstar />
                </div>
                <div className='col-3'>
                    <input type='text' className='form-control' />
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-3'>
                    Diary Date
                </div>
                <div className='col-3'>
                    <input type='date' className='form-control' />
                </div>
                <div className='col-3'>
                    Old Case No
                </div>
                <div className='col-3'>
                    <input type='text' className='form-control' />
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-3'>
                    Received From <Redstar />
                </div>
                <div className='col-3'>
                    <select type='text' className="form-select">
                        <option value="" disabled selected>Select Police Station</option>
                        <option>Delhi</option>
                        <option>Chandigarh</option>
                    </select>
                </div>
            </div>
            <hr />

            <div className='row mb-3'>
                <div className='col'>
                    <label className='form-label'>State</label>
                    <select className='form-select'>
                        <option value="" selected disabled>Select</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <div className='col'>
                    <label className='form-label'>District</label>
                    <select className='form-select'>
                        <option value="" selected disabled>Select</option>
                        <option value="1">1</option>
                    </select>
                </div>

                <div className='col'>
                    <label className='form-label'>Police Station</label>
                    <select className='form-select'>
                        <option value="" selected disabled>Select</option>
                        <option value="1">1</option>
                    </select>
                </div>

            </div>


            <div className='row mt-3'>
                <div className='col-3'>
                    FIR NO
                </div>
                <div className='col-3'>
                    <input type='text' className='form-control' />
                </div>
                <div className='col-3'>
                    Year
                </div>
                <div className='col-3'>
                    <input type='text' className='form-control' />
                </div>
                </div>
                <div className='row mt-3'>
                <div className='col-3'></div>
                <div className='col-3'>
                    <Button variant="contained" color='success'>Form State &nbsp; <FontAwesomeIcon icon={faFileAlt} /></Button>
                </div>
                <div className='col-3'>
                    <Button variant="contained" color='success'>Form ICJS &nbsp; <FontAwesomeIcon icon={faFileAlt} /></Button>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    FIR DATE
                </div>
                <div className='col'>
                    <input type='date' className='form-control' />
                </div>
                <div className='col'>
                    Court Name
                </div>
                <div className='col'>
                    <input type='text' className='form-control' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-3'>
                    Court Case No
                </div>
                <div className='col-3'>
                    <input type='text' className='form-control' />
                </div>
                <div className='col-3'>
                    <Button variant="contained" color='success'>Form ICJS&nbsp; <FontAwesomeIcon icon={faFileAlt} /></Button>
                </div>
                </div>
                <div className='row mt-3'>
                <div className='col-3'>
                    Section Of Law
                </div>
                <div className='col-3'>
                    <input type='text' className='form-control' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <label className='form-label'>Priority</label>
                    <input type='text' className='form-control' />

                </div>


                <div className='col'>
                    <label className='form-label'>Priority</label>
                    <select className='form-select'>
                        <option value="" selected disabled>Select Priority</option>
                        <option value="1">Option</option>
                    </select>
                </div>

                <div className='col'>
                    <label className='form-label'>Remarks</label>
                    <textarea type='text' className='form-control' />

                </div>

            </div>
        </div>

    )
}

export default RegiRegistration