import React, { useState } from "react";
import { Button } from "@mui/material";
import Heading from "../../../common/Heading";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { callApi } from "../../../common/CallApi";
import { MDBDataTable } from "mdbreact";

const NatureofCaseDept = () => {
  const [isHovered, setIsHovered] = useState(false);
  const apiPrefix = process.env.REACT_APP_API_PREFIX;
  const apigetData = `${apiPrefix}/alluser/getallcasenature`;
  const [formData, setFormData] = useState([]);

  const handleGenerate = () => {
    callApi(apigetData)
      .then((response) => {
        // Ensure that the response is an array before setting it in state
        if (Array.isArray(response)) {
          setFormData(response);
        } else {
          console.error("Invalid API response format. Expected an array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const data = {
    columns: [
      {
        label: 'Case ID',
        field: 'caseId',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Office ID',
        field: 'officeId',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Section',
        field: 'section',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Nature of Case',
        field: 'natureOfCase',
        sort: 'asc',
        width: 270,
      },
    ],
    rows: formData.map((item) => ({
      caseId: item.caseId,
      officeId: item.officeId,
      section: item.section,
      natureOfCase: item.natureOfCase,
    })),
  };

  return (
    <div className="container">
      <div className="card m-3 shadow">
        <Heading title="NATURE OF CASE & DEPARTMENT WISE REPORTS" />
        <div className="card-body">
          <div className="justify-content-center">
            <p>Generate Report By</p>
          </div>
          <div className="row mb-3 d-flex justify-content-center">
            <div className="col-4">
              <label htmlFor="reportStartDate" className="label">
                Start Date
              </label>
              <input
                id="reportStartDate"
                type="date"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <label htmlFor="reportEndDate" className="label">
                End Date
              </label>
              <input id="reportEndDate" type="date" className="form-control" />
            </div>
            <div className="col-4">
              <label htmlFor="reportEndDate" className="label">
                Nature Type
              </label>
              <input id="reportEndDate" type="text" className="form-control" />
            </div>
          </div>

          <div className="col mt-3">
            <div className="d-flex justify-content-center">
              <Button
                variant="contained"
                style={{ margin: "0 8px" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleGenerate}
              >
                Generate Report
                &nbsp;<FontAwesomeIcon
                  icon={faFileAlt}
                  className={isHovered ? 'faarrowrightHovered' : ''}
                />
              </Button>
            </div>
          </div>
          <div className="row">
            <MDBDataTable striped bordered hover data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureofCaseDept;
