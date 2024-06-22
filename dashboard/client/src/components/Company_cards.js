import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Company_cards = () => {
    const host = 'http://localhost:5000';
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch(`${host}/api/Company/fetchallcompanies`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched companies:', data); // Log fetched data
                setCompanies(data);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };

        fetchCompanies();
    }, []); // Empty dependency array to ensure fetch runs only once

    return (
        <div>
            {companies.length > 0 ? (
                companies.map((company, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            {/* Display company image if available */}
                            {company.image && (
                                <img
                                    src={`${host}/${company.image}`} // Assuming 'company.image' contains the image path
                                    alt={`Company ${company.company_name}`}
                                    style={{ maxWidth: '40%', marginBottom: '10px' }}
                                />
                            )}
                            <h5 className="card-title">Company Name: {company.company_name}</h5>
                            <p className="card-text">Company Founders Name: {company.company_founders_name}</p>
                            <p className="card-text">Company Short Description: {company.company_sdesc}</p>
                            <p className="card-text">Company Long Description: {company.company_Ldesc}</p>
                            <p className="card-text">Company Objective: {company.objective}</p>
                            <p className="card-text">Company Email: {company.company_Email}</p>
                            <p className="card-text">Fund Required: {company.company_fund_req}</p>
                            <p className="card-text">Total Share: {company.total_share}</p>
                            <Link to="/">
                                <button type="button" className="btn btn-primary">
                                    Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>No companies found</p>
            )}
        </div>
    );
};

export default Company_cards;
