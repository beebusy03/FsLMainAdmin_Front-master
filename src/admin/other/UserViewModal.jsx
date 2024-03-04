import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { callApi } from '../../common/CallApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { postApiData } from '../../redux/slice/postSlice';
import { useDispatch } from 'react-redux';
import ErrorBoundary from '../../ErrorBoundary';

const UserViewModal = ({ isOpen, onClose, srnobyuser }) => {
    const dispatch = useDispatch();

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [lablist, setLablist] = useState([]);
    const [sectionlist, setSectionList] = useState([]);
    const [selectedLab, setSelectedLab] = useState('');

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClose = () => {
        onClose(false);
    };

    const [formData, setFormData] = useState({})
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const apigetDatabyid = `${apiPrefix}/alluser/getUserById`;

    useEffect(() => {
        callApi(`${apigetDatabyid}?id=${srnobyuser}`)
            .then((response) => {
                setFormData(response);
                console.log(response)
            });
    }, [srnobyuser]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
            statecode: selectedState,
            officecode: selectedLab
        });
    };
    const apiUrl = `${apiPrefix}/alluser/activateanddeactivate`;

    const handleApproved = (serialnumber) => {
        const payload = {
            status: 'Y',
            serialnumber: serialnumber,
        }
        dispatch(postApiData({ apiUrl, postData: payload }));

    }

    return (
        <ErrorBoundary>
            <React.Fragment>
                <Dialog
                    fullScreen={fullScreen}
                    open={isOpen}
                    onClose={onClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"User Approval"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <>
                                <div className='row m-2'>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">Name</label>
                                        <input type="text" className="form-control" name='empName' value={formData?.empName} onChange={handleInputChange} />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">Name in Hindi</label>
                                        <input type="text" className="form-control" name='empNameHindi' value={formData?.empNameHindi} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className='row m-2'>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">Employee Id</label>
                                        <input type="text" className="form-control" name='empId' value={formData?.empId} onChange={handleInputChange} />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">Name in Hindi</label>
                                        <input type="text" className="form-control" name='empNameHindi' value={formData?.empNameHindi} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className='row m-2'>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">State</label>
                                        <select
                                            name='statecode'
                                            value={selectedState}
                                            className='form-select'
                                            onChange={(e) => setSelectedState(e.target.value)}
                                        >
                                            <option value="" disabled>Select a state</option>
                                            {states.map((data) => (
                                                <option key={data.statecd} value={data.statecd}>
                                                    {data.statename}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">Lab</label>
                                        <select
                                            name="officecode"
                                            value={selectedLab}
                                            className='form-select'
                                            onChange={(e) => setSelectedLab(e.target.value)}
                                        >
                                            <option value="" disabled>Select Lab</option>
                                            {lablist.map((district) => (
                                                <option key={district.officeId} value={district.officeId}>
                                                    {district.officeName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='row m-2'>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">Sections</label>
                                        <select
                                            name="sectionId"
                                            value={formData.sectionId}
                                            className='form-select'
                                            // onChange={(e) => {
                                            //     const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                                            //     setFormData({
                                            //         ...formData,
                                            //         sectionId: selectedOptions
                                            //     });
                                            // }}
                                            multiple // This attribute allows multiple selections
                                        >
                                            <option value="" disabled>Select Sections</option>
                                            {sectionlist.map((data) => (
                                                <option key={data.sectionId} value={data.sectionId}>
                                                    {data.sectionName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">Designation</label>
                                        <input type="text" className="form-control" name='empDesg' value={formData?.empDesg} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className='row m-2'>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">E-Mail Id</label>
                                        <input type="text" className="form-control" name='emailId' value={formData?.emailId} onChange={handleInputChange} />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">Phone No</label>
                                        <input type="text" className="form-control" name='phoneNo' value={formData?.phoneNo} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className='row m-2'>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">AAdhar (Last Four Digit)</label>
                                        <input type="text" className="form-control" name='aadhar' value={formData?.aadhar} onChange={handleInputChange} />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="exampleInput" className="form-label">Officer Status</label>
                                        <input type="text" className="form-control" name='google' value={formData?.google} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <div className='d-flex justify-content-center' style={{ gap: '3px' }}>
                            <Button variant="contained" onClick={handleApproved}>Approved</Button>
                            <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
                        </div>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </ErrorBoundary>
    );
}

export default UserViewModal