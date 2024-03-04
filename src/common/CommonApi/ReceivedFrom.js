import React, { useEffect, useState } from 'react'
import Redstar from '../Redstar'
import { callApi } from '../CallApi';

const ReceivedFrom = ({ formData, setFormData, onReceivedFromChange, disabled }) => {
    const [recivedfrom, setrecivedfrom] = useState([])
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const alldepartment = `${apiPrefix}/alluser/allddl/getalldepartment`;

    useEffect(() => {

        callApi(alldepartment)
            .then((response) => {
                setrecivedfrom(response);
            });
    }, []);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        onReceivedFromChange(value)
    };

    return (
        <div>
            <div className='col-md-3'>
                Received From <Redstar />
            </div>
            <div className='col-md-3'>
                <select className="form-select" value={formData.fromdept} name='fromdept' onChange={handleInputChange} disabled>
                    <option value="" selected disabled>Select Received From</option>
                    {recivedfrom.map((data) => (
                        <option key={data.departmentId} value={data.departmentId}>
                            {data.departmentName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default ReceivedFrom