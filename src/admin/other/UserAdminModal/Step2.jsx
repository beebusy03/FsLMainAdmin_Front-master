import { Card, CardContent, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Heading from "../../../common/Heading";


function Step2(props) {
    const { handleCheckboxChange } = props;


    return (
        <div style={{ display: 'flex', flexDirection: 'column', width:'800px' }}>
            <Card sx={{ boxShadow: 4, }} className='mt-3' >
                <Heading title="User Role" />
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',  }}>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="REG" onChange={handleCheckboxChange} />} label="Registration" />
                            <FormControlLabel control={<Checkbox value="MOD" onChange={handleCheckboxChange} />} label="Modify" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="ERPE" onChange={handleCheckboxChange} />} label="Report Entry" />
                            <FormControlLabel control={<Checkbox value="FUMT" onChange={handleCheckboxChange} />} label="Further Material" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="REGN" onChange={handleCheckboxChange} />} label="Registration (CCTNS)" />
                            <FormControlLabel control={<Checkbox value="EXAM" onChange={handleCheckboxChange} />} label="Exam Report" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="EXA" onChange={handleCheckboxChange} />} label="Exam/Allotment" />
                            <FormControlLabel control={<Checkbox value="APPR" onChange={handleCheckboxChange} />} label="Approval" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="REP" onChange={handleCheckboxChange} />} label="Reports" />
                            <FormControlLabel control={<Checkbox value="DES" onChange={handleCheckboxChange} />} label="Despatch" />
                        </FormGroup>
                    </div>
                </CardContent>
            </Card>
            <Card sx={{ boxShadow: 4 }} className='mt-3' >
                <Heading title="Additional Roles" />
                <CardContent>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="TRF" onChange={handleCheckboxChange} />} label="Section Transfer" />
                            <FormControlLabel control={<Checkbox value="PRC" onChange={handleCheckboxChange} />} label="Parcel Entry" />
                            <FormControlLabel control={<Checkbox value="BLKA" onChange={handleCheckboxChange} />} label=" Chain Of Custodfy" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="SOC" onChange={handleCheckboxChange} />} label="Soc Visti" />
                            <FormControlLabel control={<Checkbox value="AS1" onChange={handleCheckboxChange} />} label="Assign To Director" />
                            <FormControlLabel control={<Checkbox value="OLDC" onChange={handleCheckboxChange} />} label="Od Case Entrity" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="FIL" onChange={handleCheckboxChange} />} label="File Upload" />
                            <FormControlLabel control={<Checkbox value="VWRP" onChange={handleCheckboxChange} />} label="View Report" />
                            <FormControlLabel control={<Checkbox value="DEL" onChange={handleCheckboxChange} />} label="Cancel Registration" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="PEHP" onChange={handleCheckboxChange} />} label="Parcel Registration" />
                            <FormControlLabel control={<Checkbox value="IOTS" onChange={handleCheckboxChange} />} label="Internal Trasfer" />
                            <FormControlLabel control={<Checkbox value="COCU" onChange={handleCheckboxChange} />} label="Bulk Reassign" />
                        </FormGroup>
                    </div>
                </CardContent>
            </Card>
            <Card sx={{ boxShadow: 4 }} className='mt-3'>
                <Heading title="Reports" />
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="SCH" onChange={handleCheckboxChange} />} label="Seacrh" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="MIS" onChange={handleCheckboxChange} />} label="Mis" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="SPR" onChange={handleCheckboxChange} />} label="Sign Report" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="RPT" onChange={handleCheckboxChange} />} label="Reprot Registration" />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel control={<Checkbox value="RPBL" onChange={handleCheckboxChange} />} label="Block Chain Report" />
                        </FormGroup>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}


export default Step2;