import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import { CardContent } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { postApiData } from "../../../redux/slice/postSlice";
import Heading from "../../../common/Heading";
import { useEffect } from "react";
import { callApi } from "../../../common/CallApi";
import { toast } from "react-toastify";

const DespatchEntryDialog = ({ isOpen, onClose, fslregnoid }) => {

    const theme = useTheme();
    const apiPrefix = process.env.REACT_APP_API_PREFIX;

    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        packetMarked: "",
        remarks: "",
        enteredBy: "",
        enteredOn: "",
        despatchType: "Messenger",
        despatchDate: "",
        messengerName: "",
        messengerDetails: "",
        withExhibit: "",
        exhibitReturnDate: "",
        referenceNo: "",
        referenceDate: "",
        numberOfExhibits: "",
        numberOfParcels: "",
        fromDate: "",
        toDate: "",
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };



    const apigeturl = `${apiPrefix}/user/dispatch/getdisptachdetailsbyid`;
    const apigetassig = `${apiPrefix}/alluser/preexamination/getalluser`;

    useEffect(() => {
        callApi(`${apigeturl}?id=${fslregnoid}`).then(
            (response) => {
                setFormData(response);
            }
        );
        // callApi(apigetassig)
        //     .then((response) => {
        //         setassigned(response);
        //     });

    }, [fslregnoid])


    const apiUrl = `${apiPrefix}/user/dispatch/savedispatchdetails`;
    const handleSubmit = async () => {
        const payload = {
            fslRegNo: fslregnoid,
            ...formData
        }
        dispatch(postApiData({ apiUrl, postData: payload }))
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    toast.success('successfully!', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                    });
                } else {
                    console.error("Unexpected status code:", response.status);
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };


    const handleBack = () => {
        onClose(true);
    };


    const [isWithExhibit, setIsWithExhibit] = useState(false);

    const handleExhibitChange = (event) => {
        setIsWithExhibit(event.target.value === "S");
    };
    return (
        <React.Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={isOpen}
                onClose={onClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Heading title="DESPATCH MODULE" />
                <DialogContent>
                    <DialogContentText>
                        <CardContent>
                            <div className="row" style={{ rowGap: "7px" }}>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Received From & Fir No</label>
                                            <div className="col">
                                                <input
                                                    class="form-control"
                                                    name="fslregno"
                                                    value={formData.fslregno}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Despatch Type</label>
                                            <div className="col">
                                                <select
                                                    className="form-select"
                                                    name="despatchType"
                                                    value={formData.despatchType}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="Messenger">Messenger</option>
                                                    <option value="SpeedPost">SpeedPost</option>
                                                    <option value="OrdinaryPost">OrdinaryPost</option>
                                                    <option value="Courier">Courier</option>
                                                    <option value="RailwayParcel">RailwayParcel</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Despatch Details</label>
                                            <input class="form-control" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Despatch Date</label>
                                            <div className="col">
                                                <input
                                                    type="date"
                                                    class="form-control"
                                                    name="despatchDate"
                                                    value={formData.despatchDate}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Report Date</label>
                                            <div className="col">
                                                <input type="date" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Refrance No</label>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="referenceNo"
                                                    value={formData.referenceNo}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Refrance Date</label>
                                            <div className="col">
                                                <input
                                                    type="date"
                                                    class="form-control"
                                                    name="referenceDate"
                                                    value={formData.referenceDate}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Diary No</label>
                                            <input class="form-control" name="diaryno" value={formData.diaryno} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Diary Date</label>
                                            <div className="col">
                                                <input type="date" class="form-control" name="diarydate" value={formData.diarydate} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Messenger Name</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="messname"
                                                value={formData.messname}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Messenger Details</label>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="messengerDetails"
                                                    value={formData.messengerDetails}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-2">
                                    <div className="col-lg-3">
                                        <p>Exhibit Details</p>
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col">
                                        <label className="m-2">
                                            <input
                                                type="radio"
                                                name="group1"
                                                value="S"
                                                onChange={handleExhibitChange}
                                            />
                                            With Exhibit
                                        </label>
                                        <label className="m-2">
                                            <input
                                                type="radio"
                                                name="group1"
                                                value="N"
                                                onChange={handleExhibitChange}
                                            />
                                            With Out Exhibit
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Return Of Exhibit</label>
                                            <select className="form-select">
                                                <option value="C">Consumed</option>
                                                <option value="R">Returned</option>
                                                <option value="u">Consumed And Returned</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Date of Return Of Exhibit</label>
                                            <div className="col">
                                                <input
                                                    type="date"
                                                    class="form-control"
                                                    name="exhibitReturnDate"
                                                    value={formData.exhibitReturnDate}
                                                    onChange={handleInputChange}
                                                    disabled={!isWithExhibit}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>No Of Exhibit Returned</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="numberOfExhibits"
                                                value={formData.numberOfExhibits}
                                                onChange={handleInputChange}
                                                disabled={!isWithExhibit}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>No Of Parcels Returned</label>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="numberOfParcels"
                                                    value={formData.numberOfParcels}
                                                    onChange={handleInputChange}
                                                    disabled={!isWithExhibit}
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
                                            style={{ margin: "0 8px" }}

                                            onClick={handleSubmit}
                                        >
                                            Save &nbsp;

                                        </Button>
                                        <Button
                                            variant="contained"
                                            style={{ margin: "0 8px" }}
                                            color="error"
                                            className="btn btn-secondary"
                                            onClick={handleBack}
                                        >
                                            Back &nbsp;

                                        </Button>
                                        {isWithExhibit && (
                                            <Button
                                                variant="contained"
                                                style={{ margin: "0 8px" }}
                                                color="success"
                                                className="btn btn-secondary"
                                                onClick={handleBack}
                                            >
                                                Exhibit Entry &nbsp;
                                            </Button>
                                        )}
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
export default DespatchEntryDialog;
