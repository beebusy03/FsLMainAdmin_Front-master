import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Login() {
    const Navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userid: '',
        password: '',
    });

    const [alertInfo, setAlertInfo] = useState({
        type: 'error', // Set the default type to 'error'
        message: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLoginClick = async (e) => {
        e.preventDefault();
        const loginData = {
            userid: credentials.userid,
            password: credentials.password,
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_PREFIX}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();

                setAlertInfo({
                    type: 'success',
                    message: data.msg,
                });

                if (data.username === 'admin') {
                    Navigate('/Dashboard');
                } else {
                    Navigate('/User');
                }
                localStorage.setItem('token', data.jwtToken);
                localStorage.setItem('username', data.username);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userrole', data.authorties[0].authority);

                setTimeout(() => {
                    setAlertInfo({
                        type: '',
                        message: '',
                    });
                }, 10000);

            } else {
                const errorData = await response.json();
                setAlertInfo({
                    type: 'error',
                    message: errorData.msg,
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
            setAlertInfo({
                type: 'error',
                message: 'An error occurred during login.',
            });
        }
    };

    const handleNavigate = () => {
        Navigate('/NewUserReg');
    };

    return (
        <>
            <Header />
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: 8,
                    }}
                >
                    <Typography component="h1" variant="h5">
                        LOGIN
                    </Typography>
                    {alertInfo.message && (
                        <Alert severity={alertInfo.type} sx={{ mt: 2 }}>
                            {alertInfo.message}
                        </Alert>
                    )}
                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="userid"
                            value={credentials.userid}
                            onChange={handleInputChange}
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="off"
                            name="password"
                            value={credentials.password}
                            onChange={handleInputChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleLoginClick}
                        >
                            Login
                        </Button>
                        <div className="container">
                            <div className="row">
                                <Button variant="contained" onClick={handleNavigate}>
                                    <FaUserCircle />&nbsp;New User
                                </Button>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default Login;
