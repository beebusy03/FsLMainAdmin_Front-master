import React, { useEffect, useState } from "react";
import Edituser from "../modalpopup/edituser";
import Role from "../modalpopup/role";
import Viewuser from "../modalpopup/viewuser";
import Heading from './../../common/Heading';
import { MDBDataTable } from "mdbreact";
import { callApi } from "../../common/CallApi";
import axios from "axios";
import { FormControlLabel, IconButton, Switch, Tooltip, Box } from "@mui/material";
import UserEditModal from "./UserEditModal";
import EditIcon from '@mui/icons-material/Edit';
import { Container } from "react-bootstrap";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import UserRolesModal from "./UserRolesModal";

const UserAdmin = () => {
    const [edituse, setedituse] = useState(false);
    const [role, setrole] = useState(false);
    const [view, setview] = useState(false);
    const apiPrefix = process.env.REACT_APP_API_PREFIX;
    const apigetData = `${apiPrefix}/alluser/getuserdetails`;
    const [formData, setFormData] = useState([]);
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [isModalRoles, setisModalRoles] = useState(false);

    const [srnoEdit, setsrnoEdit] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apigetData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        callApi(apigetData)
            .then((response) => {
                setFormData(response);
            });
    }, []);



    const handleEditUser = (serialnumber) => {
        setsrnoEdit(serialnumber)
        setIsModalEdit(true)

    }

    const handleSwitch = () => {

    }

    const handleAddRoles = (serialnumber) => {
        setsrnoEdit(serialnumber)
        setisModalRoles(true)


    }

    const data = {
        columns: [
            {
                label: 'Emp ID',
                field: 'empId',
                sort: 'asc',
                width: 150,
            },

            {
                label: 'State Code ',
                field: 'statecode',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'Office Code ',
                field: 'officecode',
                sort: 'asc',
                width: 270,
            },
            {
                label: 'Emp Name ',
                field: 'empName',
                sort: 'asc',
                width: 270,
            },
            {
                label: 'Phone NO ',
                field: 'phoneNo',
                sort: 'asc',
                width: 270,
            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc',
                width: 270,
            },


            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 270,
            },
        ],
        rows: formData.map(item => ({
            empId: item.empId,
            statecode: item.statecode,
            officecode: item.officecode,
            empName: item.empName,
            phoneNo: item.phoneNo,
            status: item.status,
            action: (
                <>
                    <Tooltip title="Edit">
                        <IconButton variant="primary" onClick={() => handleEditUser(item?.serialnumber)}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <FormControlLabel onClick={handleSwitch} control={<Switch />} />
                    <Tooltip title="Roles">
                        <IconButton onClick={() => handleAddRoles(item?.serialnumber)}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </Tooltip>
                </>
            ),

        })),
    };
    return (
        <Container>
            <Heading title="User Admin" />
            <Box boxShadow={8} p={3} borderRadius={0}  >
                <div className="row">
                    <Edituser
                        title="Edit User"
                        edituse={edituse}
                        setedituse={setedituse}
                    />
                    <Role title="User Role" role={role} setrole={setrole} />
                    <Viewuser title="User Detail" view={view} setview={setview} />
                </div>
                <div className="row">
                    <MDBDataTable striped bordered hover data={data} />
                </div>
                <UserEditModal isOpen={isModalEdit} onClose={() => setIsModalEdit(false)} srnoEdit={srnoEdit} />
                <UserRolesModal isOpen={isModalRoles} onClose={setisModalRoles} srnoEdit={srnoEdit} />
            </Box>
        </Container>

    );
};

export default UserAdmin;
