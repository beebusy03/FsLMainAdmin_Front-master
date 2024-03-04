import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import { Button } from "@mui/material";
import { callApi } from "../../common/CallApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faChevronCircleLeft,
    faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import PreExamDialog from "./InnerComps/PreExamDialog";
import Heading from "../../common/Heading";
import { FaEye } from "react-icons/fa";
const PreExamination = () => {
    const [showtbl2, setshowtbl2] = useState(false);
    const [sections, getSections] = useState([])
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fslregnoid, setfslregnoid] = useState([]);

    const [formData, setFormData] = useState({
        fromdate: "",
        todate: "",
    });

    const [tbdata, setTbdata] = useState([])

    const apigetData = `${apiPrefix}/user/preexamination/getAlldata`;
    const apigetSection = `${apiPrefix}/alluser/allddl/getallsection`;


    useEffect(() => {
        callApi(apigetSection)
            .then((response) => {
                getSections(response);
            });
    }, []);

    const handleOpenDetails = () => {
        setshowtbl2(true);
    };

    const handleOpenModelFirst = (fslregno) => {
        setfslregnoid(fslregno)
        setIsModalOpen(true);
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const data = {
        columns: [
            {
                label: "Action",
                field: "action",
                sort: "asc",
                width: 270,
            },
            {
                label: "File No",
                field: "fulldispno",
                sort: "asc",
                width: 150,
            },
            {
                label: "FIR No",
                field: "firno",
                sort: "asc",
                width: 150,
            },
            {
                label: "Recived From",
                field: "faname",
                sort: "asc",
                width: 270,
            },
            {
                label: "Refrence No ",
                field: "referenceno",
                sort: "asc",
                width: 270,
            },
            {
                label: "Parcels",
                field: "noofparcels",
                sort: "asc",
                width: 270,
            },
            {
                label: "FSL Reg No",
                field: "fslregno",
                sort: "asc",
                width: 270,
            },

        ],
        rows: tbdata.map(item => ({
            action: (
                <>
                    <Button variant="contained" onClick={() => handleOpenModelFirst(item?.fslregno)}><FaEye className='eye' /></Button>
                </>
            ),
            fulldispno: item.fulldispno,
            firno: item.firno,
            faname: item.faname,
            referenceno: item.referenceno,
            noofparcels: item.noofparcels,
            fslregno: item.fslregno,
        })),
    };



    // const data2 = {
    //   columns: [
    //     {
    //       label: "FSL Reg No",
    //       field: "fslregno",
    //       sort: "asc",
    //       width: 150,
    //     },
    //     {
    //       label: "Case No",
    //       field: "caseno",
    //       sort: "asc",
    //       width: 150,
    //     },
    //     {
    //       label: "Email Id",
    //       field: "emaild",
    //       sort: "asc",
    //       width: 270,
    //     },
    //     {
    //       label: "State Code ",
    //       field: "statecode",
    //       sort: "asc",
    //       width: 270,
    //     },
    //     {
    //       label: "Court Name",
    //       field: "courtname",
    //       sort: "asc",
    //       width: 270,
    //     },
    //     {
    //       label: "Phone No",
    //       field: "phoneno",
    //       sort: "asc",
    //       width: 270,
    //     },
    //     {
    //       label: "Action",
    //       field: "action",
    //       sort: "asc",
    //       width: 270,
    //     },
    //   ],
    //   rows: formData.map(item => ({
    //     fslregno: item.fslregno,
    //     caseno: item.caseno,
    //     emaild: item.emaild,
    //     statecode: item.statecode,
    //     courtname: item.courtname,
    //     phoneno: item.phoneno,
    //     action: (
    //       <>
    //         <Tooltip title="Approve">
    //           <Button variant="primary" onClick={() => handleOpenDetails(item?.serialnumber)}>

    //           </Button>
    //         </Tooltip>

    //       </>

    //     ),

    //   })),
    // };


    const handleSubmit = () => {
        callApi(
            `${apigetData}?fromDate=${formData.fromdate}&toDate=${formData.todate}&section=${formData.section}`
        ).then((response) => {
            setTbdata(response);
            console.log(response);
        });
    };


    const options = {
        noBottomColumns: true, // This will hide the bottom columns including pagination and entries
    };


    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);

    return (
        <div className="container">
            <div className="card m-3 shadow">
                <Heading title="PRE Examination " />
                <div className="card-body">
                    <div className="row m-2">
                        <div className="col">
                            <label className="form-label">Section</label>
                            <select className="form-select" name="section" value={formData.section} onChange={handleInputChange}>
                                <option value="" disabled selected>
                                    Select Section
                                </option>
                                {sections.map((data) => (
                                    <option key={data.sectionId} value={data.sectionId}>
                                        {data.sectionName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col">
                            <label className="form-label">From Date</label>
                            <input
                                type="date"
                                name="fromdate"
                                value={formData.fromdate}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col">
                            <label className="form-label">Till Date</label>
                            <input
                                type="date"
                                name="todate"
                                value={formData.todate}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-1 mt-2 ">
                            <label className="form-label"></label>
                            <p>Or</p>
                        </div>
                        <div className="col">
                            <label className="form-label">Case No</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col mt-4">
                            <Button
                                variant="contained"
                                style={{ marginTop: "5px" }}
                                color="success"
                                onClick={handleSubmit}
                            >
                                Go
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </Button>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <MDBDataTable
                            striped
                            bordered
                            small
                            data={data}
                            paging={true} // If you want to enable pagination explicitly
                            searching={false} // If you want to disable searching
                            options={options}
                        />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Button
                            variant="contained"
                            style={{ marginTop: "5px" }}
                            color="error"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Back &nbsp;{" "}
                            <FontAwesomeIcon
                                icon={faChevronCircleLeft}
                                className={isHovered ? "faarrowrightHovered" : ""}
                            />
                        </Button>

                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Button
                            variant="contained"
                            style={{ marginTop: "5px" }}
                            color="primary"
                            onClick={handleOpenDetails}
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                        >
                            Officer Examination Details&nbsp;
                            <FontAwesomeIcon
                                icon={faFileAlt}
                                className={isHovered1 ? "faarrowrightHovered" : ""}
                            />
                        </Button>
                    </div>
                    {showtbl2 && (
                        <div className="col mt-3">
                            {/* <MDBDataTable striped bordered hover data={data2} /> */}
                        </div>
                    )}
                </div>
            </div>
            <PreExamDialog
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                fslregnoid={fslregnoid}
            />
        </div>
    );
};

export default PreExamination;
