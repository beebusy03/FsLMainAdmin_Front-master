import React, { useEffect, useState } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const SectionMultiSelect = ({ setSelectedSections, selectedSections }) => {
    const [sections, setSections] = useState([]);
    const apiPrefix = process.env.REACT_APP_API_PREFIX;

    useEffect(() => {
        const apiUrl = `${apiPrefix}/alluser/allddl/getallsection`;

        axios.get(apiUrl)
            .then(response => {
                const formattedSections = response.data.map(section => ({
                    label: section?.sectionName || '',
                    value: section?.sectionId || ''
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

export default SectionMultiSelect;
