import React from 'react'
import Redstar from '../../../common/Redstar'

const ForwardingAuthorityTab = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    Name Of Authority <Redstar />
                </div>
                <div className='col'>
                    <input type='text' className='form-control' />
                </div>
                <div className='col'>
                    Address <Redstar />
                </div>
                <div className='col'>
                    <textarea type='text' className='form-control' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    PinCode
                </div>
                <div className='col'>
                    <input type='text' className='form-control' />
                </div>
                <div className='col'>
                    District <Redstar />
                </div>
                <div className='col'>
                    <select type='text' className="form-select">
                        <option value="" disabled selected>Select State UT </option>
                        <option>Delhi</option>
                        <option>Chandigarh</option>
                    </select>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    Email ID
                </div>
                <div className='col'>
                    <input type='text' className='form-control' />
                </div>
                <div className='col'>
                    Phone No	 <Redstar />
                </div>
                <div className='col'>
                    <input type='text' className='form-control' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    Received Through	 <Redstar />
                </div>
                <div className='col'>
                    <select type='text' className="form-select">
                        <option value="" disabled selected>Select </option>
                        <option>Delhi</option>
                        <option>Chandigarh</option>
                    </select>
                </div>
                <div className='col'>
                    F A Letter/Memo No 	 <Redstar />
                </div>
                <div className='col'>
                    <input type='text' className='form-control' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    F A Letter/Memo Date<Redstar />
                </div>
                <div className='col'>
                    <input type='date' className='form-control' />
                </div>
                <div className='col'>
                    Messenger Name 	 <Redstar />
                </div>
                <div className='col'>
                    <input ftype='text' className='form-control' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    Messenger Mobile No<Redstar />
                </div>
                <div className='col'>
                    <input type='date' className='form-control' />
                </div>
                <div className='col'>
                    Belt/ Batch/ ID No<Redstar />
                </div>
                <div className='col'>
                    <input ftype='text' className='form-control' />
                </div>
            </div>
        </div>
    )
}

export default ForwardingAuthorityTab