import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const CompanyCard = () => {
    const { _id } = useParams();
    console.log(_id); // Check if _id is correctly extracted

    const host = "http://localhost:5000";
    const [company, setCompany] = useState(null);

    useEffect(() => {
        if (_id) {
            const fetchCompany = async () => {
                try {
                    const response = await fetch(`${host}/api/Company/fetchcompany/${_id}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    console.log("Fetched company:", data); // Log fetched data
                    setCompany(data);
                } catch (error) {
                    console.error("Error fetching company:", error);
                }
            };

            fetchCompany();
        }
    }, [_id]); // Dependency on _id to re-fetch when ID changes

    return (
        <div>
            {company ? (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            Company Name: {company.company_name}
                        </h5>
                        <p className="card-text">Company Desc: {company.company_desc}</p>
                        <p className="card-text">Company GST: {company.company_gst}</p>
                        <p className="card-text">
                            Fund Required: {company.company_fund_req}
                        </p>
                        {/* Optional: Link to some other page */}
                        <Link to={`/otherpage`}>
                            <button type="button" className="btn btn-primary">
                                Go to other page
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CompanyCard;
