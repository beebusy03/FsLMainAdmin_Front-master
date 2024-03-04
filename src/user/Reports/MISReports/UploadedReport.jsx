import React, { useState } from "react";
import { Button } from "@mui/material";
import Heading from "../../../common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const UploadedReport = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div className="container">
      <div className="card m-3 shadow">
        <Heading title="File Upload Report Details" />
        <div className="card-body">
          <div className="row mb-3 d-flex justify-content-center">
            <div className="col-4">
              <label htmlFor="reportStartDate" className="label">
                Report From
              </label>
              <input
                id="reportStartDate"
                type="date"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <label htmlFor="reportEndDate" className="label">
                Report As On
              </label>
              <input id="reportEndDate" type="date" className="form-control" />
            </div>
          </div>

          <div className="col mt-3">
            <div className="d-flex justify-content-center">
            
              <Button variant="contained" style={{ margin: "0 8px" }} color='primary'  onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >  Generate Report &nbsp;<FontAwesomeIcon icon={faCog}className={isHovered ? 'facoghover' : ''}/></Button>
            </div> </div>
            <div className="row">
            <div className="col-9 mt-3"></div>
          
            <div className="col-3 mt-3">
              <Button
                variant="contained"
                style={{ margin: "0 8px" }}
                color="success"
                onMouseEnter={() => setIsHovered2(true)}
onMouseLeave={() => setIsHovered2(false)} > 
                To Register
                &nbsp;<FontAwesomeIcon icon={faFileAlt}className={isHovered2 ? 'faarrowrightHovered' : ''}/></Button>
            </div>
          </div>
          </div>
          </div>
        </div>
     
   
  );
};




export default UploadedReport