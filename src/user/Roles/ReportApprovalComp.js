import React, { useEffect, useState } from 'react'
import Heading from '../../common/Heading'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { postApiData } from '../../redux/slice/postSlice';
import ReceivedFrom from '../../common/CommonApi/ReceivedFrom';
import { callApi } from '../../common/CallApi';

const ReportApprovalComp = ({ openfirst, opensecond, fslregnoid }) => {
    const dispatch = useDispatch();
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const [title, setTitle] = useState("observation");
    const [assigned, setassigned] = useState([])

    const [formData, setFormData] = useState({
        observation: '',
        opinion: "",
        enclosure: "",
        methodsProc: '',
        note: '',
        fslRegNo: "",
        forwardedTo: '',
        approvalStatus: '',
        forwardFinal: '',
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
        openfirst(true)
        opensecond(false)
    }


    const handleReceivedFromChange = (selectedValue) => {
        // Update the state in the parent component
        setFormData({
            ...formData,
            fromdept: selectedValue
        });
    };

    const apigeturl = `${apiPrefix}/user/reportapproval/getreportdatabyfileid`;
    const apigetassig = `${apiPrefix}/alluser/preexamination/getalluser`;

    useEffect(() => {
        callApi(`${apigeturl}?id=${fslregnoid}`).then(
            (response) => {
                setFormData(response);
            }
        );
        callApi(apigetassig)
            .then((response) => {
                setassigned(response);
            });

    }, [fslregnoid])


    const apiUrl = `${apiPrefix}/user/reportapproval/savereportstatus`;

    const handleSave = () => {
        dispatch(postApiData({ apiUrl, postData: formData }));
    }

    const handleReset = () => {
        setFormData({
            approvalStatus: '',
            forwardFinal: '',

        })
    }
    const disabled = true
    return (
        <div className='container'>

            <div className='card-body'>
                <div className='row justify-content-center'>
                    <div className='row justify-content-center'>
                        <div className='col-2'>
                            <label className='label'>File Number</label>
                        </div>
                        <div className='col-3'>
                            <input className='form-control' value={formData.fslRegNo} disabled type='text' />
                        </div>
                    </div>
                    <div className='row mb-3'>

                        <ReceivedFrom formData={formData} setFormData={setFormData} onReceivedFromChange={handleReceivedFromChange} disabled={disabled} />

                        <div className='col'>
                            <label className='form-label'>Reference No</label>
                            <input type='text' className='form-control' name="" value={formData.refno} disabled />
                        </div>
                        <div className='col'>
                            <label className='form-label'>Status</label>
                            <select className='form-select' onChange={handleInputChange} name='approvalStatus' value={formData.approvalStatus}>
                                <option value="1stapproval">Approved</option>
                                <option value="nonaproved">Non Approved</option>
                                <option value="approved">Final Approved</option>
                            </select>
                        </div>

                        <div className='col'>
                            <label className='form-label'>Forwarded To</label>
                            <select
                                name='forwardFinal'
                                value={formData.forwardFinal}
                                className='form-select'
                                onChange={handleInputChange}
                                disabled={formData.approvalStatus === 'approved'}
                            >
                                <option value="" disabled={!formData.approvalStatus} selected={!formData.approvalStatus}>Select User</option>
                                {assigned.map((data) => (
                                    <option key={data.userid} value={data.userid}>
                                        {data.userName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className='col mt-3'>
                    <div className='d-flex justify-content-center'>
                        <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("observation")}>observation</Button>
                        <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("opinion")}>opinion</Button>
                        <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("enclosure")}>enclosure</Button>
                        <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("note")}>note</Button>
                        <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("Methods Adopted")}>Methods Adopted</Button>
                    </div>
                </div>

                <div className='row mt-3'>
                    {title === "observation" && (
                        <div>
                            <label className='form-label text-danger'>observation</label>
                            <textarea name='observation' value={formData.observation} onChange={handleInputChange} className='form-control' disabled />
                        </div>
                    )}

                    {title === "opinion" && (
                        <div>
                            <label className='form-label text-danger'>opinion</label>
                            <textarea name='opinion' value={formData.opinion} onChange={handleInputChange} className='form-control' disabled />
                        </div>
                    )}

                    {title === "enclosure" && (
                        <div>
                            <label className='form-label text-danger'>enclosure</label>
                            <textarea name='enclosure' value={formData.enclosure} onChange={handleInputChange} className='form-control' disabled />
                        </div>
                    )}

                    {title === "note" && (
                        <div>
                            <label className='form-label text-danger'>note</label>
                            <textarea name='note' value={formData.note} onChange={handleInputChange} className='form-control' disabled />
                        </div>
                    )}

                    {title === "Methods Adopted" && (
                        <div>
                            <label className='form-label text-danger'>Method Adopted</label>
                            <textarea name='methodsProc' value={formData.methodsProc} onChange={handleInputChange} className='form-control' disabled />
                        </div>
                    )}
                </div>

                <div className='col mt-3'>
                    <div className='d-flex justify-content-center'>
                        <Button variant='contained' style={{ margin: '0 8px' }}>Exhibits</Button>
                        <Button variant='contained' style={{ margin: '0 8px' }} color="success" onClick={handleSave}>Save</Button>
                        <Button variant='contained' style={{ margin: '0 8px' }} color="success" onClick={handleReset}>Reset</Button>
                        <Button variant='contained' style={{ margin: '0 8px' }} color='error'>Download PDF</Button>
                        <Button variant='contained' style={{ margin: '0 8px' }} color='error' onClick={handleBack}>Back</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportApprovalComp;
