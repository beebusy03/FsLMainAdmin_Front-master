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
import {
  faPaperPlane,
  faSync,
  faChevronCircleLeft,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const SectionTransferDialog = ({ isOpen, onClose, setedituse }) => {
  const theme = useTheme();
  const apiPrefix = process.env.REACT_APP_API_PREFIX;

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fslRegNo: " ",
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const apiUrl = `${apiPrefix}/alluser/save`;
  const handleSubmit = async () => {
    console.log(formData);
    dispatch(postApiData({ apiUrl, postData: formData }));
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddUser = () => {
    setedituse(false);
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleReset = () => {
    setFormData({
      fslRegNo: " ",
      packetMarked: "",
      remarks: "",
      enteredBy: "",
      enteredOn: "",
      despatchType: "",
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
        <Heading title="REPORT UPLOAD" />
        <DialogContent>
          <DialogContentText>
            <CardContent>
              <div className="row" style={{ rowGap: "7px" }}>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Fir No</label>
                      <div className="col">
                        <input
                          class="form-control"
                          name="receivedFrom"
                          value={formData.receivedFrom}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>rome</label>
                      <div className="col">
                        <input
                          class="form-control"
                          name="receivedFrom"
                          value={formData.receivedFrom}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Reference No</label>
                      <input
                        class="form-control"
                        name="receivedFrom"
                        value={formData.receivedFrom}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>File Number</label>
                      <div className="col">
                        <input
                          type="text"
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
                      <label>No Of Parcels</label>
                      <div className="col">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>New File No :</label>
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
                  <div className="col-6">
                    <div className="form-group">
                      <label>No Of Parcels Transferred</label>
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
                  <div className="col">
                    <div className="form-group">
                      <label>Parcel Detail :</label>
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
                  <div className="col-6">
                    <div className="form-group">
                      <label>Remarks :</label>
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

                <div className="row mt-3">
                  <div className="text-center">
                    <Button
                      variant="contained"
                      className="btn btn-danger"
                      style={{ margin: "0 8px" }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={handleBack} color="error"
                    >
                      Reset &nbsp;  <FontAwesomeIcon
                                                icon={faSync}
                                                className={isHovered ? "faResetHovered" : ""}
                                            />
                    </Button>
                    <Button
                      variant="contained"
                      style={{ margin: "0 8px" }}
                      onMouseEnter={() => setIsHovered2(true)}
                      className="btn btn-secondary"
                      onMouseLeave={() => setIsHovered2(false)}
                      
                    >
                      Transfer&nbsp;
                <FontAwesomeIcon icon={faExchangeAlt} className={isHovered1 ? 'fatimeshover' : ''} />
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
export default SectionTransferDialog;
