
import React, { useEffect, useState } from 'react'
import Redstar from '../../../common/Redstar'
import "../../../css/iconanimation.css"
import { callApi } from '../../../common/CallApi'
import SectionMultiSelect from '../../../common/SectionMultiSelect'
const ParcelSectionDetailsTab = ({ formData, setFormData, setSelectedSections, selectedSections }) => {

    const [getallsection, setgetallsection] = useState([])
    const [getalloffice, setgetalloffice] = useState([])

    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const getallsectionapi = `${apiPrefix}/alluser/allddl/getallsection`;
    const getallofficeapi = `${apiPrefix}/alluser/allddl/getalloffice`;


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    useEffect(() => {
        callApi(getallsectionapi)
            .then((response) => {
                setgetallsection(response);
            })
        callApi(getallofficeapi)
            .then((response) => {
                setgetalloffice(response);
            })
    }, []);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    Diary Date <Redstar />
                </div>
                <div className='col-md-3'>
                    <input
                        type="date"
                        className="form-control"
                        name="diarydate"
                        value={formData.diarydate}
                        onChange={handleInputChange}
                    />                 </div>
                <div className='col-md-3'>
                    Diary No <Redstar />
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="diaryno"
                        value={formData.diaryno}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    No Of Packets/Articles
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="noofparcels"
                        value={formData.noofparcels}
                        onChange={handleInputChange}
                    />                 </div>
                <div className='col-md-3'>
                    Packets/Articles Marking
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="parceldetail"
                        value={formData.parceldetail}
                        onChange={handleInputChange}
                    />                 </div>

            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    Packets/Articles Seal Impression
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="sealimpression"
                        value={formData.sealimpression}
                        onChange={handleInputChange}
                    />                 </div>
                {/* <div className='col-md-3'>
                    Seal Status
                </div>
                <div className='col-md-3'>
                    <select type='text' className="form-select" name='sealsintact' value={formData.sealstatus} onChange={handleInputChange}>
                        <option value="" disabled selected>Select Seal Status </option>
                        <option value='intact'>Intact</option>
                        <option value='intacttally'>Intact And Tallying</option>
                        <option value='nil'>Nil</option>
                    </select>
                </div> */}
            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    No Of Seals
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="noofseals"
                        value={formData.noofseals}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-md-3'>
                    Received Date
                </div>
                <div className='col-md-3'>
                    <input
                        type="date"
                        className="form-control"
                        name="receivedDate"
                        value={formData.receivedDate}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    Old File No
                </div>
                <div className='col-md-3'>
                    <input
                        type="text"
                        className="form-control"
                        name="oldfileno"
                        value={formData.oldfileno}
                        onChange={handleInputChange}
                    />                 </div>
                <div className='col-md-3'>
                    Section Division <Redstar />
                </div>
                <div className='col-md-3'>
                    <SectionMultiSelect setSelectedSections={setSelectedSections} selectedSections={selectedSections} />


                </div>

            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    Divisions<Redstar />
                </div>
                <div className='col-md-3'>
                    <select type='text' className="form-select" name='sectionno' value={formData.sectionno} onChange={handleInputChange}>
                        <option value="" disabled selected>Select Division </option>
                        <option value="2">AT DIVISION LEVEL</option>
                        <option value="1">AT REGISTRATION</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default ParcelSectionDetailsTab