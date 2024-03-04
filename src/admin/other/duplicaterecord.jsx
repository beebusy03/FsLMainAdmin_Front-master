import React, { useEffect, useState } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';

const MyComponent = () => {
  const [sections, setSections] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);

  useEffect(() => {
    // Fetch data dynamically
    axios.get('http://localhost:8082/alluser/allddl/getallsection')
      .then(response => {
        // Map over the response data and create an array of objects with text and value properties
        const formattedSections = response.data.map(section => ({
          label: section.sectionName, // Change text to label
          value: section.sectionId
        }));
        // Set the formatted sections to state
        setSections(formattedSections);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSelectChange = (values) => {
    // Update selected sections
    setSelectedSections(values);
  };

  const handleSubmit = () => {
    // Extract section IDs from selected sections
    const selectedSectionIds = selectedSections.map(section => section.value);
    // Log selected section IDs to console
    console.log('Selected section IDs:', selectedSectionIds);
    // You can send the selectedSectionIds array to your backend API
  };

  return (
    <Container>
      <Select
        options={sections}
        values={selectedSections} // Set selected sections
        onChange={handleSelectChange} // Handle select change
        multi // Enable multiple selection
        placeholder="Select sections" // Placeholder text
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default MyComponent;
