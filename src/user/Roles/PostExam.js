import React, { useEffect, useState } from "react";
import { Button, Radio, FormControlLabel } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../common/Heading";
import { MDBDataTable } from "mdbreact";
import { callApi } from "../../common/CallApi";
import PostExamComp from "./PostExamComp";

const PostExam = () => {
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const apigetData = `${apiPrefix}/user/postexamination/getbydaterange`;
    const [tbdata, setTbdata] = useState([]);
    const [postcomShow, setpostcomShow] = useState(false)
    const [tableShow, settableShow] = useState(true)
    const [fslregnoid, setfslregnoid] = useState([])

    const [formData, setFormData] = useState({
        fromDate: "",
        toDate: "",
    });


    const handleGetDatabyid = (fslRegNo) => {
        setfslregnoid(fslRegNo);
        setpostcomShow(true);
        settableShow(false);
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




    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        callApi(`${apigetData}?fromDate=${formData.fromDate}&toDate=${formData.toDate}`).then(
            (response) => {
                setTbdata(response);
            }
        );
    };

    return (
        <div className="container">
            {tableShow && (
                <div className="card m-3 shadow">
                    <Heading title="POST EXAMINATION DETAIL ENTRY" />
                    <div className="card-body">
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
                                <div className="col-3">
                                    <input
                                        type="date"
                                        name="toDate"
                                        value={formData.toDate}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col">
                                    <Button variant="contained" color="success" onClick={handleSubmit}>
                                        Go
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="row">
                                <MDBDataTable striped bordered hover data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {postcomShow && (
                <PostExamComp postcomShow={setpostcomShow} tableShow={settableShow} fslregnoid={fslregnoid} />
            )}
        </div>
    );
};

export default PostExam;
