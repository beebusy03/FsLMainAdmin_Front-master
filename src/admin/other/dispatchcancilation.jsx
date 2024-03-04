import { faSync, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const DispatchCancilation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-header headingcolor">
          <h2 className="text-center">Dispatch Cancilation</h2>
        </div>
        <div className="card-body">
          <div className="row m-2">
            <div className="col-lg-2">File Number</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-2">Office Code</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-2">Main File No</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-2">Section</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-2">Division No</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-2">Year</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <Button
                variant="contained"
                style={{ margin: "0 8px" }}
                className="btn btn-danger m-2"
                color="primary"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Delete &nbsp;
                <FontAwesomeIcon
                  icon={faTrash}
                  className={isHovered ? "fatimeshover" : ""}
                />
              </Button>
              <Button
                variant="contained"
                className="btn btn-secondary"
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
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispatchCancilation;
