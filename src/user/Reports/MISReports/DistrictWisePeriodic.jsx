import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@mui/material";
import Heading from "../../../common/Heading";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DistrictWisePeriodic = () => {
  const columns = [
    "Sr#",
    "FCR ID",
    "FSL ID",
    "Fir No/DD No",
    "Police Station",
    "IO Name",
  ];

  const data = [
    ["1", "FCR123", "FSL456", "FIR789", "Police Station A", "John Doe"],
    ["2", "FCR123", "FSL456", "FIR789", "Police Station A", "John Doe"],
    ["3", "FCR123", "FSL456", "FIR789", "Police Station A", "John Doe"],
  ];

  const options = {
    filterType: false,
    selectableRows: false,
    responsive: "standard",
    rowsPerPage: 10,
    pagination: true,
  };

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="container">
      <div className="card">
        <Heading title="DISTRICT WISE PERIODIC REPORT
 " />
        <div className="card-body">
          <div className="col mt-3">
            <MUIDataTable
              data={data}
              columns={columns}
              options={options}
            />
          </div>
          <div className="col mt-3">
            <div className="d-flex justify-content-center">
            
              <Button variant="contained" style={{ margin: "0 8px" }} onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} > 
                Report
                &nbsp;<FontAwesomeIcon icon={faFileAlt}className={isHovered ? 'faarrowrightHovered' : ''}/></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistrictWisePeriodic;
