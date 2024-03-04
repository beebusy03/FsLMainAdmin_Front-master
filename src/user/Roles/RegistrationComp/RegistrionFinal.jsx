import React from 'react';
import { Container, Card, CardContent, Button } from '@mui/material';
import Heading from '../../../common/Heading';
import { useNavigate } from 'react-router-dom';

const RegistrionFinal = ({ location }) => {
    // const { Reposnereg } = location.state;

    const Navigate = useNavigate();

    const handlenext = () => {
        Navigate('/User/ParcelEntry2');
    };

    return (
        <Container>
            <Card className='m-3 shadow' style={{ height: '400px' }}>
                <Heading title="SFSLTK4r587673624" />
                <CardContent>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className='row'>
                            <div className='col mt-3'>
                                <div className='d-flex justify-content-center'>
                                    <Button variant='contained' style={{ margin: '0 8px' }}>Appendix-28</Button>
                                    <Button variant='contained' style={{ margin: '0 8px' }}>Download</Button>
                                    <Button variant='contained' style={{ margin: '0 8px' }} onClick={handlenext}>Parcel Entry</Button>
                                    <Button variant='contained' style={{ margin: '0 8px' }}>Next Registration</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <p style={{ color: 'red' }}>Mail Sent SuccessFully </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
};

export default RegistrionFinal;
