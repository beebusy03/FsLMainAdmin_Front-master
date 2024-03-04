import React, { useEffect,useState } from "react";
import { Button} from "@mui/material";
import Heading from "../../common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBDataTable } from "mdbreact";
import { CardContent } from "@mui/material";
import { postApiData } from "../../redux/slice/postSlice";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { faRocket, faUserCheck, faSync } from "@fortawesome/free-solid-svg-icons";
import { Card, Container } from "react-bootstrap";
import { actions as sectionActions } from '../../redux/slice/sectionSlice';

const ParcelEntry = () => {
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const dispatch = useDispatch();
    const apiUrl = `${apiPrefix}/alluser/saveParcel`;

    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [formData, setFormData] = useState({
        parcelno: "",
        examdetails: "",
        parceldesc: "",
        noofseal: "",
        identificationofparcel: "",
        sampleseal: "",
    });
    const [fileNo, setFileNo] = useState('');
    const [showtbl2, setshowtbl2] = useState(false);
    const [sectionList, setSectionList] = useState([]);
    const [rows, setRows] = useState([]);
    const [selectedSectionNumber, setSelectedSectionNumber] = useState(0);

    const { removeList } = sectionActions;

    let file_red = useSelector(state => state.sectionList[0] ? state.sectionList[0]['fileNo'] : null);
    let section_red = useSelector(state => state.sectionList[0] ? state.sectionList[0]['list'] : null);
    let no_of_parcel_red = useSelector(state => state.sectionList[0] ? state.sectionList[0]['no_of_parcel'] : null);

    useEffect(() => {
        setFileNo(file_red);
        if(Array.isArray(section_red) && section_red.length > 0){
            setSectionList(section_red);
        }
        else{
            let list = [];
            list.push(section_red);
            setSectionList(list);
        }
        if(Array.isArray(no_of_parcel_red) && no_of_parcel_red.length > 0){
            setFormData({
                ...formData,
                parcelno: no_of_parcel_red,
            });
        }else{
            let list = []
            list.push(no_of_parcel_red)
            setFormData({
                ...formData,
                parcelno: list,
            });
        }
    } ,[] );
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const payload = rows.map(({ action, ...rest }) => rest);
        dispatch(postApiData({ apiUrl, postData: payload }));
        dispatch(removeList({ delete_ind: 0}));
    };
    const handleDelete = (e) => {
        setRows(prevRows => prevRows.filter((row, index) => index !== Number(e.target.id)));
    }

    const handleAdd = () => {
        const newRow = {
            filefulldisp: sectionList[selectedSectionNumber],
            totalparcal: formData.parcelno[selectedSectionNumber],
            examinationDetails: formData.examdetails,
            descriptionOfparcel: formData.parceldesc,
            noOfseal: formData.noofseal,
            identificationOfparcel: formData.identificationofparcel,
            sampleSeal: formData.sampleseal,
            action: <Button variant="contained" id={rows.length} onClick={handleDelete}>Delete</Button>,
          };
      
          setRows(prevRows => [...prevRows, newRow]);
          setFormData({
          ...formData,
          noofseal: "",
          identificationofparcel: "",
          sampleseal: "",});
    }

    const handleOpenDetails = (e) => {
        setshowtbl2(true);
        let temp = Number(e.target.value)
        setSelectedSectionNumber(temp);
    };
    const data = {
        columns: [
            {
                label: "Registration No",
                field: "filefulldisp",
                sort: "asc",
                width: 270,
            },
            {
                label: "No. of Parcel",
                field: "totalparcal",
                sort: "asc",
                width: 150,
            },
            {
                label: "Exam Details ",
                field: "examinationDetails",
                sort: "asc",
                width: 270,
            },
            {
                label: "Parcel Description",
                field: "descriptionOfparcel",
                sort: "asc",
                width: 270,
            },
            {
                label: "No. of Seal ",
                field: "noOfseal",
                sort: "asc",
                width: 270,
            },
            {
                label: "Identification",
                field: "identificationOfparcel",
                sort: "asc",
                width: 270,
            },
            {
                label: "Sample Seal",
                field: "sampleSeal",
                sort: "asc",
                width: 270,
            },
            {
                label: "Delete",
                field: "action",
                sort: "asc",
                width: 270,
            },
        ],
        rows: rows.map((row, index) => ({
            ...row,
            action: <Button variant="contained" id={index} onClick={handleDelete}>Delete</Button>,
        })),
    };
    return (

        <Container>
            <Card className='m-3 shadow'>
                <Heading title="Parcel Entry" />
                <CardContent>
                    <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="row m-2">
                            <div className="col-3">
                                <label className="label">File Number</label>
                            </div>
                            <div className="col-3">
                                <input className="form-control" type="text" disabled={true} value={fileNo}/>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col">
                                <label className="label">Section</label>
                            </div>
                            <div className="col-3">
                                <select className="form-select" name="" onChange={handleOpenDetails}>
                                    <option value="" selected disabled>
                                        Select Option
                                    </option>
                                    {sectionList && sectionList.map((item, index) => (
                                        <option key={index} value={index}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col">
                                <label className="label">No of Parcel</label>
                            </div>
                            <div className="col-3">
                                <input className="form-control" name="parcelno" type="Number" value={formData.parcelno[selectedSectionNumber]} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-3">
                                <label className="label">Examination Details</label>
                            </div>
                            <div className="col-3">
                                <input className="form-control" type="text" name="examdetails" value={formData.examdetails} onChange={handleInputChange}/>
                            </div>
                            <div className="col-3">
                                <label className="label">Description of Parcel</label>
                            </div>
                            <div className="col-3">
                                <input className="form-control" type="text" name="parceldesc" value={formData.parceldesc} onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>

                    {showtbl2 && (
                        <React.Fragment>
                            <CardContent>
                                <div className="row" style={{ rowGap: "7px" }}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>No. of Seal </label>
                                                <div className="col">
                                                    <input type="text" class="form-control" name="noofseal" value={formData.noofseal} onChange={handleInputChange}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Identification of Parcel</label>
                                                <div className="col">
                                                    <input type="text" class="form-control" name="identificationofparcel" value={formData.identificationofparcel} onChange={handleInputChange}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Sample Seal</label>
                                                <input type="text" class="form-control" name="sampleseal" value={formData.sampleseal} onChange={handleInputChange}/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="wrap-div" style={{width:"100%",height:"100%",top:"13px",position:"relative", display: "flex", justifyContent: "center", alignItems: "center"}
                                            }>
                                                <div className="text-center">
                                                    <Button
                                                        variant="contained"
                                                        className="btn btn-danger"
                                                        color="success"
                                                        style={{ margin: "0 8px" }}
                                                        onMouseEnter={() => setIsHovered5(true)}
                                                        onMouseLeave={() => setIsHovered5(false)}
                                                        onClick={handleAdd}
                                                    >
                                                        Add &nbsp;
                                                        <FontAwesomeIcon
                                                            icon={faUserCheck}
                                                            className={isHovered5 ? "fatimeshover" : ""}
                                                        />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <div className="col mt-3">
                                <MDBDataTable striped bordered hover data={data} />
                            </div>
                            <div className="col mt-3">
                                <div className="d-flex justify-content-center">
                                    <Button
                                        variant="contained"
                                        style={{ margin: "0 8px" }}
                                        onMouseEnter={() => setIsHovered4(true)}
                                        onMouseLeave={() => setIsHovered4(false)}
                                        onClick={handleSubmit}
                                        mt={1}
                                    >
                                        Save Parcel &nbsp;{" "}
                                        <FontAwesomeIcon
                                            icon={faRocket}
                                            className={isHovered4 ? "faSearchHovered" : ""}
                                        />
                                    </Button>
                                    <Button
                                        variant="contained"
                                        style={{ margin: "0 8px" }}
                                        color="error"
                                        onMouseEnter={() => setIsHovered3(true)}
                                        onMouseLeave={() => setIsHovered3(false)}
                                        mt={1}
                                    >
                                        Reset &nbsp;{" "}
                                        <FontAwesomeIcon
                                            icon={faSync}
                                            className={isHovered3 ? "faResetHovered" : ""}
                                        />
                                    </Button>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </CardContent>
            </Card>
        </Container>
    );
};

export default ParcelEntry;
