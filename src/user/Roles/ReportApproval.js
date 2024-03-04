import React, { useState } from "react";
import { Button } from "@mui/material";
import Heading from "../../common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { MDBDataTable } from 'mdbreact';
import ReportApprovalComp from "./ReportApprovalComp";
import { callApi } from "../../common/CallApi";
const ReportApproval = () => {
    const [openfirst, setopenfirst] = useState(true);
    const [opensecond, setopensecond] = useState(false);
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
        setopenfirst(false)
        setopensecond(true)
    }

    const data = {
        columns: [
            { label: "Action", field: "action", sort: "asc", width: 270 },
            { label: "File No", field: "fslRegNo", sort: "asc", width: 150 },
            { label: "FIR No", field: "firno", sort: "asc", width: 150 },
            { label: "Recived From", field: "assignedTo", sort: "asc", width: 270 },
            { label: "Refrence No", field: "parcelsReceived", sort: "asc", width: 270 },
            { label: "No of Parcels", field: "noOfParcels", sort: "asc", width: 270 },
            { label: "Status", field: "approvalStatus", sort: "asc", width: 270 },
        ],
        rows: tbdata.map((item) => ({
            action: (
                <>
                    <Button variant="contained" onClick={() => handleGetDatabyid(item?.fslRegNo)}>Open</Button>
                </>
            ),
            fslRegNo: item.fslRegNo,
            firno: item.firno,
            assignedTo: item.assignedTo,
            parcelsReceived: item.parcelsReceived,
            noOfParcels: item.noOfParcels,
            noOfParcels: item.noOfParcels,
            approvalStatus: item.approvalStatus,
        })),
    };

    const apigetData = `${apiPrefix}/user/reportapproval/getreportdata`;

    const handleSubmit = () => {

        callApi(`${apigetData}?fromDate=${formData.fromDate}&toDate=${formData.toDate}`).then(
            (response) => {
                setTbdata(response);
            }
        );
    };


    return (
        <div className="container">
            <div className="card m-3 shadow">
                <Heading title="REPORT APPROVAL" />
                <div className="card-body">
                    {openfirst && (
                        <>
                            <div className="row m-2">
                                <div className="row" style={{ alignItems: "center" }}>
                                    <div className="col-3">
                                        <div className="form-lable">CASES RECEIVED FROM :</div>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            type="date"
                                            name="fromDate"
                                            value={formData.fromDate}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-1">
                                        <div className="form-lable">TILL : </div>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            type="date"
                                            name="toDate"
                                            value={formData.toDate}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-1 form-lable"></div>
                                    <div className="col-1">

                                        <Button variant="contained" color="success" onClick={handleSubmit} >
                                            Go<FontAwesomeIcon icon={faCheckCircle} /></Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-3">
                                <MDBDataTable striped bordered hover data={data} />
                            </div>
                        </>
                    )}

                </div>
                {opensecond && (
                    <ReportApprovalComp openfirst={setopenfirst} opensecond={setopensecond} fslregnoid={fslregnoid} />
                )}

            </div>

        </div>
    );
};

export default ReportApproval;
