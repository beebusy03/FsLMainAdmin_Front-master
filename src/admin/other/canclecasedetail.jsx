import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CancleCaseDetail = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-header headingcolor">
          <h2 className="text-center">Cancle Case Detail</h2>
        </div>
        <div className="card-body">
          <div className="row m-2">
            <div className="col-lg-2">Office Code</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-2">Main File No</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-2">Section</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-2">Division No</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-2">Year</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-2">To Print</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-3">
              <Button
                variant="contained"
                className="btn btn-primary"
                style={{ margin: "0 8px" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                mt={1}
              >
                Search &nbsp;{" "}
                <FontAwesomeIcon
                  icon={faSearch}
                  className={isHovered ? "faSearchHovered" : ""}
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

export default CancleCaseDetail;
