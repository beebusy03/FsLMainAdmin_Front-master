import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import RegistrationTab from './RegistrationComp/RegistrationTab';
import ForwardingAuthorityTab from './RegistrationComp/ForwardingAuthorityTab';
import ParcelSectionDetailsTab from './RegistrationComp/ParcelSectionDetailsTab';
import Heading from '../../common/Heading';
import { Card, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { postApiData } from '../../redux/slice/postSlice';
import { actions as sectionActions } from '../../redux/slice/sectionSlice';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';
import { setData } from '../../redux/slice/dataSlice';
import { downloadPdf } from '../../redux/slice/PdfSlice';

const steps = [
    'Registration',
    'Forwarding Authority',
    'Parcel Section Details'
];
const { addList } = sectionActions;
const Registration = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const [selectedSections, setSelectedSections] = useState([]);
    const [selectedSectionNames, setSelectedSectionNames] = useState([]);

    const [Reposnereg, setReposnereg] = useState([])
    const [formData, setFormData] = useState({
        // statecode: '',
        // distcode: '',
        // policest: '',
        fromdept: '', // recived form
        // selected fir type the show input field 
        firno: '',
        firdate: '',
        courtname: '',
        caseno: '',
        organi: '',
        lawsection: '',
        remarks: '',

        faname: '', // name of authority
        add1: '',// adddress
        pincode: '',
        emaild: '',
        phoneno: '',
        messname: '', //messnage name
        referencedate: '', // memo date
        referenceno: '', // memo no
        sentthrough: '', // recived through
        registerid: '', // register ib belt no 
        messdetail: '',
        diarydate: '',
        diaryno: '',
        noofparcels: '', // no of packets
        parceldetail: '',
        sealdetail: '', // seal impression
        sealstatus: '', //seal status
        noofseals: '',
        receivedDate: '',
        oldfileno: '',
        continuedivision: '',
        sectionno: '',
        year1: '',
        firtype: '',
        foremail: '',
        forphone: '',
        messmobileno: '',
        sealimpression: '',
        postNumber: '',
        postType: 'SPEED POST',

    });
    const [activeStep, setActiveStep] = useState(0);
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedPoliceStation, setSelectedPoliceStation] = useState('');

    const handleSelectionChange = (selectedState, selectedDistrict, selectedPoliceStation) => {
        setSelectedState(selectedState);
        setSelectedDistrict(selectedDistrict);
        setSelectedPoliceStation(selectedPoliceStation);
    };


    const handleSelectedSectionsChange = (sections) => {
        setSelectedSections(sections);

        // Extract section names from sections array
        const names = sections.map(section => section.sectionName);
        setSelectedSectionNames(names);
    };





    const apiUrl = `${apiPrefix}/user/registration/adddata`;

    const handleSubmit = () => {
        const payloadData = {
            ...formData,
            mainsectionno: selectedSections,
            statecode: selectedState,
            distcode: selectedDistrict,
            policest: selectedPoliceStation,
        };

        dispatch(postApiData({ apiUrl, postData: payloadData }))
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    toast.success('Success', {
                        position: toast.POSITION.TOP_CENTER,
                    });

                } else {
                    console.error("Unexpected status code:", response.payload.status);
                }
                if (response.payload && response.payload.length > 0) {
                    console.log("API Response:", String(response.payload[0]));
                    setReposnereg(String(response.payload[0]))
                    let main_file_no = response.payload[0]['mainfileno'];
                    let dsp_no = response.payload[0]['fulldispno'];
                    let no_of_parcel = response.payload[0]['noofparcels'];
                    dispatch(addList({ fileNo: main_file_no, list: dsp_no, no_of_parcel: no_of_parcel}));
                    console.log("main_file_no", main_file_no);
                    Navigate('/User/RegistrionFinal');
                    dispatch(setData(String(response.payload[0])));

                    console.log("API Response:", response.payload);
                    console.log("API Response mainfileno:", response.payload[0].mainfileno);
                    const apiUrl = `${apiPrefix}/alluser/registercreatepdf?fslregno=${response.payload[0].mainfileno}`;
                    dispatch(downloadPdf({ pdfUrl: apiUrl }));

                    setReposnereg(String(response.payload[0]))


                    Navigate('/User/RegistrionFinal');

                } else {
                    console.error("No payload or payload is empty in the response.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        switch (activeStep) {
            case 1:
                setSelectedState(selectedState);
                setSelectedDistrict(selectedDistrict);
                setSelectedPoliceStation(selectedPoliceStation);
                break;
            default:
                break;
        }

        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };



    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <RegistrationTab
                        formData={formData}
                        setFormData={setFormData}
                        onSelectionChange={handleSelectionChange}
                        selectedState={selectedState}
                        selectedDistrict={selectedDistrict}
                        selectedPoliceStation={selectedPoliceStation}
                    />
                );
            case 1:
                return <ForwardingAuthorityTab formData={formData} setFormData={setFormData} />;
            case 2:
                return (
                    <ParcelSectionDetailsTab
                        formData={formData}
                        setFormData={setFormData}
                        selectedSections={selectedSections}
                        setSelectedSections={handleSelectedSectionsChange}
                    />
                );
            default:
                return null;
        }
    };
    /*icon animation*/

    return (
        <Container>
            <Card sx={{ boxShadow: 3 }} >
                <Heading title="Registration" />
                <Box sx={{ width: '100%' }}>

                    <Stepper activeStep={activeStep} alternativeLabel sx={{ p: 2 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, }}>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mt: 3, ml: 1 }} variant="contained" onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} color='error'>Back &nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} className={isHovered ? 'faarrowrightHovered' : ''} /></Button>

                        <Button
                            variant="contained"
                            onClick={isLastStep() ? handleSubmit : handleNext}
                            sx={{ mt: 3, ml: 1 }}
                            onMouseEnter={() => isLastStep() ? setIsHovered1(true) : setIsHovered2(true)}
                            onMouseLeave={() => isLastStep() ? setIsHovered1(false) : setIsHovered2(false)}
                        >
                            {isLastStep() ? 'Submit' : 'Next'}
                            {isLastStep() ?
                                <FontAwesomeIcon icon={faPaperPlane} className={isHovered1 ? "farockethover" : ""} /> :
                                <FontAwesomeIcon icon={faChevronCircleRight} className={isHovered2 ? 'faarrowrightHovered' : ''} />
                            }
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Container>
    );
};

export default Registration;
