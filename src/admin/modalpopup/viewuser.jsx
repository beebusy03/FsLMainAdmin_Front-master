import { faCircleXmark, faEye, faLock, faPaperPlane, faRoadLock, faUnlock, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { FaLock, FaPaperPlane } from 'react-icons/fa'

const Viewuser = ({ title, view, setview }) => {
  const handleAddUser = () => {
    setview(false)
  }
  const handleCloseUser = () => {
    setview(false)
  }
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    <Modal backdrop="static"
      size="lg"
      show={view}
      style={{ marginTop: '30px' }}
    >
      <Modal.Header  style={{ background: '#248888', color: 'white', }}>
        <Modal.Title className='w-100 d-flex justify-content-center'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row m-2'>
          <div className='col-lg-2'>
            User Id
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
          <div className='col-lg-2'>
            Employee Id
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-2'>
            Name
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
          <div className='col-lg-2'>
            Name In Hindi
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-2'>
            Section
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
          <div className='col-lg-2'>
            Designation
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-2'>
            E-Mail Id
          </div>
          <div className='col-lg-4'>
            <input type='email' className='form-control' />
          </div>
          <div className='col-lg-2'>
            Phone No
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-2'>
            AAdhar (Last Four Digit)
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
          <div className='col-lg-2'>
            Officer Status
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
        </div>
        <div className='row m-2'>
          <div className='col-lg-2'>
            Reporting To
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
          <div className='col-lg-2'>
            Multiple Section
          </div>
          <div className='col-lg-4'>
            <input type='text' className='form-control' />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            {/* <button className='btn btn-primary m-2' onClick={handleCloseUser}>Reset Password</button> */}
            <button className='btn btn-primary m-2' onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}  onClick={handleCloseUser}>Reset Password &nbsp;<FontAwesomeIcon icon={faUserLock} className={isHovered ? 'falockhover' : ''} /></button>
           
            <button className='btn btn-dark m-2' onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)}  onClick={handleCloseUser}>Activate/Deactivate &nbsp;<FontAwesomeIcon icon={faEye} className={isHovered1 ? 'faeyehover' : ''} /></button>
            <button className='btn btn-secondary m-2' onMouseEnter={() => setIsHovered2(true)}
onMouseLeave={() => setIsHovered2(false)}  onClick={handleCloseUser}>Unlock Password &nbsp;<FontAwesomeIcon icon={faLock} className={isHovered2 ? 'falockhover' : ''} /></button>
            <button className='btn btn-danger m-2' onMouseEnter={() => setIsHovered3(true)}
onMouseLeave={() => setIsHovered3(false)}  onClick={handleCloseUser}>Close &nbsp;<FontAwesomeIcon icon={faCircleXmark} className={isHovered3 ? 'fatimeshover' : ''} /></button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Viewuser
