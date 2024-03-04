import React, { useState } from "react";

import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
const FirCourt = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="container">
      <div className="sdfg">
        {/* <Heading title="CFSL BIDAR" /> */}
        <h4 style={{ fontSize: "17px", fontWeight: "500" }}>CASE DETAILS</h4>
        <hr />

        <div className="card-body">
          <div className="row mt-3">
            <div className="col"> SFSL No/Office Case No</div>
            <div className="col">
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="col">Received Date</div>
            <div className="col">
              <input type="date" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col"> Diary No</div>
            <div className="col">
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="col">Diary Date</div>
            <div className="col">
              <input type="date" className="form-control" placeholder="" />
            </div>
          </div>
          <h5 className="mt-3"> POLICE / COURT DETAILS</h5>
          <hr />

          <div className="row mt-3">
            <div className="col"> Received from</div>
            <div className="col">
              <select type="text" className="form-select">
                <option value="" disabled selected>
                  Select
                </option>
                <option>Option 1</option>
                <option>Oprion 2</option>
              </select>
            </div>
            <div className="col">State / UT</div>
            <div className="col">
              <select type="text" className="form-select">
                <option value="" disabled selected>
                  Select
                </option>
                <option>Option 1</option>
                <option>Oprion 2</option>
              </select>{" "}
            </div>
          </div>

          <div className="row mt-3">
            <div className="col"> District</div>
            <div className="col">
            <select type="text" className="form-select">
                <option value="" disabled selected>
                  Select
                </option>
                <option>Option 1</option>
                <option>Oprion 2</option>
              </select>{" "}            </div>
            <div className="col">Police Station *</div>
            <div className="col">
              <input type="text " className="form-control" placeholder="" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">Received Through *</div>
            <div className="col">
              <select type="text" className="form-select">
                <option value="" disabled selected>
                  Select SP
                </option>
                <option>Option</option>
                <option>Oprion</option>
              </select>
            </div>
            <div className="col">Messenger Name *</div>
            <div className="col">
              <input type="text " className="form-control" placeholder="" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">Belt/Batch/ID No*</div>
            <div className="col">
              <input type="text " className="form-control" placeholder="" />
            </div>
            <div className="col">Messenger Mobile No*</div>
            <div className="col">
              <input type="text " className="form-control" placeholder="" />
            </div>
          </div>

          <h5 className="mt-2">SEAL DETAILS </h5>
          <hr />
          <div className="row mt-3">
            <div className="col">No of Seals *</div>
            <div className="col">
              <input type="text " className="form-control" placeholder="" />
            </div>
            <div className="col">Seal Status *</div>
            <div className="col">
              <input type="text " className="form-control" placeholder="" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">Seal Tallied</div>
            <div className="col">
              <select type="text" className="form-select">
                <option value="" disabled selected>
                  Select SP
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>{" "}
            </div>
            <div className="col">No of Parcels</div>
            <div className="col">
              <input type="text " className="form-control" placeholder="" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">Packets/Articles Marking</div>
            <div className="col">
              <input type="text " className="form-control" placeholder="" />
            </div>
            <div className="col">Packets/Articles Seal Impression</div>
            <div className="col">
              <input type="text " className="form-control" placeholder="" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="d-flex justify-content-end">
                <Button variant="contained" style={{ margin: "0 8px" }}onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >Save Data &nbsp;<FontAwesomeIcon icon={faRocket} className={isHovered ? 'farockethover' : ''} /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirCourt;
