import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Checkbox, DialogTitle, FormControlLabel, FormGroup } from "@mui/material";
import { CardContent } from "@mui/material";
import { Card } from "react-bootstrap";
import Heading from "../../common/Heading";
import { postApiData } from "../../redux/slice/postSlice";
import { useDispatch } from "react-redux";

const UserRolesModal = ({ isOpen, onClose, setedituse }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleBack = () => {
        onClose(true);
    };


    const apiUrl = `${apiPrefix}/alluser/changerole`;

    const handleSubmit = () => {
        dispatch(postApiData({ apiUrl, postData: formData }))

    }

    return (
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
                    <Card sx={{ boxShadow: 4 }} className='mt-3' >
                        <Heading title="Role Assignment to KA060002" />
                        <CardContent>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Registration" />
                                    <FormControlLabel control={<Checkbox value="MOD" />} label="Exam/Allotment" />
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Further Material" />
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Registration (CCTNS)" />
                                </FormGroup>
                                <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Modify" />
                                    <FormControlLabel control={<Checkbox value="MOD" />} label="Despatch" />
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Exam Report" />
                                </FormGroup>
                                <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Reports" />
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Approval" />
                                    <FormControlLabel control={<Checkbox value="MOD" />} label="Report Entry" />
                                </FormGroup>
                            </div>
                        </CardContent>
                    </Card>
                    <Card sx={{ boxShadow: 4 }} className='mt-3' >
                        <Heading title="Additional Roles" />
                        <CardContent>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Section Transfer" />
                                    <FormControlLabel control={<Checkbox value="MOD" />} label="View Report" />
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Assign To Director" />
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Chain of Custody" />
                                </FormGroup>
                                <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Parcel Entry" />
                                    <FormControlLabel control={<Checkbox value="MOD" />} label="Cancel Regi" />
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Parcel Registration " />
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Bulk Re-Assign" />

                                </FormGroup>
                                <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox value="REG" />} label="File Upload" />
                                    <FormControlLabel control={<Checkbox value="MOD" />} label="SOC Visit" />
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Internal Transfer(HP)" />
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Old Cases Entry" />
                                </FormGroup>
                            </div>
                        </CardContent>
                    </Card>
                    <Card sx={{ boxShadow: 4 }} className='mt-3' >
                        <Heading title="Reports" />
                        <CardContent>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Registration" />
                                    <FormControlLabel control={<Checkbox value="MOD" />} label="BLOCK CHAIN REPORT" />
                                </FormGroup>
                                <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox value="REG" />} label="Search" />
                                    <FormControlLabel control={<Checkbox value="MOD" />} label="Sign Report" />
                                </FormGroup>
                                <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel control={<Checkbox value="REG" />} label="MIS" />
                                </FormGroup>
                            </div>
                        </CardContent>
                    </Card>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '3px', columnGap: '3px' }}>
                    <Button onClick={handleBack} color="primary">
                        Back
                    </Button>
                    <Button variant="contained" onClick={handleSubmit}>Save</Button>
                    <Button variant="contained" color='error'>Close</Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};

export default UserRolesModal;
