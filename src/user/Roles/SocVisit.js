import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Heading from "../../common/Heading";
import {
  faCheckCircle,
  faChevronCircleLeft,
  faRocket,
  faSync,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { callApi } from "../../common/CallApi";
import { MDBDataTable } from "mdbreact";
import StateDistPoliceDrop from "../CommonComp/StateDistPoliceDrop";
import { postApiData } from "../../redux/slice/postSlice";
import { useDispatch } from "react-redux";
import UserMultiSelect from "../../common/UserMultiSelect";
const SocVisit = () => {
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const dispatch = useDispatch();
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedPoliceStation, setSelectedPoliceStation] = useState("");
  const [title, setTitle] = useState("Information Received");
  const [selectedSections, setSelectedSections] = useState([]);
  const [formData1, setFormData1] = useState({
    dateOfVisit: "",
    reportDate: "",
    placeOfVisit: "",
    entryTime: "",
    leavingTime: "",
    forensicTeam: "",
  })
  const [formData, setFormData] = useState({
    receivedfrom: "",
    dmfuNo: "",
    reportType: "",
    firNo: "",
    firDate: "",
    udfirNo: "",
    udfirDate: "",
    inchargeDetail: "",
    infoRec: "",
    briefHistory: "",
    sciObservation: "",
    clues: "",
    dateOfDespatch: "",
    despatchDetails: "",
    remarks: "",

    // socVisitEntity: "",
    lawSection: "",
    otherNo: "",
    otherDate: "",

    visitEntries: formData1
  });



  const handleInputChange1 = (event) => {
    const { name, value } = event.target;
    setFormData1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAssignButtonClick = () => {
    // Add your logic for the "Assign" button
    console.log("Assign button clicked");
  };
  const [tbdata, setTbdata] = useState([])

  const [recivedfrom, setrecivedfrom] = useState([]);
  const alldepartment = `${apiPrefix}/alluser/allddl/getalldepartment`;

  useEffect(() => {
    callApi(alldepartment).then((response) => {
      setrecivedfrom(response);
    });
  }, []);

  const [visited, setvisited] = useState([]);
  const alluser = `${apiPrefix}user/preexamination/getalluser`;
  useEffect(() => {
    callApi(alluser).then((response) => {
      setvisited(response);
    });
  }, []);

  const handleStateChange = (value) => {
    setSelectedState(value);
    console.log(value);
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    console.log(value);
  };

  const handlePoliceStationChange = (value) => {
    setSelectedPoliceStation(value);
    console.log(value);
  };

  const getdmfunodata = `${apiPrefix}/alluser/get`;

  const handleSearch = () => {
    callApi(`${getdmfunodata}?dmfuNo=${formData.dmfuNo}`)
      .then((response) => {
        setFormData(response);
      })
      .catch((error) => {
        console.error("Backend Error:", error);
        //  toast.error("An error occurred while fetching data from the backend");
      });
  };

  const data = {
    columns: [
      {
        label: "Report Date",
        field: "reportDate",
        sort: "asc",
        width: 150,
      },
      {
        label: "Palce Of Visit",
        field: "placeOfVisit",
        sort: "asc",
        width: 150,
      },
      {
        label: "Date Of Visit",
        field: "dateOfVisit",
        sort: "asc",
        width: 270,
      },
      {
        label: "Time Of Visit",
        field: "entryTime",
        sort: "asc",
        width: 270,
      },
      {
        label: "Time Of Return",
        field: "leavingTime",
        sort: "asc",
        width: 270,
      },
      {
        label: "Forensic Team",
        field: "forensicTeam",
        sort: "asc",
        width: 270,
      },
    ],
    rows: tbdata.map(item => ({
      reportDate: item.reportDate,
      placeOfVisit: item.placeOfVisit,
      dateOfVisit: item.dateOfVisit,
      entryTime: item.entryTime,
      leavingTime: item.leavingTime,
      forensicTeam: item.selectedSections,
    })),
  };

  const yearsList = [2020, 2021, 2022, 2023, 2024, 2025];

  const apiUrl = `${apiPrefix}/alluser/addDetails`;

  const handleSubmit = () => {
    const payload = {
      distCode: selectedDistrict,
      psCode: selectedPoliceStation,
      stCode: selectedState,
      forensicTeam: selectedSections,

      ...formData,
      ...formData1,
    };
    dispatch(postApiData({ apiUrl, postData: payload }));
  };

  // const apiUrl2 = `${apiPrefix}/alluser/addVisitEntries`;
  const handleAdd = () => {
    setTbdata((prevTbdata) => [...prevTbdata, formData1]);

    // Clear the formData1 state for the next entry
    setFormData1({
      dateOfVisit: "",
      reportDate: "",
      placeOfVisit: "",
      entryTime: "",
      leavingTime: "",
      forensicTeam: "",
    });
  };

  const [showFirstSection, setShowFirstSection] = useState(true);
  const [showSecondSection, setShowSecondSection] = useState(false);

  const handleMain = () => {
    setShowFirstSection(true);
    setShowSecondSection(false);
  };
  const handleDespatch = () => {
    setShowSecondSection(true);
    setShowFirstSection(false);
  };
  const handleButtonClick = (newTitle) => {
    setTitle(newTitle);
  };


  return (
    <Container>
      <Card>
        <Heading title="SOC Visit" />
        <div className="card-body">
          <div className="row mb-3 d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="receivedFrom"
                  name="receivedFrom"
                  value={selectedOption}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="Option1"
                    control={<Radio />}
                    label="Main Page"
                    onClick={handleMain}
                  />
                  <FormControlLabel
                    value="Option2"
                    control={<Radio />}
                    label="Observation/Despatch"
                    onClick={handleDespatch}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="row mb-3 d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <div className="col-1">DMFU No</div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  name="dmfuNo"
                  value={formData.dmfuNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-1">
                <Button
                  variant="contained"
                  style={{ margin: "0 8px" }}
                  color="success"
                  onClick={handleSearch}
                >
                  Go
                  <FontAwesomeIcon icon={faCheckCircle} />
                </Button>
              </div>
            </div>
          </div>
          {showSecondSection && (
            <div className="card p-4 mt-3">
              <div className="row mb-3 d-flex justify-content-center">
                <div className='col mt-3'>
                  <div className='d-flex justify-content-center'>
                    <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("Information Received")}>Information Received</Button>
                    <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("Brief history of the case")}>Brief history of the case</Button>
                    <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("Scientific Observation")}>Scientific Observation</Button>
                    <Button variant='contained' style={{ margin: '0 8px' }} onClick={() => handleButtonClick("Scientific Clues Collected")}>Scientific Clues Collected</Button>

                  </div>
                </div>
                <div className='row mt-3'>
                  {title === "Information Received" && (
                    <div>
                      <label className='form-label text-danger'>Information Received</label>
                      <textarea name='infoRec' value={formData.infoRec} onChange={handleInputChange} className='form-control' style={{
                        width: "100%",
                        height: "150px",
                      }} />
                    </div>
                  )}

                  {title === "Brief history of the case" && (
                    <div>
                      <label className='form-label text-danger'>Brief history of the case</label>
                      <textarea name='briefHistory' value={formData.briefHistory} onChange={handleInputChange} className='form-control' style={{
                        width: "100%",
                        height: "150px",
                      }} />
                    </div>
                  )}

                  {title === "Scientific Observation" && (
                    <div>
                      <label className='form-label text-danger'>Scientific Observation</label>
                      <textarea name='sciObservation' value={formData.sciObservation} onChange={handleInputChange} className='form-control' style={{
                        width: "100%",
                        height: "150px",
                      }} />
                    </div>
                  )}

                  {title === "Scientific Clues Collected" && (
                    <div>
                      <label className='form-label text-danger'>Scientific Clues Collected</label>
                      <textarea name='clues' value={formData.clues} onChange={handleInputChange} className='form-control' style={{
                        width: "100%",
                        height: "150px",
                      }} />
                    </div>
                  )}

                </div>
              </div>
              <div className="row mb-3 d-flex mt-2">
                <div className="col-4">
                  <label className="form-label">Despatch Details</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="despatchDetails"
                    value={formData.despatchDetails}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                  <label className="form-label">Despatch Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dateOfDespatch"
                    value={formData.dateOfDespatch}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row md-3 d-flex">
                <div className="col-4">
                  <label className="form-label">Remarks</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                  <label className="form-label">
                    Copy For Kind Information
                  </label>
                  <textarea type="text" className="form-control" />
                </div>
              </div>
            </div>
          )}
          {showFirstSection && (
            <div className="card p-4 mt-3">
              <div className="row mb-3 d-flex justify-content-center">
                <div className="col-3">
                  <label className="form-label">Received From</label>
                  <select
                    className="form-select"
                    value={formData.receivedfrom}
                    name="receivedfrom"
                    onChange={handleInputChange}
                  >
                    <option value="" selected disabled>
                      Select Received From
                    </option>
                    {recivedfrom.map((data) => (
                      <option key={data.departmentId} value={data.departmentId}>
                        {data.departmentName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <StateDistPoliceDrop
                    onStateChange={handleStateChange}
                    onDistrictChange={handleDistrictChange}
                    onPoliceChange={handlePoliceStationChange}
                  />
                </div>
              </div>
              <div className="row mb-3 d-flex">
                <div className="col-3">
                  <label className="form-label">Report Type</label>
                  <select
                    className="form-select"
                    name="reportType"
                    value={formData.reportType}
                    onChange={handleInputChange}
                  >
                    <option value="" selected disabled>
                      Select Report Type
                    </option>
                    <option value="FIRNO">FIR No</option>
                    <option value="UDFIRNO">UDFIR No</option>
                    <option value="OTHERS">Other</option>
                  </select>
                </div>
                {formData.reportType === "FIRNO" && (
                  <>
                    <div className="col">
                      <label className="form-label">FIR No</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="firNo"
                          placeholder="Enter FIR No.."
                          value={formData.firNo}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <label className="form-label">FIR Date</label>
                      <div className="input-group">
                        <input
                          type="date"
                          name="firDate"
                          value={formData.firDate}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </>
                )}
                {formData.reportType === "UDFIRNO" && (
                  <>
                    <div className="col">
                      <label className="form-label">UDFIR DATE</label>
                      <div className="input-group">
                        <input
                          type="date"
                          name="udfirDate"
                          value={formData.udfirDate}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <label className="form-label">UDFIR NO</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="udfirNo"
                          value={formData.udfirNo}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </>
                )}
                <div className="col-3">
                  <label className="form-label">Section Of Law</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Section Of Law"
                    name="lawSection"
                    value={formData.lawSection}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">Other Date</label>
                  <input type="date" className="form-control" placeholder="" name="otherDate"
                    value={formData.otherDate}
                    onChange={handleInputChange} />
                </div>
                <div className="col-3">
                  <label className="form-label">Other Type & No</label>
                  <input type="text" className="form-control" placeholder="" name="otherNo"
                    value={formData.otherNo}
                    onChange={handleInputChange} />
                </div>
              </div>
              <div className="row mt-3"></div>

              <hr />
              <div className="row mb-3 d-flex">
                <div className="col-2">
                  <label className="form-label">Report Date</label>
                  <input type="date" className="form-control" placeholder="" name="reportDate"
                    value={formData1.reportDate}
                    onChange={handleInputChange1} />
                </div>
                <div className="col-4">
                  <label className="form-label">Place Of Visit</label>
                  <input type="text" className="form-control" name="placeOfVisit"
                    value={formData1.placeOfVisit}
                    onChange={handleInputChange1} />
                </div>
                <div className="col-2">
                  <label className="form-label">Date Of Visit</label>
                  <input type="date" className="form-control" placeholder="" name="dateOfVisit"
                    value={formData1.dateOfVisit}
                    onChange={handleInputChange1} />
                </div>
                <div className="col-2">
                  <label className="form-label">Time Of Visit</label>
                  <input type="text" className="form-control" placeholder="" name="entryTime"
                    value={formData1.entryTime}
                    onChange={handleInputChange1} />
                </div>
                <div className="col-2">
                  <label className="form-label">Time Of Return</label>
                  <input type="text" className="form-control" placeholder="" name="leavingTime"
                    value={formData1.leavingTime}
                    onChange={handleInputChange1} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <div className="col">
                    <label className="form-label">
                      Forensic team Visit (Press SHIFT+Mouse for Multiple)
                    </label>
                    <UserMultiSelect setSelectedSections={setSelectedSections} selectedSections={selectedSections} /> {/* Pass setSelectedSections as prop */}

                  </div>
                </div>
                {/* <div className="col">
                  <label className="form-label">I.O</label>
                  <input type="text" className="form-control"
                  />
                </div>
                <div className="col">
                  <label className="form-label">Forensic team Visit</label>
                  <input type="text" className="form-control" name="forensicTeam"
                    value={formData1.forensicTeam}
                    onChange={handleInputChange1} />
                </div> */}
              </div>

              <div className="col mt-3">
                <div className="d-flex justify-content-center">
                  <Button
                    variant="contained"
                    style={{ margin: "0 8px" }}
                    color="success"
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                    onClick={handleAdd}
                  >
                    Add&nbsp;{" "}
                    <FontAwesomeIcon
                      icon={faUserCheck}
                      className={isHovered4 ? "fatimeshover" : ""}
                    />
                  </Button>
                </div>
              </div>

              <div className="hide-footer-labels">
                <MDBDataTable striped bordered hover data={data} />
              </div>
            </div>
          )}
          <div className="col mt-3 m-3">
            <div className="d-flex justify-content-center">
              <Button
                variant="contained"
                color="success"
                style={{ margin: "0 8px" }}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
                onClick={handleSubmit}
              >
                Save &nbsp;
                <FontAwesomeIcon
                  icon={faRocket}
                  className={isHovered3 ? "farockethover" : ""}
                />
              </Button>
              <Button
                variant="contained"
                color="error"
                style={{ margin: "0 8px" }}
                nMouseEnter={() => setIsHovered1(true)}
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
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                color="error"
              >
                Back &nbsp;{" "}
                <FontAwesomeIcon
                  icon={faChevronCircleLeft}
                  className={isHovered2 ? "faarrowrightHovered" : ""}
                />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default SocVisit;
