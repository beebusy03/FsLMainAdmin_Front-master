import { faCircleXmark, faPaperPlane, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Role = ({ title, role, setrole }) => {
  const handleAddUser = () => {
    setrole(false)
  }
  const handleCloseUser = () => {
    setrole(false)
  }
  const [isChecked, setChecked] = useState(false);

  // Handler function for the checkbox onChange event
  const handleCheckboxChange = () => {
    setChecked(!isChecked); // Toggle the checkbox value
  };
  const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
  return (
    <Modal backdrop="static"
      size="lg"
      show={role}
      style={{ marginTop: '30px' }}
    >
      <Modal.Header  style={{ background: '#248888', color: 'white', }}>
        <Modal.Title className='w-100 d-flex justify-content-center'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row m-2'>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Registration
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Modify
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Reports
            </label>
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Exam/Allotment
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Despatch
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Report Entry
            </label>
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Further Material
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Exam Report
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Approval
            </label>
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Registration (CCTNS)
            </label>
          </div>
        </div>
        <div className='row m-2'>
          <h3 className='text-center'>Additional Roles</h3>
        </div>
        <div className='row m-2'>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Section Transfer
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Parcel Entry
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              File Upload
            </label>
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              View Report
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Cancel Regi
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              SOC Visit
            </label>
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Assign To Director
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Parcel Registration
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Internal Transfer(HP)
            </label>
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Chain of Custody
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Bulk Re-Assign
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Old Cases Entry
            </label>
          </div>
        </div>
        <div className='row m-2'>
          <h3 className='text-center'>Reports</h3>
        </div>
        <div className='row m-2'>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Registration
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Search
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              MIS
            </label>
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              BLOCK CHAIN REPORT
            </label>
          </div>
          <div className='col-lg-4'>
            <label>
              {/* Input element with type="checkbox" */}
              <input
                type="checkbox"
                checked={isChecked} // Controlled component: value is controlled by state
                onChange={handleCheckboxChange} // Event handler for checkbox change
              />
              Sign Report
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'></div>
          <div className='col-lg-4'>
            <button className='btn btn-primary m-2' onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}  onClick={handleAddUser}>Save &nbsp;<FontAwesomeIcon icon={faPaperPlane} className={isHovered ? 'farockethover' : ''} /></button>
          
            <button className='btn btn-danger m-2' onClick={handleCloseUser} onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)}>Close <FontAwesomeIcon icon={faCircleXmark} className={isHovered1 ? 'fatimeshover' : ''}/></button>
          </div>
          <div className='col-lg-4'></div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Role
