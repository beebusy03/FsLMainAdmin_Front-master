import React, { useEffect, useState } from 'react'
import Heading from '../../common/Heading'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { postApiData } from '../../redux/slice/postSlice';
import ReceivedFrom from '../../common/CommonApi/ReceivedFrom';
import { callApi } from '../../common/CallApi';
import { toast } from 'react-toastify';

const PostExamComp = ({ postcomShow, tableShow, fslregnoid }) => {
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
        tableShow(true)
        postcomShow(false)
    }


    const handleReceivedFromChange = (selectedValue) => {
        setFormData({
            ...formData,
            fromdept: selectedValue
        });
    };

    const apigeturl = `${apiPrefix}/user/postexamination/assignedto`;
    const apigetassig = `${apiPrefix}/user/preexamination/getalluser`;

    useEffect(() => {
        callApi(`${apigeturl}?fslregernumber=${fslregnoid}`).then(
            (response) => {
                setFormData(response);
            }
        );
        callApi(apigetassig)
            .then((response) => {
                setassigned(response);
            });

    }, [fslregnoid])


    const apiUrl = `${apiPrefix}/user/postexamination/savepostexamination`;

    const handleSave = () => {
        dispatch(postApiData({ apiUrl, postData: formData }))
        toast.success("Successfully saved");
        tableShow(true)
        postcomShow(false)
    }

    const handleReset = () => {
        setFormData({
            observation: '',
            opinion: "",
            enclosure: "",
            methodsProc: '',
            note: '',

        })
    }
    return (
        <div className='container'>
            <div className='card m-3 shadow'>
                <Heading title="EXAMINATION DETAIL ENTRY" />
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
                            {/* <div className='col'>
                                <label className='form-label'>Received From</label>
                                <input type='text' className='form-control' />
                            </div> */}
                            <ReceivedFrom formData={formData} setFormData={setFormData} onReceivedFromChange={handleReceivedFromChange} />

                            <div className='col'>
                                <label className='form-label'>Reference No</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col'>
                                <label className='form-label'>No of Parcels</label>
                                <input type='text' className='form-control' value={formData.noOfParcels} />
                            </div>
                            <div className='col'>
                                <label className='form-label'>No Of Exhibits</label>
                                <input type='text' className='form-control' value={formData.noOfExhibit} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <label className='form-label'>Examination Start Date</label>
                                <input type='date' className='form-control' value={formData.examStartDate} />
                            </div>
                            <div className='col'>
                                <label className='form-label'>Examination End Date</label>
                                <input type='date' className='form-control' value={formData.examEndDate} />
                            </div>
                            <div className='col'>
                                <label className='form-label'>Forwarded To</label>
                                <select
                                    name='forwardedTo'
                                    value={formData.forwardedTo}
                                    className='form-select'
                                    onChange={handleInputChange}
                                >
                                    <option value="" selected disabled>Select User</option>
                                    {assigned.map((data) => (
                                        <option key={data.userid} value={data.userid}>
                                            {data.userName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='col'>
                                <label className='form-label'>Manual Reference</label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>                    </div>

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
                                <textarea name='observation' value={formData.observation} onChange={handleInputChange} className='form-control' />
                            </div>
                        )}

                        {title === "opinion" && (
                            <div>
                                <label className='form-label text-danger'>opinion</label>
                                <textarea name='opinion' value={formData.opinion} onChange={handleInputChange} className='form-control' />
                            </div>
                        )}

                        {title === "enclosure" && (
                            <div>
                                <label className='form-label text-danger'>enclosure</label>
                                <textarea name='enclosure' value={formData.enclosure} onChange={handleInputChange} className='form-control' />
                            </div>
                        )}

                        {title === "note" && (
                            <div>
                                <label className='form-label text-danger'>note</label>
                                <textarea name='note' value={formData.note} onChange={handleInputChange} className='form-control' />
                            </div>
                        )}

                        {title === "Methods Adopted" && (
                            <div>
                                <label className='form-label text-danger'>Method Adopted</label>
                                <textarea name='methodsProc' value={formData.methodsProc} onChange={handleInputChange} className='form-control' />
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

export default PostExamComp;
