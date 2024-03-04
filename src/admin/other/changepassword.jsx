import { faRocket, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ChangePassword = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-header headingcolor">
          <h2 className="text-center">Change Password</h2>
        </div>
        <div className="card-body">
          <div className="row m-2">
            <div className="col-lg-2">Login Id</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-2">Old Password</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-2">New Password</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-2">Re-Type New Password</div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <Button
                variant="contained"
                className="btn btn-primary"
                style={{ margin: "0 8px" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Change Password &nbsp;
                <FontAwesomeIcon
                  icon={faRocket}
                  className={isHovered ? "farockethover" : ""}
                />
              </Button>
              <Button
                variant="contained"
                style={{ margin: "0 8px" }}
                className="btn btn-danger"
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

export default ChangePassword;
