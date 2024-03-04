import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SectionTransfer = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-header headingcolor">
          <h2 className="text-center">Section Transfer</h2>
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
            <div className="col-lg-2">Transfer To</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-2">Generate Type</div>
            <div className="col-lg-6">
              <label className="m-2">
                <input type="radio" name="group1" value="S" />
                Same Main File No
              </label>
              <label className="m-2">
                <input type="radio" name="group1" value="N" />
                New Main File No
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-3">
              <Button
                variant="contained"
                onMouseEnter={() => setIsHovered1(true)}
                className="btn btn-primary"
                onMouseLeave={() => setIsHovered1(false)}
              >
                Transfer&nbsp;{" "}
                <FontAwesomeIcon
                  icon={faExchangeAlt}
                  className={isHovered1 ? "fatimeshover" : ""}
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

export default SectionTransfer;
