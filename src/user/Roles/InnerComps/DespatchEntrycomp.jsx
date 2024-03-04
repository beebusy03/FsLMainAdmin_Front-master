import React, { useState } from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postApiData } from '../../../redux/slice/postSlice';
import Heading from '../../../common/Heading';

const DespatchEntrycomp = ({ cardcomp, showwhenclick }) => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const apiPrefix = process.env.REACT_APP_API_PREFIX;

    const [title, setTitle] = useState("Observations");
    const [formData, setFormData] = useState({
        observations: '',
        opinion: "",
        enclosures: "",
        methodAdopted: '',
        notes: '',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleButtonClick = (newTitle) => {
        setTitle(newTitle);
    };

    const handleBack = () => {
        showwhenclick(false)
        cardcomp(true)
    }

    const apiUrl = `${apiPrefix}/alluser/postexamination/save`;


    const handleSave = () => {
        dispatch(postApiData({ apiUrl, postData: formData }));
    }

    const handleReset = () => {
        setFormData({
            observations: '',
            opinion: "",
            enclosures: "",
            methodAdopted: '',
            notes: '',

        })
    }
    return (
        <div className='container'>
            <div className='card'>
                {/* <Heading title="DESPATCH MODULE" /> */}
                <div className='card-body'>
                    <div className='row justify-content-center'>
                        <div className='row justify-content-center'>
                            <div className='col-2'>
                                <label className='label'>Case Number    </label>
                            </div>
                            <div className='col-3'>
                                <input className='form-control' disabled type='text' />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label className='form-label'>Received From & Fir No</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col'>
                                <label className='form-label'>Despatch Type</label>
                                <select className='form-select' name='' value='' onChange={handleInputChange}>
                                    <option>Select</option>
                                    <option>Data</option>
                                    <option>Data2 </option>
                                </select>
                            </div>
                            <div className='col'>
                                <label className='form-label'>Despatch Details</label>
                                <input type='text' className='form-control' />
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label'>Despatch Date Report Date</label>
                                <input type='text' className='form-control' />
                                <label className='form-label'> Report Date</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col'>
                                <label className='form-label'>Reference No</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col'>
                                <label className='form-label'>Reference Date</label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <label className='form-label'>Examination Start Date</label>
                                <input type='date' className='form-control' />
                            </div>
                            <div className='col'>
                                <label className='form-label'>Examination End Date</label>
                                <input type='date' className='form-control' />
                            </div>
                            <div className='col'>
                                <label className='form-label'>Forwarded To</label>
                                <select className='form-select'>
                                    <option value="" disabled>Select</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div className='col'>
                                <label className='form-label'>Manual Reference</label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>                    </div>

                    <div className='col mt-3'>
                        <div className='d-flex justify-content-center'>
                            <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("Observations")}>Observations</Button>
                            <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("Opinions")}>Opinions</Button>
                            <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("Enclosures")}>Enclosures</Button>
                            <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("Notes")}>Notes</Button>
                            <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("Methods Adopted")}>Methods Adopted</Button>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        {title === "Observations" && (
                            <div>
                                <label className='form-label text-danger'>Observations</label>
                                <textarea name='observations' value={formData.observations} onChange={handleInputChange} className='form-control' />
                            </div>
                        )}

                        {title === "Opinions" && (
                            <div>
                                <label className='form-label text-danger'>Opinions</label>
                                <textarea name='opinion' value={formData.opinion} onChange={handleInputChange} className='form-control' />
                            </div>
                        )}

                        {title === "Enclosures" && (
                            <div>
                                <label className='form-label text-danger'>Enclosures</label>
                                <textarea name='enclosures' value={formData.enclosures} onChange={handleInputChange} className='form-control' />
                            </div>
                        )}

                        {title === "Notes" && (
                            <div>
                                <label className='form-label text-danger'>Notes</label>
                                <textarea name='notes' value={formData.notes} onChange={handleInputChange} className='form-control' />
                            </div>
                        )}

                        {title === "Methods Adopted" && (
                            <div>
                                <label className='form-label text-danger'>Method Adopted</label>
                                <textarea name='methodAdopted' value={formData.methodAdopted} onChange={handleInputChange} className='form-control' />
                            </div>
                        )}
                    </div>

                    <div className='col mt-3'>
                        <div className='d-flex justify-content-center'>
                            <Button variant='contained' style={{ margin: '0 8px' }}>Exhibits</Button>
                            <Button variant='contained' style={{ margin: '0 8px' }} color="success" onClick={handleSave}>Save</Button>
                            <Button variant='contained' style={{ margin: '0 8px' }} color="success" onClick={handleReset}>Reset</Button>
                            <Button variant='contained' style={{ margin: '0 8px' }} color='error'>View</Button>
                            <Button variant='contained' style={{ margin: '0 8px' }} color='error' onClick={handleBack}>Back</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DespatchEntrycomp;
