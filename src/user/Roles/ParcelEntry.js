import React, { useState } from "react";
import {
    Button,
} from "@mui/material";
import Heading from "../../common/Heading";
import {
    faChevronCircleLeft,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBDataTable } from "mdbreact";
import { CardContent } from "@mui/material";
import { postApiData } from "../../redux/slice/postSlice";
import { useDispatch } from "react-redux";
import {
    faRocket,
    faUserCheck,
    faSync,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Container } from "react-bootstrap";
const ParcelEntry = () => {
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const dispatch = useDispatch();
    const [isHovered2, setIsHovered2] = useState(false);
    const [formData, setFormData] = useState({
        uniqueid: "",
        fslregno: "",
        parcelno: "",
        noofexhibit: "",
        enteredby: "",
        entereddate: "",
        enteredip: "",
        sectionid: "",
        prmno: "",
        modeofpacket: "",
        parceldesc: "",
        fslflag: "",
        parcelflag: "",
        forwardedto: "",
        exhibitdesc: "",
        exhibitsource: "",
        remarks: "",
        whenwhom: "",
        noofseals: "",
        sealdetails: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const apiUrl = `${apiPrefix}/alluser/saveParcel`;
    const handleSubmit = () => {
        const payload = {
            ...formData,
        };
        dispatch(postApiData({ apiUrl, postData: payload }));
    };

    const [selectedOption2, setSelectedOption2] = useState("");
    const [showtbl2, setshowtbl2] = useState(false);
    const handleOpenDetails = () => {
        setshowtbl2(true);
    };
    const handleRadioChange1 = (event) => {
        setSelectedOption2(event.target.value);
    };
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const data = {
        columns: [
            {
                label: "Parcel No",
                field: "serialnumber",
                sort: "asc",
                width: 150,
            },
            {
                label: "Exhibits",
                field: "officecode",
                sort: "asc",
                width: 150,
            },
            {
                label: "Parcel Details ",
                field: "empName",
                sort: "asc",
                width: 270,
            },
            {
                label: "Seal Details ",
                field: "phoneNo",
                sort: "asc",
                width: 270,
            },
            {
                label: "Item Description",
                field: "action",
                sort: "asc",
                width: 270,
            },
            {
                label: "Edit",
                field: "action",
                sort: "asc",
                width: 270,
            },
            {
                label: "Delete",
                field: "action",
                sort: "asc",
                width: 270,
            },
        ],
    };
    return (

        <Container>
            <Card className='m-3 shadow'>
                <Heading title="Parcel Entry" />
                <CardContent>
                    <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="row m-2">
                            <div className="col">
                                <label className="label">Office Code</label>
                            </div>
                            <div className="col-3">
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col">
                                <label className="label">Main File No</label>
                            </div>
                            <div className="col-3">
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col">
                                <label className="label">Section</label>
                            </div>
                            <div className="col-3">
                                <select className="form-select" name="">
                                    <option value="" selected disabled>
                                        Select Option
                                    </option>
                                    <option value="1"> Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                            <div className="col">
                                <label className="label">Division No</label>
                            </div>
                            <div className="col-3">
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-3">
                                <label className="label">Year</label>
                            </div>
                            <div className="col-3">
                                <select className="form-select" name="">
                                    <option value="" selected disabled>
                                        Select Year
                                    </option>
                                    <option value="1"> Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="d-flex justify-content-center">
                                <Button
                                    variant="contained"
                                    style={{ margin: "0 8px" }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    mt={1}
                                    onClick={handleOpenDetails}
                                >
                                    Search &nbsp;{" "}
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className={isHovered ? "faSearchHovered" : ""}
                                    />
                                </Button>
                                <Button
                                    variant="contained"
                                    style={{ margin: "0 8px" }}
                                    color="error"
                                    onMouseEnter={() => setIsHovered1(true)}
                                    onMouseLeave={() => setIsHovered1(false)}
                                >
                                    Back &nbsp;{" "}
                                    <FontAwesomeIcon
                                        icon={faChevronCircleLeft}
                                        className={isHovered1 ? "faarrowrightHovered" : ""}
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {showtbl2 && (
                        <React.Fragment>
                            <CardContent>
                                <div className="row" style={{ rowGap: "7px" }}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Total No. Of Parcels </label>
                                                <div className="col">
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Parcel No</label>
                                                <div className="col">
                                                    <input
                                                        class="form-control"
                                                        name="parcelno"
                                                        value={formData.parcelno}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>No Of Exhibit</label>
                                                <input
                                                    class="form-control"
                                                    name="noofexhibit"
                                                    value={formData.noofexhibit}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Item No</label>
                                                <div className="col">
                                                    <input class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Description Of Exhibit</label>
                                                <div className="col">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="exhibitdesc"
                                                        value={formData.exhibitdesc}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Source Of Exhibits</label>
                                                <div className="col">
                                                    <input
                                                        class="form-control"
                                                        name="exhibitsource"
                                                        value={formData.exhibitsource}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>How,When And By Whom Found</label>
                                                <div className="col">
                                                    <input
                                                        class="form-control"
                                                        name="whenwhom"
                                                        value={formData.whenwhom}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Nature Of Examination Required</label>
                                                <input class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Remarks</label>
                                                <div className="col">
                                                    <input
                                                        class="form-control"
                                                        name="remarks"
                                                        value={formData.remarks}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="text-center">
                                            <Button
                                                variant="contained"
                                                className="btn btn-danger"
                                                color="success"
                                                style={{ margin: "0 8px" }}
                                                onMouseEnter={() => setIsHovered5(true)}
                                                onMouseLeave={() => setIsHovered5(false)}
                                                onClick={handleSubmit}
                                            >
                                                Add &nbsp;
                                                <FontAwesomeIcon
                                                    icon={faUserCheck}
                                                    className={isHovered5 ? "fatimeshover" : ""}
                                                />
                                            </Button>
                                        </div>
                                        <div className="col-lg-4"></div>
                                    </div>
                                </div>
                            </CardContent>

                            <div className="col mt-3">
                                <MDBDataTable striped bordered hover data={data} />
                            </div>
                            <div className="col mt-3">
                                <div className="d-flex justify-content-center">
                                    <Button
                                        variant="contained"
                                        style={{ margin: "0 8px" }}
                                        onMouseEnter={() => setIsHovered4(true)}
                                        onMouseLeave={() => setIsHovered4(false)}
                                        mt={1}
                                    >
                                        Save Parcel &nbsp;{" "}
                                        <FontAwesomeIcon
                                            icon={faRocket}
                                            className={isHovered4 ? "faSearchHovered" : ""}
                                        />
                                    </Button>
                                    <Button
                                        variant="contained"
                                        style={{ margin: "0 8px" }}
                                        color="error"
                                        onMouseEnter={() => setIsHovered3(true)}
                                        onMouseLeave={() => setIsHovered3(false)}
                                        mt={1}
                                    >
                                        Reset &nbsp;{" "}
                                        <FontAwesomeIcon
                                            icon={faSync}
                                            className={isHovered3 ? "faResetHovered" : ""}
                                        />
                                    </Button>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </CardContent>
            </Card>
        </Container>













    );
};

export default ParcelEntry;
