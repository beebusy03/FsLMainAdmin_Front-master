import React, { useState } from "react";
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
    faChevronCircleLeft,
    faPaperPlane,
    faSync,
} from "@fortawesome/free-solid-svg-icons";
import { postApiData } from "../../../redux/slice/postSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { callApi } from "../../../common/CallApi";
import Heading from "../../../common/Heading";
const PreExamDialog = ({ isOpen, onClose, fslregnoid }) => {
    const theme = useTheme();
    const dispatch = useDispatch()
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [isHovered, setIsHovered] = useState(false);
    const [assigned, setassigned] = useState([])
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [formData, setFormData] = useState({
        purpose: '',
        feasibility: '',
        noofparcels: '',
        adqdocsubm: '',
        sealintact: '',
        natureofcase: '',
        approvstatus: '',
        exhientrydate: '',
        envelopremarks: '',
        assingeddate: '',
        priority: '',
        crimenature: '',
        assignedto: '',
    })

    const apigetSection = `${apiPrefix}/user/preexamination/getdata`;
    const apigetassig = `${apiPrefix}/user/preexamination/getalluser`;

    useEffect(() => {
        callApi(`${apigetSection}?registerid=${fslregnoid}`)
            .then((response) => {
                setFormData(response);
            });
    }, [fslregnoid]);


    useEffect(() => {
        callApi(apigetassig)
            .then((response) => {
                setassigned(response);
            });
    }, []);



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const apiUrl = `${apiPrefix}/user/preexamination/adddata`;

    // const handleSubmit = () => {
    //     const payload = {
    //         fslregno: fslregnoid,
    //         ...formData,
    //     }
    //     dispatch(postApiData({ apiUrl, postData: payload }));


    //     onClose(false)
    // }

    const handleSubmit = async () => {
        try {
            const payload = {
                fslregno: fslregnoid,
                ...formData,
            };

            const action = await dispatch(postApiData({ apiUrl, postData: payload }));
            if (postApiData.fulfilled.match(action)) {
                const responseData = action.payload;
                console.log('Success:', responseData);
                onClose(false);
            } else {
                console.error('Unhandled action:', action);
            }
        } catch (error) {
            console.error('Synchronous Error:', error);
        }
    };



    const handleReset = () => {
        setFormData({
            purpose: '',
            feasibility: '',
            noofparcels: '',
            adqdocsubm: '',
            sealintact: '',
            natureofcase: '',
            approvstatus: '',
            exhientrydate: '',
            envelopremarks: '',
            assingeddate: '',
            priority: '',
            crimenature: '',
        })
    }

    const handleBack = () => {
        onClose(true)
    }
    return (
        <React.Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={isOpen}
                onClose={onClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Heading title="Pre Exam" />
                <DialogContent>
                    <DialogContentText>
                        <CardContent>
                            <div className="row" style={{ rowGap: "7px" }}>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Purpose</label>
                                            <div className="col">
                                                <select className="form-select" name="purpose" value={formData.purpose} onChange={handleInputChange}>
                                                    <option value="E">Examination</option>
                                                    <option value="RE">RE-Examination</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Feasibility</label>
                                            <div className="col">
                                                <select className="form-select" name="feasibility" value={formData.feasibility} onChange={handleInputChange}>
                                                    <option value="Y">Yes</option>
                                                    <option value="N">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>No Of Parcels</label>
                                            <input class="form-control" name="noofparcels" value={formData.noofparcels} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Adequate Doc Submitted</label>
                                            <div className="col">
                                                <select className="form-select" name="adqdocsubm" value={formData.adqdocsubm} onChange={handleInputChange}>
                                                    <option value="Y">Yes</option>
                                                    <option value="N">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Seals Intact</label>
                                            <div className="col">
                                                <select className="form-select" name="sealintact" value={formData.sealintact} onChange={handleInputChange}>
                                                    <option value="Y">Yes</option>
                                                    <option value="N">No</option>
                                                    <option value="E">NIL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Seal Tallied</label>
                                            <div className="col">
                                                <select className="form-select" name="purpose" value={formData.purpose} onChange={handleInputChange}>
                                                    <option value="Y">Yes</option>
                                                    <option value="N">No</option>
                                                    <option value="E">NIL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Corr. Details Regarding Articles In Memo</label>
                                            <div className="col">
                                                <select className="form-select" name="purpose" value={formData.purpose} onChange={handleInputChange}>
                                                    <option value="Y">Yes</option>
                                                    <option value="N">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Nature Of Case</label>
                                            <input class="form-control mt-4" name="natureofcase" value={formData.natureofcase} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4>ACCEPTANCE DETAILS</h4>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Acceptance Status*</label>
                                            <div className="col">
                                                <select className="form-select" name="approvstatus" value={formData.approvstatus} onChange={handleInputChange}>
                                                    <option value="A">Accepted</option>
                                                    <option value="P">Provisonally Accepted</option>
                                                    <option value="O">
                                                        On Hold
                                                    </option>

                                                    <option value="R">Returned In Original</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Exhibit Opening Date</label>
                                            <input type="date" class="form-control" name="exhientrydate" value={formData.exhientrydate} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Name Of Reporting Officer And Remarks</label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Remarks"
                                                name="envelopremarks"
                                                value={formData.envelopremarks}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label>Assigned To</label>
                                            <div className="col">

                                                <select
                                                    name='assignedto'
                                                    value={formData.assignedto}
                                                    className='form-select'
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" selected disabled>Select Assigned</option>
                                                    {assigned.map((data) => (
                                                        <option key={data.userid} value={data.userid}>
                                                            {data.userName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Assigned Date</label>
                                            <input type="date" class="form-control" name="assingeddate" value={formData.assingeddate} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Priority</label>
                                            <div className="col">
                                                <select className="form-select" name="priority" value={formData.priority} onChange={handleInputChange}>
                                                    <option value="Y">URGENT</option>
                                                    <option value="N">NORMAL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>
                                                Nature Of Crime (Nature Of Charge And Other Details)
                                            </label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Crime Nature"
                                                name="crimenature"
                                                value={formData.crimenature}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    {formData.approvstatus === 'O' && (
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Reason For Holding Case</label>
                                                <div className="col">
                                                    <input className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="row">
                                    <div className="text-center">
                                        <Button
                                            variant="contained"
                                            className="btn btn-danger"
                                            style={{ margin: "0 8px" }}
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                            onClick={handleSubmit}
                                        >
                                            Save &nbsp;
                                            <FontAwesomeIcon
                                                icon={faPaperPlane}
                                                className={isHovered ? "farockethover" : ""}
                                            />
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
                                        <Button
                                            variant="contained"
                                            style={{ margin: "0 8px" }}
                                            color="error"
                                            onMouseEnter={() => setIsHovered2(true)}
                                            className="btn btn-secondary"
                                            onMouseLeave={() => setIsHovered2(false)}
                                            onClick={handleBack}
                                        >
                                            Back &nbsp;{" "}
                                            <FontAwesomeIcon
                                                icon={faChevronCircleLeft}
                                                className={isHovered2 ? "faarrowrightHovered" : ""}
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

export default PreExamDialog;
