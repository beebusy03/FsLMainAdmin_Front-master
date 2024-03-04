import React, { useEffect, useState } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const UserMultiSelect = ({ setSelectedSections, selectedSections }) => {
    const [sections, setSections] = useState([]);
    const apiPrefix = process.env.REACT_APP_API_PREFIX;

    useEffect(() => {
        const apiUrl = `${apiPrefix}/user/preexamination/getalluser`;
        const token = localStorage.getItem('token'); // Replace 'your_token_here' with your actual token

        axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                const formattedSections = response.data.map(user => ({
                    label: user?.userName || '',
                    value: user?.userid || ''
                }));
                setSections(formattedSections);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSelectChange = (selectedOptions) => {
        const selectedValues = selectedOptions?.map(option => option?.value) || [];
        setSelectedSections(selectedValues);
    };

    return (
        <Container>
            <Select
                options={sections}
                onChange={handleSelectChange}
                multi
                placeholder="Select sections"
                values={selectedSections}
            />
        </Container>
    );
};

export default UserMultiSelect;
