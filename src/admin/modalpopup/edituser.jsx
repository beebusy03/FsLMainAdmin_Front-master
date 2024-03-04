import { faCircleXmark, faPaperPlane, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Edituser = ({ title, edituse, setedituse }) => {
  const handleAddUser = () => {
    setedituse(false)
  }
  const handleCloseUser = () => {
    setedituse(false)
  }
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <Modal backdrop="static"
      size="lg"
      show={edituse}
      style={{ marginTop: '30px' }}
    >
      <Modal.Header className='Headingcolorcard '>
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
          <div className='col-lg-4'></div>
          <div className='col-lg-4'>
            <button className='btn btn-primary m-2' onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} onClick={handleAddUser}>Save &nbsp;<FontAwesomeIcon icon={faPaperPlane} className={isHovered ? 'farockethover' : ''} /></button>

            <button className='btn btn-danger m-2' onClick={handleCloseUser} onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}>Close <FontAwesomeIcon icon={faCircleXmark} className={isHovered1 ? 'fatimeshover' : ''} /></button>
          </div>
          <div className='col-lg-4'></div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Edituser
