import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Redstar from '../../../common/Redstar';
import { callApi } from '../../../common/CallApi';


const RegistrationTab = ({ setFormData, formData, onSelectionChange, }) => {
    const apiPrefix = process.env.REACT_APP_API_PREFIX;



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const [firtypelist, setFirtypelist] = useState([])
    const [recivedfrom, setrecivedfrom] = useState([])
    const getfirtypelist = `${apiPrefix}/alluser/allddl/getallfirtype`;
    const alldepartment = `${apiPrefix}/alluser/allddl/getalldepartment`;

    useEffect(() => {
        callApi(getfirtypelist)
            .then((response) => {
                setFirtypelist(response);
            });
        callApi(alldepartment)
            .then((response) => {
                setrecivedfrom(response);
            });
    }, []);


    const [statecode, setStateCode] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [policeStations, setPoliceStations] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedPoliceStation, setSelectedPoliceStation] = useState('');
    const getStateListApi = `${apiPrefix}/alluser/allddl/getallstate`;

    useEffect(() => {
        callApi(getStateListApi)
            .then((response) => {
                setStateCode(response);
            });
    }, []);

    useEffect(() => {
        if (selectedState) {
            const paramsDistrict = { stateCode: selectedState };
            callApi(`${apiPrefix}/alluser/allddl/getalldistrict?${new URLSearchParams(paramsDistrict)}`)
                .then((response) => {
                    setDistricts(response);
                });
        }
    }, [selectedState]);

    useEffect(() => {
        if (selectedDistrict) {
            const paramsPolice = { dist: selectedDistrict };
            callApi(`${apiPrefix}/alluser/allddl/getpolicestation?${new URLSearchParams(paramsPolice)}`)
                .then((response) => {
                    setPoliceStations(response);
                });
        }
    }, [selectedDistrict]);

    const handleStateSelection = (event) => {
        const selectedState = event.target.value;
        setSelectedState(selectedState);
        onSelectionChange(selectedState, '', '');
    };
    const handleDistrictSelection = (event) => {
        const selectedDistrict = event.target.value;
        setSelectedDistrict(selectedDistrict);
        onSelectionChange(selectedState, selectedDistrict, '');

    };

    const handlePoliceStationSelection = (event) => {
        const selectedPoliceStation = event.target.value;
        setSelectedPoliceStation(selectedPoliceStation);
        onSelectionChange(selectedState, selectedDistrict, selectedPoliceStation);
    };

    return (
        <div className='container'>

            <div className='row mt-3'>
                <div>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-sm-6'>State/UT <Redstar /></div>
                        <div className='col-md-3 col-sm-6'>
                            <select className="form-select" value={selectedState} name='statecode' onChange={handleStateSelection}>
                                <option value="" selected disabled>Select State/UT</option>
                                {statecode.map((state) => (
                                    <option key={state.statecd} value={state.statecd}>
                                        {state.statename}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            District
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <select className="form-select" name="distcode" value={selectedDistrict} onChange={handleDistrictSelection}>
                                <option value="" selected disabled>Select District</option>
                                {districts.map((district) => (
                                    <option key={district.distcd} value={district.distcd}>
                                        {district.distname}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-sm-6'>
                            Police Station
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <select className="form-select" name="policest" value={selectedPoliceStation} onChange={handlePoliceStationSelection}>
                                <option value="" selected disabled>Select Police Station</option>
                                {policeStations.map((station) => (
                                    <option key={station.psCode} value={station.psCode}>
                                        {station.policeSt}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    Received From <Redstar />
                </div>
                <div className='col-md-3'>
                    <select className="form-select" value={formData.fromdept} name='fromdept' onChange={handleInputChange}>
                        <option value="" selected disabled>Select Received From</option>
                        {recivedfrom.map((data) => (
                            <option key={data.departmentId} value={data.departmentId}>
                                {data.departmentName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='col-md-3'>
                    Fir Type
                </div>
                <div className='col-md-3'>
                    <select className="form-select" name="firtype" value={formData.firtype} onChange={handleInputChange}>
                        <option value="" selected disabled>Select Fir Type</option>
                        <option value="FIRNO">Crime (FIR) Case No</option>
                        <option value="OTHERS">Other</option>
                    </select>

                </div>
            </div>
            {formData.firtype === 'OTHERS' && (
                <div className='row mt-3'>
                    <div className='col-md-3'>
                        Fir Type List
                    </div>
                    <div className='col-md-3'>
                        <select className="form-select" value={formData.firtype} name='firtype' onChange={handleInputChange}>
                            <option value="" selected disabled>Select</option>
                            {firtypelist.map((data) => (
                                <option key={data.id} value={data.id}>
                                    {data.firType}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-3'>
                        Other
                    </div>
                    <div className='col-md-3'>
                        <input type='text' className='form-control' name='otherfirtype' value={formData.otherfirtype} onChange={handleInputChange} />
                    </div>
                </div>
            )}
            {formData.firtype === 'FIRNO' && (
                <div className="row mt-3">
                    <div className="col-md-3">
                        <label htmlFor="firtype" className="form-label">
                            FIR Number
                        </label>
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter FIR Number"
                            name="firno"
                            value={formData.firno}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="year" className="form-label">
                            Year
                        </label>
                    </div>
                    <div className="col-md-3">
                        <select className="form-select" name="year1" value={formData.year1} onChange={handleInputChange}>
                            <option value="" selected disabled>Select Year </option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                        </select>
                    </div>
                </div>
            )}
            <div className='row mt-3 justify-content-center'>
                <div className='col-6 col-md-3 '>
                    <Button variant="contained" color='success'>Form State &nbsp; <FontAwesomeIcon icon={faFileAlt} /></Button>
                </div>
                <div className=' col-6 col-md-3'>
                    <Button variant="contained" color='success'>Form ICJS  &nbsp;<FontAwesomeIcon icon={faFileAlt} /></Button>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-md-3'>
                    FIR Date
                </div>
                <div className='col-md-3'>
                    <input
                        type="date"
                        className="form-control"
                        name="firdate"
                        value={formData.firdate}
                        onChange={handleInputChange}
                    />                </div>
                <div className='col-md-3'>
                    Court Name
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="courtname"
                        value={formData.courtname}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    Court Case No
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="caseno"
                        value={formData.caseno}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-md-3'>
                    <Button variant="contained" color='success'>Form ICJS&nbsp;<FontAwesomeIcon icon={faFileAlt} /></Button>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    Section Of Law
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="lawsection"
                        value={formData.lawsection}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-md-3'>
                    Organisation
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="organi"
                        value={formData.organi}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    Remarks
                </div>
                <div className='col-md-9'>
                    <textarea
                        type="text"
                        className="form-control"
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default RegistrationTab;
