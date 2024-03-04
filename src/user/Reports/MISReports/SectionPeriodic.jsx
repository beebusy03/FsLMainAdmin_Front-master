import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@mui/material";
import Heading from "../../../common/Heading";

const SectionPeriodic = () => {
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

  const tableStyles = {
    boxShadow: "none", // Add this line to remove the shadow
  };

  return (
    <div className="container">
      <div className="card">
        <Heading title="SECTION WISE PERIODIC REPORT " />
        <div className="card-body">
          <div className="col mt-3">
            <MUIDataTable
              data={data}
              columns={columns}
              options={options}
              style={tableStyles} // Apply custom styles to remove the shadow
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPeriodic;
