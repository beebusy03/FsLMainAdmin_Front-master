import React, { useState } from 'react'

import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
const Faseal = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='container'>
      <div className='sdfg'>
        {/* <Heading title="CFSL BIDAR" /> */}
        <h4 style={{ fontSize: '17px', fontWeight: '500' }}> FORWARDING AUTHORITY DETAILS</h4>
        <hr />

        <div className='card-body'>
          <div className='row'>
            <div className='col-2'>
              Name of Authority
            </div>
            <div className='col-2'>
              <select type='text' className="form-select">
                <option value="" disabled selected>Select SP</option>
                <option>Option</option>
                <option>Oprion</option>
              </select>
            </div>
            <div className='col-3'>
              <input type='text' className='form-control' placeholder='Type FA Details' />
            </div>
            <div className='col-1'>
              Address
            </div>
            <div className='col-3'>
              <textarea type='text' className='form-control' placeholder='' />
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              Email ID
            </div>
            <div className='col'>
              <input type='text' className='form-control' placeholder='' />
            </div>
            <div className='col'>
              Phone
            </div>
            <div className='col'>
              <input type='text' className='form-control' placeholder='' />
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col'>
              F A Letter/Memo No
            </div>
            <div className='col'>
              <input type='date' className='form-control' placeholder='' />
            </div>
            <div className='col'>
              F A Letter/Memo Date *

            </div>
            <div className='col'>
              <input type='date' className='form-control' placeholder='' />
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col'>
              Received Through *
            </div>
            <div className='col'>
              <input type='text' className='form-control' placeholder='' />
            </div>
            <div className='col'>
              Messenger Name *

            </div>
            <div className='col'>
              <input type='text ' className='form-control' placeholder='' />
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col'>
              Received Through *
            </div>
            <div className='col'>
              <select type='text' className="form-select">
                <option value="" disabled selected>Select SP</option>
                <option>Option</option>
                <option>Oprion</option>
              </select>
            </div>
            <div className='col'>
              Messenger Name *

            </div>
            <div className='col'>
              <input type='text ' className='form-control' placeholder='' />
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col'>
              Belt/Batch/ID No*
            </div>
            <div className='col'>
              <input type='text ' className='form-control' placeholder='' />
            </div>
            <div className='col'>
              Messenger Mobile No*
            </div>
            <div className='col'>
              <input type='text ' className='form-control' placeholder='' />
            </div>
          </div>


          <h5 className='mt-2'>SEAL DETAILS </h5>
          <hr />
          <div className='row mt-3'>
            <div className='col'>
              No of Seals *
            </div>
            <div className='col'>
              <input type='text ' className='form-control' placeholder='' />
            </div>
            <div className='col'>
              Seal Status *
            </div>
            <div className='col'>
              <input type='text ' className='form-control' placeholder='' />
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              Seal Tallied
            </div>
            <div className='col'>
              <select type='text' className="form-select">
                <option value="" disabled selected>Select SP</option>
                <option>Yes</option>
                <option>No</option>
              </select>            </div>
            <div className='col'>
              No of Parcels
            </div>
            <div className='col'>
              <input type='text ' className='form-control' placeholder='' />
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              Packets/Articles Marking
            </div>
            <div className='col'>
              <input type='text ' className='form-control' placeholder='' />
            </div>
            <div className='col'>
              Packets/Articles Seal Impression
            </div>
            <div className='col'>
              <input type='text ' className='form-control' placeholder='' />
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-6'>
              <div className='d-flex justify-content-end'>
              <Button variant="contained" style={{ margin: "0 8px" }}onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >Save Data &nbsp;<FontAwesomeIcon icon={faRocket} className={isHovered ? 'farockethover' : ''} /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faseal
