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
import Heading from "../../../common/Heading";
import {
  faChevronCircleLeft,
  faPaperPlane,
  faSync,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { postApiData } from "../../../redux/slice/postSlice";
import { useDispatch } from "react-redux";
const FurtherMDialog = ({ isOpen, onClose,userid }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const apiPrefix = process.env.REACT_APP_API_PREFIX;

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [formData, setFormData] = useState({
    materialId:"",
    fslRegNo:"",
    authority:"",
    noOfParcels:"",
    parcel:"",
    messengerName:"",
    messengerDetail:"",
    createdBy:"",
    remarks:"",
    creationDate:"",
    memoNo:"",
    memoDate:"",
    fileId:"",
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const apipostparam = {userid: userid};
  const apiUrl = `${apiPrefix}/alluser/savefurthermaterial?${new URLSearchParams(apipostparam)}`;



  const handleSubmit = () => {
    dispatch(postApiData({ apiUrl, postData: formData }));
  };
  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        {/* <Heading title="PRE EXAMINATION / CASE ALLOTMENT" /> */}
        <Heading title="Further Material" />
        <DialogContent>
          <DialogContentText>
            <CardContent>
              <div className="row" style={{ rowGap: "7px" }}>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Forwading Authority</label>
                      <div className="col">
                        <input
                        type="text"
                          class="form-control"
                          name="authority"
                          value={formData.authority}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Parcel Received Previously</label>
                      <div className="col">
                        <input
                          class="form-control"
                          name="noofparcels"
                          value={formData.noofparcels}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Parcels Received</label>
                      <input
                        class="form-control"
                        name="noofparcels"
                        value={formData.noofparcels}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Memo No</label>
                      <div className="col">
                        <input
                          class="form-control"
                          name="memoNo"
                          value={formData.memoNo}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Memo Date</label>
                      <div className="col">
                        <input
                          type="date"
                          class="form-control"
                          name="memoDate"
                          value={formData.memoDate}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Messenger Name</label>
                      <div className="col">
                        <input
                          class="form-control"
                          name="messengerName"
                          value={formData.messengerName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Messenger Details</label>
                      <div className="col">
                        <input
                          class="form-control"
                          name="messengerDetail"
                          value={formData.messengerDetail}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Parcel/Exhibit Details</label>
                      <input
                        class="form-control "
                        name="natureofcase"
                        value={formData.natureofcase}
                        onChange={handleInputChange}
                      />
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
                      color="success"
                      onMouseEnter={() => setIsHovered2(true)}
                      className="btn btn-secondary"
                      onMouseLeave={() => setIsHovered2(false)}
                    >
                      QRCODE &nbsp;{" "}
                      <FontAwesomeIcon icon={faQrcode} className={isHovered2 ? 'faqrcodehover' : ''} />
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

export default FurtherMDialog;
