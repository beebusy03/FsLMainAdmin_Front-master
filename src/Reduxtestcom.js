import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        mobile: '',
    });

    const validateForm = () => {
        let isValid = true;

        // Validate name
        if (!formData.name.trim()) {
            setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
            isValid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }

        // Validate mobile number
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(formData.mobile)) {
            setErrors((prevErrors) => ({ ...prevErrors, mobile: 'Invalid mobile number' }));
            isValid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, mobile: '' }));
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, handle submission logic here
            console.log('Form submitted:', formData);
        } else {
            // Form is not valid, do not proceed with submission
            console.log('Form not submitted due to validation errors');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        // Clear the error message when the user starts typing
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                />
                <span className="text-danger">{errors.name}</span>
            </div>
            <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                    Mobile Number:
                </label>
                <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="form-control"
                />
                <span className="text-danger">{errors.mobile}</span>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default MyForm;
