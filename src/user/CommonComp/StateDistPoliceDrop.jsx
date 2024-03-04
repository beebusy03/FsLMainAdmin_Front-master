import React, { useEffect, useState } from 'react';
import { callApi } from '../../common/CallApi';
import Redstar from '../../common/Redstar';

const StateDistPoliceDrop = ({ onStateChange, onDistrictChange, onPoliceChange }) => {
    const [statecode, setStateCode] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [policeStations, setPoliceStations] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedPoliceStation, setSelectedPoliceStation] = useState('');

    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const getStateListApi = `${apiPrefix}/alluser/allddl/getallstate`;
    const getDistrictsApi = `${apiPrefix}/alluser/allddl/getalldistrict`;
    const getPoliceStationsApi = `${apiPrefix}/alluser/allddl/getpolicestation`;


    useEffect(() => {
        const fetchData = async () => {
            const stateList = await callApi(getStateListApi);
            setStateCode(stateList);
        };

        fetchData();
    }, [getStateListApi]);

    useEffect(() => {
        if (selectedState) {
            callApi(`${getDistrictsApi}?stateCode=${selectedState}`)
                .then((response) => {
                    setDistricts(response);
                });
        }
    }, [selectedState]);

    useEffect(() => {
        if (selectedDistrict) {
            callApi(`${getPoliceStationsApi}?dist=${selectedDistrict}`)
                .then((response) => {
                    setPoliceStations(response); // Fix: Use setPoliceStations instead of setDistricts
                });
        }
    }, [selectedDistrict]);





    const handleStateChange = (event) => {
        const value = event.target.value
        setSelectedState(value)
        onStateChange(value) // Notify parent of select change
    }

    const handleDistrictChange = (event) => {
        const value = event.target.value
        setSelectedDistrict(value)
        onDistrictChange(value) // Notify parent of district change
    }
    const handlePoliceStationChange = (event) => {
        const value = event.target.value
        setSelectedPoliceStation(value)
        onPoliceChange(value) // Notify parent of district change
    }

    return (
        <React.Fragment>
            <div className='row'>
                <div className='col'>
                    <label className='form-label'>State/UT <Redstar /></label>
                    <select className="form-select" onChange={handleStateChange}>
                        <option value="" disabled selected={!selectedState}>Select State/UT</option>
                        {statecode.map((state) => (
                            <option key={state.statecd} value={state.statecd}>
                                {state.statename}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='col'>
                    <label className='form-label'>District <Redstar /></label>
                    <select className="form-select" onChange={handleDistrictChange}>
                        <option value="" disabled selected={!selectedDistrict}>Select District</option>
                        {districts.map((district) => (
                            <option key={district.distcd} value={district.distcd}>
                                {district.distname}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='col'>
                    <label className='form-label'>Police Station <Redstar /></label>
                    <select className="form-select" onChange={handlePoliceStationChange}>
                        <option value="" disabled selected={!selectedPoliceStation}>Select Police Station</option>
                        {policeStations.map((station) => (
                            <option key={station.psCode} value={station.psCode}>
                                {station.policeSt}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StateDistPoliceDrop;
