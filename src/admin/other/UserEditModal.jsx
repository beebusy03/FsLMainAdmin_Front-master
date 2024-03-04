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
import { putApiData } from '../../redux/slice/putSlice';
import { useDispatch } from 'react-redux';
import { CardContent } from '@mui/material';
import Step2 from './UserAdminModal/Step2';
import Step1 from './UserAdminModal/Step1';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserEditModal = ({ isOpen, onClose, srnoEdit }) => {
    const dispatch = useDispatch();
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedSections, setSelectedSections] = useState([]);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        onClose(false);
    };
    const [formData, setFormData] = useState({
        empId: '',
        statecode: '',
        officecode: '',
        empName: '',
        empNameHindi: '',
        emailId: '',
        phoneNo: '',
        empDesg: '',
        status: '',
    });
    const apigetDatabyid = `${apiPrefix}/alluser/getUserById`;

    useEffect(() => {
        callApi(`${apigetDatabyid}?id=${srnoEdit}`)
            .then((response) => {
                setFormData(response);
            });
    }, [srnoEdit]);

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [lablist, setLablist] = useState([]);
    const [sectionlist, setSectionList] = useState([]);
    const [selectedLab, setSelectedLab] = useState('');
    const getStateListApi = `${apiPrefix}/alluser/allddl/getallstate`;
    const getsectionlist = `${apiPrefix}/alluser/allddl/getallsection`;

    useEffect(() => {
        fetchStates();
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedState) {
            fetchDistricts(selectedState);
        }
    }, [selectedState]);

    const fetchData = async () => {
        try {
            const response = await fetch(getsectionlist);
            const data = await response.json();
            setSectionList(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const fetchStates = async () => {
        try {
            const response = await fetch(getStateListApi);
            const data = await response.json();
            setStates(data);
        } catch (error) {
            console.error('Error fetching states:', error);
        }
    };

    const fetchDistricts = async (selectedState) => {
        try {
            const paramstate = { scode: selectedState };
            const response = await fetch(`${apiPrefix}/alluser/allddl/getallofficebyscode?${new URLSearchParams(paramstate)}`);
            const data = await response.json();
            setLablist(data);
        } catch (error) {
            console.error('Error fetching lablist:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
            statecode: selectedState,
            officecode: selectedLab
        });
    };


    const [selectedValues, setSelectedValues] = useState([]);



    const nextStep = () => {
        setCurrentStep(currentStep >= 2 ? 3 : currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1);
        if (currentStep === 2) {
            setSelectedValues([]);
        }
    };


    const previousButton = () => {
        if (currentStep !== 1) {
            return (
                <Button className='mt-2' variant="contained" onClick={prevStep}>Back &nbsp;<FontAwesomeIcon icon={faArrowAltCircleLeft}/></Button>
            );
        }
        return null;
    };
    const nextButton = () => {
        if (currentStep === 1) {
            return (
                <button
                    className="btn btn-primary flex-center"
                    type="button"
                    onClick={nextStep}
                >
                    Next &nbsp;<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
                </button>
            );
        }
        return null;
    };

    const handleSelectedSectionsChange = (sections) => {
        const sectionValues = sections.map(section => section.value);
        const sectionValuesString = JSON.stringify(sectionValues);
        const parsedString = JSON.parse(sectionValuesString);
        setSelectedSections(JSON.stringify(parsedString));
    };


    const apiupdate = `${apiPrefix}/alluser/editUserDetailandaprrove`;

    const handleUpdate = () => {
        if (currentStep === 1) {
            nextStep();
        } else if (currentStep === 2) {
            const payload = {
                ...formData,
                status: 'R',
                srnoEdit: srnoEdit,
                role: selectedValues,
            };
            dispatch(
                putApiData({
                    apiUrl: apiupdate,
                    putData: payload,
                })
            );
        }
    };

    const handleApprove = () => {
        if (currentStep === 1) {
            nextStep();
        } else if (currentStep === 2) {
            const payload = {
                ...formData,
                status: 'A',
                srnoEdit: srnoEdit,
                role: selectedValues,
            };
            dispatch(
                putApiData({
                    apiUrl: apiupdate,
                    putData: payload,
                })
            );
        }
    }

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setSelectedValues([...selectedValues, value]);
        } else {
            setSelectedValues(selectedValues.filter(item => item !== value));
        }
    };

    return (
        <React.Fragment >
            <Dialog
                fullScreen={fullScreen}
                open={isOpen}
                onClose={onClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"User Data"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <CardContent>
                            <p>Step {currentStep} </p>
                            <div>
                                {currentStep === 1 && (
                                    <Step1
                                        formData={formData}
                                        handleInputChange={handleInputChange}
                                        states={states}
                                        selectedState={selectedState}
                                        setSelectedState={setSelectedState}
                                        lablist={lablist}
                                        selectedLab={selectedLab}
                                        setSelectedLab={setSelectedLab}
                                        sectionlist={sectionlist}
                                        setSelectedSections={handleSelectedSectionsChange}
                                        selectedSections={selectedSections}
                                    />
                                )}
                                {currentStep === 2 && (
                                    <Step2
                                        username={formData.username}
                                        // handleCheckboxChange={handleCheckboxChange}
                                        handleCheckboxChange={handleCheckboxChange}

                                    />
                                )}
                                {previousButton()}
                                {currentStep === 2 && (
                                    <div style={{ display: 'flex', justifyContent: 'center', margin: '3px', columnGap: '3px' }}>
                                        <Button variant="contained" color='error' onClick={handleApprove}>Approve</Button>
                                        <Button variant="contained" onClick={handleUpdate}>Reject</Button>
                                        <Button variant="contained" onClick={handleClose}>Cancel</Button>
                                    </div>
                                )}
                                {nextButton()}
                            </div>
                        </CardContent>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};
export default UserEditModal;
