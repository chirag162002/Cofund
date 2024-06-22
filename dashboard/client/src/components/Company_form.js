import React, { useState } from 'react';

const Company_form = () => {
    const [formData, setFormData] = useState({
        company_name: '',
        company_founders_name: '',
        company_sdesc: '',
        company_Ldesc: '',
        objective: '',
        company_fund_req: '',
        total_share: '',
        company_Email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataWithImage = new FormData();
        formDataWithImage.append('company_name', formData.company_name);
        formDataWithImage.append('company_founders_name', formData.company_founders_name);
        formDataWithImage.append('company_sdesc', formData.company_sdesc);
        formDataWithImage.append('company_Ldesc', formData.company_Ldesc);
        formDataWithImage.append('objective', formData.objective);
        formDataWithImage.append('company_fund_req', formData.company_fund_req);
        formDataWithImage.append('total_share', formData.total_share);
        formDataWithImage.append('company_Email', formData.company_Email);
        formDataWithImage.append('image', formData.image);

        try {
            const response = await fetch('http://localhost:5000/api/Company/addcompany', {
                method: 'POST',
                body: formDataWithImage
            });

            if (response.ok) {
                console.log('Company data submitted successfully!');
                // Reset form after successful submission
                setFormData({
                    company_name: '',
                    company_founders_name: '',
                    company_sdesc: '',
                    company_Ldesc: '',
                    objective: '',
                    company_fund_req: '',
                    total_share: '',
                    image: null
                });
            } else {
                console.error('Failed to submit company data');
                // Handle error state or display error message to the user
            }
        } catch (error) {
            console.error('Error submitting company data:', error);
            // Handle network errors or other exceptions
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="company_name" className="form-label">Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company_name"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="company_founders_name" className="form-label">Founders Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company_founders_name"
                        name="company_founders_name"
                        value={formData.company_founders_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="company_sdesc" className="form-label">Company Short Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company_sdesc"
                        name="company_sdesc"
                        value={formData.company_sdesc}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="company_Ldesc" className="form-label">Company Long Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company_Ldesc"
                        name="company_Ldesc"
                        value={formData.company_Ldesc}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="objective" className="form-label">Company Objective</label>
                    <input
                        type="text"
                        className="form-control"
                        id="objective"
                        name="objective"
                        value={formData.objective}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="company_fund_req" className="form-label">Company Fund Request</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company_fund_req"
                        name="company_fund_req"
                        value={formData.company_fund_req}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="total_share" className="form-label">Total Share</label>
                    <input
                        type="text"
                        className="form-control"
                        id="total_share"
                        name="total_share"
                        value={formData.total_share}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="company_Email" className="form-label">Company Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="company_Email"
                        name="company_Email"
                        value={formData.company_Email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Upload Company Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Company_form;
