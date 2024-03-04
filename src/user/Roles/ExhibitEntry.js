import React, { useState } from 'react'

import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material';
import Heading from '../../common/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ExhibitEntryDialog from './InnerComps/ExhibitEntryDialog';
const ExhibitEntry = () => {
    const columns = [
        "Sr#",
        "File No",
        "Fir No",
        "Recived Form",
        "Refrence Form",
        "Parcels",
        "Case No",
        "Report Date",
        "Remarks"
    ];

    const data = [
        ["1", "FCR123", "FSL456", "FIR789", "Police Station A", "John Doe", "2022-01-01", "2022-01-02", "Select"],
        ["2", "FCR124", "FSL457", "FIR790", "Police Station B", "Jane Doe", "2022-01-03", "2022-01-04", "Select"],
        ["3", "FCR125", "FSL458", "FIR791", "Police Station C", "Bob Smith", "2022-01-05", "2022-01-06", "Select"]
    ];
    const options = {
        filterType: false,
        selectableRows: false,
        responsive: 'standard',
        rowsPerPage: 10,
        pagination: true,
    };
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showtbl2, setshowtbl2] = useState(false);
    const handleOpenDetails = () => {
      setshowtbl2(true);
    };
  
    const handleModel = () => {
      setIsModalOpen(true);
    };
    return (
        <div className='container'>
            <div className='card'>
                <Heading title="EXHIBIT ENTRY	" />
                <div className='card-body'>
                    <div className='row m-2'>
                        <div className='col'>
                            <label className='form-label'>Despatch From Date</label>
                            <input type='date' className='form-control' />
                        </div>
                        <div className='col'>
                            <label className='form-label'>Despatch Till Date</label>
                            <input type='date' className='form-control' />
                        </div>
                        <div className='col mt-2'>
                            <label className='form-label'></label>
                            <p>Or</p>
                        </div>
                        <div className='col'>
                            <label className='form-label'>Case No</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='col mt-4'>
                            <Button variant="contained" mt={3} color='success' onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)} onClick={handleModel}>Search &nbsp; <FontAwesomeIcon icon={faSearch} className={isHovered ? 'faSearchHovered' : ''}/></Button>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <MUIDataTable
                            // title={"Employee List"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </div>

                </div>
            </div>
            <ExhibitEntryDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
        </div>
    )
}

export default ExhibitEntry
