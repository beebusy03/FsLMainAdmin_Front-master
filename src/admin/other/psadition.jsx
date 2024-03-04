import React, { useState } from "react";

import MUIDataTable from "mui-datatables";
import {
  faChevronCircleLeft,
  faPaperPlane,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
const PsAddition = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86",
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433",
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        date: "2008/11/28",
        salary: "$162",
      },
    ],
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div className="container">
      <div className="card m-3 shadow">
        <div className="card-header headingcolor">
          <h2 className="text-center">Add Police Station From NCRB Data</h2>
        </div>
        <div className="card-body">
          <div className="row m-2">
            <MDBDataTable striped bordered hover data={data} />
          </div>
        </div>
        <div className="card shadow m-3">
          <div className="card-header headingcolor">
            <h2 className="text-center">police Station Detail</h2>
          </div>
          <div className="card-body">
            <div className="row m-2">
              <div className="col-lg-2">District Code</div>
              <div className="col-lg-4">
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-2">District Name</div>
              <div className="col-lg-4">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-2">Station Code</div>
              <div className="col-lg-4">
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-2">Station Name</div>
              <div className="col-lg-4">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-2">Police Station Code</div>
              <div className="col-lg-4">
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-2">Police Station Name</div>
              <div className="col-lg-4">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <button
                  className="btn btn-primary m-2"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Save &nbsp;
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className={isHovered ? "farockethover" : ""}
                  />
                </button>
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
                  color="error"
                  onMouseEnter={() => setIsHovered2(true)}
                  className="btn btn-secondary"
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  Back &nbsp;{" "}
                  <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className={isHovered2 ? "faarrowrightHovered" : ""}
                  />
                </Button>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsAddition;
