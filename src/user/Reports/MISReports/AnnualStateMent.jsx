import React, { useState } from 'react'
import "../../../css/iconanimation.css"
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material';

import { faChevronCircleLeft, faFileExcel, faFilePdf, faPrint, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '../../../common/Heading';
import { Card, Container } from 'react-bootstrap';
import { CardContent } from '@mui/material';
const AnnualStateMent = () => {
    const columns = [
        "Sr No",
        "Month",
        "No of Cases Pending on 1st of the Month",
        "Cases received during the month ",
        "Total Cases",
        "Case",
        "Exhibits ",
        "No of Cases Pending cases at the end of the Month ",
        "Remarks ",
    ];

    const data = [
        // ["1", "12343", "2342", "FIR789", "Police Station A"],
        // ["2", "12343", "2342", "FIR789", "Police Station A"],
        // ["3", "12343", "2342", "FIR789", "Police Station A"],
    ];
    const options = {
        filterType: 'checkbox',
        selectableRows: 'multiple',
        responsive: 'standard',
        rowsPerPage: 10,
        pagination: true,
    };
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    return (
        <Container>
      <Card className='m-3 shadow'>
        <Heading title="DISTRICT SECTION WISE REPORTS" />
        <CardContent className='mb-2'>
        <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        
             
                        <div className='d-flex justify-content-center'>
                            <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} >Excel &nbsp;<FontAwesomeIcon icon={faFileExcel} className={isHovered ? 'faSearchHovered' : ''} /></Button>
                            <Button variant="contained" style={{ margin: '0 8px' }} onMouseEnter={() => setIsHovered1(true)}
onMouseLeave={() => setIsHovered1(false)} >PDF  &nbsp; <FontAwesomeIcon icon={faFilePdf}className={isHovered1 ? 'faSearchHovered' : ''}/></Button>
                           
                        </div>
                    </div>
                   
                    
                    <Card className='m-3 shadow'>  
                <Heading title="ANNUAL CASE STATEMENT OF YEAR : ( 2022 )" />
             
                <div className='col '>
                        <MUIDataTable
                            // title={"Employee List"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </div>

             
            </Card>
       
        </CardContent>
        </Card>
        </Container>
    )
}



export default AnnualStateMent