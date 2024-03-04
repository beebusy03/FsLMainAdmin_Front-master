import React, { useEffect, useState } from 'react';
import Redstar from '../../../common/Redstar';
import { callApi } from '../../../common/CallApi';

const ForwardingAuthorityTab = ({ formData, setFormData }) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const [districts, setDistricts] = useState([]);

    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const getDistrictsApi = `${apiPrefix}/alluser/allddl/getalldistrictbyuserid`;

    useEffect(() => {
        callApi(getDistrictsApi)
            .then((response) => {
                setDistricts(response);
            })
            .catch((error) => {
                console.error('API request failed:', error);
            });
    }, []);
    return (
        <div className='container'>
            {/* Name Of Authority and Address */}
            <div className='row'>
                <div className='col-md-3'>
                    Name Of Authority <Redstar />
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"

                        name="faname"
                        value={formData.faname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-md-3'>
                    Address <Redstar />
                </div>
                <div className='col-md-3'>
                    <textarea
                        type="text"
                        className="form-control"

                        name="add1"
                        value={formData.add1}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {/* PinCode, District, Email ID, and Phone No */}
            <div className='row mt-3'>
                <div className='col-md-3'>
                    PinCode
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                    />                </div>
                <div className='col-md-3'>
                    District <Redstar />
                </div>
                <div className='col-md-3'>
                    <select className="form-select" name="distcode" value={formData.distcode} onChange={handleInputChange}>
                        <option value="" disabled selected>Select District</option>
                        {districts.map((district) => (
                            <option key={district.distcd} value={district.distcd}>
                                {district.distname}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Email ID and Phone No */}
            <div className='row mt-3'>
                <div className='col-md-3'>
                    Email ID
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="foremail"
                        value={formData.foremail}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-md-3'>
                    Phone No	 <Redstar />
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="forphone"
                        value={formData.forphone}
                        onChange={handleInputChange}
                        maxLength={10}
                    />
                </div>
            </div>

            {/* Received Through, F A Letter/Memo No, F A Letter/Memo Date, Messenger Name */}
            <div className='row mt-3'>
                <div className='col-md-3'>
                    Received Through	 <Redstar />
                </div>
                <div className='col-md-3'>
                    <select type='text' className="form-select" name='sentthrough' value={formData.sentthrough} onChange={handleInputChange}>
                        <option value="" disabled selected>Select </option>
                        <option value="mess">Messenger</option>
                        <option value="post">Post</option>
                    </select>
                </div>
                <div className='col-md-3'>
                    F A Letter/Memo No 	 <Redstar />
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="messdetail"
                        value={formData.messdetail}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            {formData.sentthrough === 'post' && (
                <div className='row mt-3'>
                    <div className='col-md-3'>
                        Post Type	 <Redstar />
                    </div>
                    <div className='col-md-3'>
                        <input type='text' className="form-control" name='postType' value={formData.postType} onChange={handleInputChange} />
                    </div>
                    <div className='col-md-3'>
                        Reg. Speed Post No 	 <Redstar />
                    </div>
                    <div className='col-md-3'>
                        <input
                            type="text"
                            className="form-control"
                            name="postNumber"
                            value={formData.postNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            )}

            {/* F A Letter/Memo Date, Messenger Name, Messenger Mobile No, and Belt/ Batch/ ID No */}
            <div className='row mt-3'>
                <div className='col-md-3'>
                    F A Letter/Memo Date<Redstar />
                </div>
                <div className='col-md-3'>
                    <input
                        type="date"
                        className="form-control"
                        name="referencedate"
                        value={formData.referencedate}
                        onChange={handleInputChange}
                    />
                </div>
                {formData.sentthrough === 'mess' && (
                    <>
                        <div className='col-md-3'>
                            Messenger Name<Redstar />
                        </div>
                        <div className='col-md-3'>
                            <input
                                type="text"
                                className="form-control"
                                name="messname"
                                value={formData.messname}
                                onChange={handleInputChange}
                            />
                        </div>
                    </>
                )}

            </div>

            <div className='row mt-3'>
                <div className='col-md-3'>
                    Messenger Mobile No<Redstar />
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="messmobileno"
                        value={formData.messmobileno}
                        onChange={handleInputChange}
                        maxLength={10}
                    />
                </div>
                <div className='col-md-3'>
                    Belt/ Batch/ ID No<Redstar />
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="registerid"
                        value={formData.registerid}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ForwardingAuthorityTab;
