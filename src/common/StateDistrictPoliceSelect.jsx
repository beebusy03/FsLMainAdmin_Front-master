import React, { useEffect, useState } from 'react'
import { callApi } from './CallApi';
import Redstar from './Redstar';

const StateDistrictPoliceSelect = ({ onSelectionChange }) => {
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
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
            const paramsDistrict = { Statecode: selectedState };
            callApi(`${apiPrefix}/alluser/allddl/getalldistrict?${new URLSearchParams(paramsDistrict)}`)
                .then((response) => {
                    setDistricts(response);
                });
        }
    }, [selectedState]);

    useEffect(() => {
        if (selectedDistrict) {
            const paramsPolice = { dist: selectedDistrict };
            callApi(`${apiPrefix}/alluser/allddl/getallpolice?${new URLSearchParams(paramsPolice)}`)
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
        </div>
    )
}

export default StateDistrictPoliceSelect