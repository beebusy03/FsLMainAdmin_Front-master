import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, Container } from "@mui/material";
import Heading from "../../common/Heading";
import Header from "../../common/header";
import { postApiData } from "../../redux/slice/postSlice";
import SectionMultiSelect from "../../common/SectionMultiSelect";
import { callApi } from "../../common/CallApi";

const NewUserReg = () => {
  const dispatch = useDispatch();
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const [selectedSections, setSelectedSections] = useState([]);
  const [empsectionlist, setempsectionlist] = useState([]);
  const [formData, setFormData] = useState({
    empId: "",
    statecode: "",
    officecode: "",
    empName: "",
    empNameHindi: "",
    emailId: "",
    phoneNo: "",
    empDesg: "",
    empSection: "",
  });

  const [errors, setErrors] = useState({
    empName: "",
    empNameHindi: "",
    emailId: "",
    phoneNo: "",
  });

  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (!formData.empName.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        empName: "Name is required",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, empName: "" }));
    }


    // Validate mobile number
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.phoneNo)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNo: "Invalid Mobile number",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNo: "" }));
    }

    //Validate email Id
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailId)) {
      setErrors((prevErrors) => ({ ...prevErrors, emailId: "Invalid Email Address" }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, emailId: "" }));
    }

    return isValid;
  };

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const [lablist, setLablist] = useState([]);
  const [selectedLab, setSelectedLab] = useState("");
  const [designationlist, setdesignationlist] = useState([]);

  const [sectionlist, setSectionList] = useState([]);
  const getStateListApi = `${apiPrefix}/alluser/allddl/getallstate`;
  const getsectionlist = `${apiPrefix}/alluser/allddl/getallsection`;

  const apiGetDesignation = `${apiPrefix}/alluser/allddl/getalldesignation`;
  const apigetEmpSec = `${apiPrefix}/alluser/allddl/getallsection`;

  useEffect(() => {
    callApi(apiGetDesignation).then((response) => {
      setdesignationlist(response);
    });
    callApi(apigetEmpSec).then((response) => {
      setempsectionlist(response);
    });
  }, []);

  useEffect(() => {
    fetchStates();
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchLabData(selectedState);
    }
  }, [selectedState]);

  const fetchData = async () => {
    try {
      const response = await fetch(getsectionlist);
      const data = await response.json();
      setSectionList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchStates = async () => {
    try {
      const response = await fetch(getStateListApi);
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchLabData = async (selectedState) => {
    try {
      const paramstate = { scode: selectedState };
      const response = await fetch(
        `${apiPrefix}/alluser/allddl/getallofficebyscode?${new URLSearchParams(
          paramstate
        )}`
      );
      const data = await response.json();
      setLablist(data);
    } catch (error) {
      console.error("Error fetching lablist:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      statecode: selectedState,
      officecode: selectedLab,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const apiUrl = `${apiPrefix}/alluser/register/addnewuser`;

  const handleSubmit = () => {
    if (validateForm()) {
      const payload = {
        ...formData,
        multiSection: selectedSections,
      };
      dispatch(postApiData({ apiUrl, postData: payload }));
    } else {
      console.log("Form not submitted due to validation errors");
    }
  };
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Card sx={{ boxShadow: 4 }}>
          <Heading title="New Officer Entry" />
          <>
            <div className="row m-2">
              <div className="col">
                <label htmlFor="exampleInput" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="empName"
                  value={formData?.empName}
                  onChange={handleInputChange}
                />
                <span style={{ color: "red" }}>{errors.empName}</span>
              </div>
              <div className="col">
                <label htmlFor="exampleInput" className="form-label">
                  Name in Hindi
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="empNameHindi"
                  value={formData?.empNameHindi}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row m-2">
              <div className="col">
                <label htmlFor="exampleInput" className="form-label">
                  Employee Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="empId"
                  value={formData?.empId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <label htmlFor="exampleInput" className="form-label">
                  Employee Section
                </label>

                <select
                  name="empSection"
                  value={formData.empSection}
                  className="form-select"
                  onChange={handleInputChange}
                >
                  <option value="" selected disabled>
                    Select Section
                  </option>
                  {empsectionlist.map((data) => (
                    <option key={data.sectionId} value={data.sectionId}>
                      {data.sectionName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row m-2">
              <div className="col">
                <label htmlFor="exampleInput" className="form-label">
                  State
                </label>
                <select
                  name="statecode"
                  value={selectedState}
                  className="form-select"
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="" disabled>
                    Select a state
                  </option>
                  {states.map((data) => (
                    <option key={data.statecd} value={data.statecd}>
                      {data.statename}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                <label htmlFor="exampleInput" className="form-label">
                  Lab
                </label>
                <select
                  name="officecode"
                  value={selectedLab}
                  className="form-select"
                  onChange={(e) => setSelectedLab(e.target.value)}
                >
                  <option value="" disabled>
                    Select Lab
                  </option>
                  {lablist.map((district) => (
                    <option key={district.officeId} value={district.officeId}>
                      {district.officeName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row m-2">
              <div className="col">
                <label htmlFor="exampleInput" className="form-label">
                  Multi Sections
                </label>
                <SectionMultiSelect
                  setSelectedSections={setSelectedSections}
                  selectedSections={selectedSections}
                />
              </div>

              <div className="col">
                <label htmlFor="exampleInput" className="form-label">
                  Designation
                </label>
                <select
                  name="empDesg"
                  value={formData.empDesg}
                  className="form-select"
                  onChange={handleInputChange}
                >
                  <option value="" selected disabled>
                    Select Designation
                  </option>
                  {designationlist.map((data) => (
                    <option key={data.desgid} value={data.desgid}>
                      {data.desgname}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row m-2">
              <div className="col">
                <label htmlFor="exampleInput" className="form-label">
                  E-Mail Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="emailId"
                  value={formData?.emailId}
                  onChange={handleInputChange}
                />
                <span style={{ color: "red" }}>{errors.emailId}</span>
              </div>
              <div className="col">
                <label htmlFor="exampleInput" className="form-label">
                  Phone No
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNo"
                  value={formData?.phoneNo}
                  onChange={handleInputChange}
                />
                <span style={{ color: "red" }}>{errors.phoneNo}</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "3px",
                columnGap: "3px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default NewUserReg;
