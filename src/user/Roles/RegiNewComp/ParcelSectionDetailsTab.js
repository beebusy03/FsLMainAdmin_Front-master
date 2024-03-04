import React, { useState } from 'react';
import Redstar from '../../../common/Redstar';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const ParcelSectionDetailsTab = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleRadioChange1 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const isRejected = selectedOption === 'Option2';

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    No Of Packets/Articles <Redstar />
                </div>
                <div className='col'>
                    <input type='date' className='form-control' />
                </div>
                <div className='col'>
                    Packets/Articles Marking
                    <Redstar />
                </div>
                <div className='col'>
                    <input type='text' className='form-control' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    Exhibit Type
                </div>
                <div className='col'>
                    <input type='text' className='form-control' />
                </div>
                <div className='col'>
                    Seal Status
                </div>
                <div className='col'>
                    <input type='text' className='form-control' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    No Of Seals
                </div>
                <div className='col'>
                    <input type='text' className='form-control' />
                </div>
                <div className='col'>
                    Seal Impression
                </div>
                <div className='col'>
                    <textarea type='text' className='form-control' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className="row m-2">
                    <div className="d-flex justify-content-start">
                        <FormControl component="fieldset">
                            <RadioGroup
                                row
                                aria-label="receivedFrom"
                                name="receivedFrom"
                                value={selectedOption}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="Option1" control={<Radio />} label="ACCEPTED" />
                                <FormControlLabel value="Option2" control={<Radio />} label="Rejected" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            {isRejected && (
                <div className='row mb-3'>
                    <div className='col'>
                        <label className='form-label'>Reason For Rejection</label>
                        <input type='text' className='form-control' placeholder='Reason For Rejection' />
                    </div>
                    <div className='col'>
                        <label className='form-label'>For Action</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Copy To</label>
                        <input type='text' className='form-control' />
                    </div>
                </div>
            )}


            <div className="row m-2">
                <div className="d-flex justify-content-start">
                    <FormControl component="fieldset">
                        <RadioGroup
                            row
                            aria-label="receivedFrom"
                            name="receivedFrom"
                            value={selectedOption2}
                            onChange={handleRadioChange1}
                        >
                            <FormControlLabel value="Option1" control={<Radio />} label="AT DIVISION LEVEL" />
                            <FormControlLabel value="Option2" control={<Radio />} label="AT REGISTRATION" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-6'>
                    <select class="select" className='form-select' multiple>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>

                    </select>
                </div>
                <div className='col-6'>
                    <textarea  className='form-control'/>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='d-flex justify-content-end'>
                    <Button variant="contained" style={{ margin: '0 8px' }}>Preview</Button>
                    {/* <Button variant="contained" style={{ margin: '0 8px' }} color='error'>Reset</Button> */}
                </div>
            </div>
        </div>
    );
}

export default ParcelSectionDetailsTab;
