import React, { useState } from 'react'

import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material';
import Heading from '../../common/Heading';
import { faCheckCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBDataTable } from 'mdbreact';
import ReportEntryDialog from './InnerComps/ReportEntryDialog';
import { callApi } from '../../common/CallApi';
const ReportEntry = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tbdata, setTbdata] = useState([]);
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const [fslregnoid, setfslregnoid] = useState([])

    const [formData, setFormData] = useState({
        fromDate: "",
        toDate: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleGetDatabyid = (fslRegNo) => {
        setfslregnoid(fslRegNo);

        setIsModalOpen(true)

    }


    const data = {
        columns: [
            { label: "Action", field: "action", sort: "asc", width: 270 },
            { label: "File No", field: "fslRegNo", sort: "asc", width: 150 },
            { label: "Assigned By", field: "assignedBy", sort: "asc", width: 150 },
            { label: "Assigned Date", field: "assignedDate", sort: "asc", width: 270 },
            { label: "Parcels Recived", field: "parcelsReceived", sort: "asc", width: 270 },
            { label: "No of Parcels", field: "noOfParcels", sort: "asc", width: 270 },
        ],
        rows: tbdata.map((item) => ({
            action: (
                <>
                    <Button variant="contained" onClick={() => handleGetDatabyid(item?.fslRegNo)}>Open</Button>
                </>
            ),
            fslRegNo: item.fslRegNo,
            assignedBy: item.assignedBy,
            assignedDate: item.assignedDate,
            parcelsReceived: item.parcelsReceived,
            noOfParcels: item.noOfParcels,
            // fslregno: item.fslregno,
        })),
    };

    const apigetData = `${apiPrefix}/alluser/postexamination/getbydaterange`;

    const handleSubmit = () => {
        callApi(`${apigetData}?fromDate=${formData.fromDate}&toDate=${formData.toDate}`).then(
            (response) => {
                setTbdata(response);
            }
        );
    };


    return (
        <div className='container'>
            <div className='card m-3 shadow'>
                <Heading title="Report Entry" />
                <div className='card-body'>
                    <div className='row m-2'>
                        <div className='col'>
                            <label className='form-label'>Registration Date</label>
                            <select className='form-select'>
                                <option value='' selected disabled>Select </option>
                                <option>Registration Date</option>
                                <option>Allotment Date</option>
                            </select>

                        </div>
                        <div className='col'>
                            <label className='form-label'>Despatch From Date</label>
                            <input
                                type="date"
                                name="fromDate"
                                value={formData.fromDate}
                                onChange={handleInputChange}
                                className="form-control"
                            />                        </div>
                        <div className='col'>
                            <label className='form-label'>Despatch Till Date</label>
                            <input
                                type="date"
                                name="toDate"
                                value={formData.toDate}
                                onChange={handleInputChange}
                                className="form-control"
                            />                        </div>
                        <div className='col mt-2'>
                            <label className='form-label'></label>
                            <p>Or</p>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Case No</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='col mt-4'>
                            <Button variant="contained" color="success" onClick={handleSubmit}>
                                Search
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </Button>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <MDBDataTable striped bordered hover data={data} />
                    </div>

                </div>
            </div>
            <ReportEntryDialog
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                fslregnoid={fslregnoid}
            />
        </div>
    )
}

export default ReportEntry
