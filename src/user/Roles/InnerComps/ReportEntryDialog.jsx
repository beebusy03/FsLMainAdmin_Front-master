import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { CardContent } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPaperPlane,
    faSync,
} from "@fortawesome/free-solid-svg-icons";
import { postApiData } from "../../../redux/slice/postSlice";
import { useDispatch } from "react-redux";
import Heading from "../../../common/Heading";
import { callApi } from "../../../common/CallApi";
import { toast } from 'react-toastify';
const ReportEntryDialog = ({ isOpen, onClose, fslregnoid }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const [assigned, setassigned] = useState([])

    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        assignedBy: "",
        reportNoDetails: "",
        exhibitRetDate: "",
        emailId: "",
        caseNature: "",
        caseNumber: "",
        firNo: "",
        approvalStatus: "",
        reportDate: "",
        noOfExhibit: "",
        remarks: "",
        phoneNo: "",
        fslRegNo: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const apigeturl = `${apiPrefix}/alluser/postexamination/assignedto`;
    const apigetassig = `${apiPrefix}/alluser/preexamination/getalluser`;

    useEffect(() => {
        callApi(`${apigeturl}?fslregernumber=${fslregnoid}`).then(
            (response) => {
                setFormData(response);
            }
        );
        callApi(apigetassig)
            .then((response) => {
                setassigned(response);
            });

    }, [fslregnoid])

    const apiUrl = `${apiPrefix}/alluser/postexamination/savepostexamination`;

    const handleSubmit = () => {
        dispatch(postApiData({ apiUrl, postData: formData }));
        toast.success("Success");
        onClose(true)

    };
    const handleReset = () => {
        setFormData({
            id: "",
            assignedBy: "",
            reportNoDetails: "",
            exhibitRetDate: "",
            emailId: "",
            caseNature: "",
            caseNumber: "",
            firNo: "",
            approvalStatus: "",
            reportDate: "",
            noOfExhibit: "",
            remarks: "",
            phoneNo: "",
        });
    };

    const handleBack = () => {
        onClose(true);
    };
    return (
        <React.Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={isOpen}
                onClose={onClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Heading title="Report Entry Form" />
                <DialogContent>
                    <DialogContentText>

                        <CardContent>
                            <div className="row" style={{ rowGap: "7px" }}>
                                <div className="row justify-content-center">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Case No</label>
                                            <div className="col">
                                                <input
                                                    class="form-control"
                                                    name="fslRegNo"
                                                    value={formData.fslRegNo}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Received From</label>
                                            <div className="col">
                                                <input
                                                    class="form-control"
                                                    name="assignedBy"
                                                    value={formData.assignedBy}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>FIR No</label>
                                            <div className="col">
                                                <input
                                                    class="form-control"
                                                    name="firNo"
                                                    value={formData.firNo}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Report No. Details</label>
                                            <input
                                                class="form-control"
                                                name="reportNoDetails"
                                                value={formData.reportNoDetails}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Report Date</label>
                                            <div className="col">
                                                <input
                                                    type="date"
                                                    class="form-control"
                                                    name="reportDate"
                                                    value={formData.reportDate}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Total Exhibit</label>
                                            <div className="col">
                                                <input
                                                    class="form-control"
                                                    name="noOfExhibit"
                                                    value={formData.noOfExhibit}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Exhibit Opening Date</label>
                                            <div className="col">
                                                <input
                                                    type="date"
                                                    class="form-control"
                                                    name="exhibitRetDate"
                                                    value={formData.exhibitRetDate}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Remarks</label>
                                            <div className="col">
                                                <textarea
                                                    class="form-control"
                                                    name="remarks"
                                                    value={formData.remarks}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Email Id</label>
                                            <input
                                                class="form-control mt-4"
                                                name="emailId"
                                                value={formData.emailId}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Phone No</label>
                                            <div className="col">
                                                <input
                                                    class="form-control"
                                                    name="phoneNo"
                                                    value={formData.phoneNo}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Case Nature</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="caseNature"
                                                value={formData.caseNature}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="text-center">
                                        <Button
                                            variant="contained"
                                            className="btn btn-danger"
                                            style={{ margin: "0 8px" }}
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                            onClick={handleSubmit}
                                        >
                                            Save Report &nbsp;
                                            <FontAwesomeIcon
                                                icon={faPaperPlane}
                                                className={isHovered ? "farockethover" : ""}
                                            />
                                        </Button>
                                        <Button
                                            variant="contained"
                                            style={{ margin: "0 8px" }}
                                            color="error"
                                            onMouseEnter={() => setIsHovered2(true)}
                                            className="btn btn-secondary"
                                            onMouseLeave={() => setIsHovered2(false)}
                                            onClick={handleBack}
                                        >
                                            Further Material &nbsp;{" "}
                                        </Button>
                                        <Button
                                            variant="contained"
                                            className="btn btn-danger"
                                            style={{ margin: "0 8px" }}
                                            color="error"
                                            onMouseEnter={() => setIsHovered1(true)}
                                            onMouseLeave={() => setIsHovered1(false)}
                                            mt={1}
                                            onClick={handleReset}
                                        >
                                            Reset &nbsp;{" "}
                                            <FontAwesomeIcon
                                                icon={faSync}
                                                className={isHovered1 ? "faResetHovered" : ""}
                                            />
                                        </Button>
                                    </div>
                                    <div className="col-lg-4"></div>
                                </div>
                            </div>
                        </CardContent>
                    </DialogContentText>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default ReportEntryDialog;
