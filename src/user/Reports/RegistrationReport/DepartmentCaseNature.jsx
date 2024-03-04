import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Heading from "./../../../common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const DepartmentCaseNature = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State to manage selected radio option

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="container">
        <div className="card m-3 shadow">
          <Heading title="NATURE OF CASE /DEPARTMENT WISE REPORTS" />
          <div className="card-body">
            <div className="row m-2">
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
                      label="By Section Wise"
                    />
                    <FormControlLabel
                      value="Option2"
                      control={<Radio />}
                      label="By User Wise"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="row mt-3">
              {selectedOption === "Option1" && (
                <>
                  <div className="col">
                    <label className="label"> Section</label>
                    <select className="form-select" name="section">
                      <option value="" selected disabled>
                        Select
                      </option>
                    </select>{" "}
                  </div>
                </>
              )}

              {selectedOption === "Option2" && (
                <>
                  <div className="col">
                    <label className="label"> Officer</label>
                    <select className="form-select" name="section">
                      <option value="" selected disabled>
                        Select
                      </option>
                    </select>{" "}
                  </div>
                </>
              )}
              <div className="col">
                <label className="label"> Start Date</label>
                <select className="form-select" name="section">
                  <option value="" selected disabled>
                    Select
                  </option>
                </select>
              </div>
              <div className="col">
                <label className="label">End Date</label>
                <input className="form-control" type="date" />
              </div>
              <div className="col">
                <label className="label">Generate Report By</label>
                <select className="form-select" name="section">
                  <option value="" selected disabled>
                    Select Year
                  </option>
                </select>
              </div>
            </div>

            <div className="col mt-3">
              <div className="d-flex justify-content-center">
              <Button variant="contained" style={{ margin: "0 8px" }} color='primary'  onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >  Generate Reports&nbsp;<FontAwesomeIcon icon={faFileAlt}className={isHovered ? 'faarrowrightHovered' : ''}/></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentCaseNature;
