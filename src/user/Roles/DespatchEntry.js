import React, { useEffect, useState } from "react";

import { Box, Button } from "@mui/material";
import { MDBDataTable } from "mdbreact";
import { callApi } from "../../common/CallApi";
import DespatchEntrycomp from "./InnerComps/DespatchEntrycomp";
import DespatchEntryDialog from "./InnerComps/DespatchEntryDialog";
import Heading from "../../common/Heading";
const DespatchEntry = () => {
    const [openfirst, setopenfirst] = useState(true);
    const [opensecond, setopensecond] = useState(false);
    const [tbdata, setTbdata] = useState([]);
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const [fslregnoid, setfslregnoid] = useState([])
    const [cardcomp, setcardcomp] = useState(true);
    const [formData, setFormData] = useState({
        fromdate: "",
        toDate: "",
    });


    // useEffect(() => {
    //     callApi(apigetData)
    //         .then((response) => {
    //             setFormData(response);
    //         });
    // }, []);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const data = {
        columns: [
            { label: "Action", field: "action", sort: "asc", width: 270 },
            { label: "File No", field: "fslregno", sort: "asc", width: 150 },
            { label: "FIR No", field: "firno", sort: "asc", width: 150 },
            { label: "Recived From", field: "fsloffice", sort: "asc", width: 270 },
            { label: "Court Name", field: "courtname", sort: "asc", width: 270 },
            { label: "No of Parcels", field: "noofparcels", sort: "asc", width: 270 },
            { label: "Status", field: "approvalStatus", sort: "asc", width: 270 },
        ],
        rows: tbdata.map((item) => ({
            action: (
                <>
                    <Button variant="contained" onClick={() => handleGetDatabyid(item?.fslregno)}>Open</Button>
                </>
            ),
            fslregno: item.fslregno,
            firno: item.firno,
            fsloffice: item.fsloffice,
            courtname: item.courtname,
            courtname: item.courtname,
            noofparcels: item.noofparcels,
            approvalStatus: item.approvalStatus,
        })),
    };

    const handleGetDatabyid = (fslregno) => {
        setfslregnoid(fslregno);
        setIsModalOpen(true)
        // setopensecond(true)
    }


    const apigetData = `${apiPrefix}/user/dispatch/getdisptachdetails`;

    const handleSubmit = () => {

        callApi(`${apigetData}?fromDate=${formData.fromDate}&toDate=${formData.toDate}`).then(
            (response) => {
                setTbdata(response);
            }
        );
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="container">
            {cardcomp && (
                <div className="card m-3 shadow">
                    <Heading title="DESPATCH MODULE" />
                    <Box boxShadow={8} p={3} borderRadius={0}>
                        <div className="row m-3">
                            <div className="col-3">
                                <label className="form-label">From Date</label>
                                <input
                                    type="date"
                                    name="fromDate"
                                    value={formData.fromDate}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-3">
                                <label className="form-label">Till Date</label>
                                <input
                                    type="date"
                                    name="toDate"
                                    value={formData.toDate}
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-1 mt-2 ">
                                <label className="form-label"></label>
                                <p>Or</p>
                            </div>
                            <div className="col-3">
                                <label className="form-label">Case No</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-2">
                                <Button
                                    variant="contained"
                                    onClick={handleSubmit}
                                    style={{ marginTop: "32px" }}
                                >
                                    Go
                                </Button>
                            </div>
                        </div>
                        <div className="row">
                            <MDBDataTable striped bordered hover data={data} />
                        </div>
                    </Box>
                </div>
            )}
            <DespatchEntryDialog
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                fslregnoid={fslregnoid}
            />
        </div>
    );
};

export default DespatchEntry;
