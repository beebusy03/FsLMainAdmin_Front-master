import React, { useState } from "react";
import { Button } from "@mui/material";
import Heading from "../../../common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SectionWise = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="container">
      <div className="card m-3 shadow">
        <Heading title="SECTION WISE REPORTS" />
        <div className="card-body">
          <div className="row mb-3 d-flex justify-content-center">
            <div className="col">
              <label htmlFor="reportStartDate" className="label">
                Report From
              </label>
              <input
                id="reportStartDate"
                type="date"
                className="form-control"
              />
            </div>
            <div className="col">
              <label htmlFor="reportEndDate" className="label">
                Report Till
              </label>
              <input id="reportEndDate" type="date" className="form-control" />
            </div>
            <div className="col">
              <label htmlFor="reportEndDate" className="label">
                Select Office
              </label>
              <select className="form-select">
                <option value="1">Option</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="reportEndDate" className="label">
                Generate Report By
              </label>
              <select className="form-select">
                <option value="1">Option</option>
              </select>
            </div>
          </div>

          <div className="col mt-3">
            <div className="d-flex justify-content-center">
            <Button variant="contained" style={{ margin: "0 8px" }} color='primary'  onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >  Generate Report &nbsp;<FontAwesomeIcon icon={faCog}className={isHovered ? 'facoghover' : ''}/></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWise;
