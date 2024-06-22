import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you have react-toastify for notifications

function CheckOutPage() {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")) || null);
    const [user, setUser] = useState(null);
    const [value, setValue] = useState(0);
    const { id } = useParams();
    const host = "http://localhost:5000";
    const [companies, setCompanies] = useState({});
    const [formData, setFormData] = useState({
        companyName: "",
        shareValue: 0,
        shareAmount: 0,
        username: "",
        imageUrl: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const fetchUserProfile = async () => {
        if (!token) {
            navigate("/login");
            toast.warn("Please login first to access profile");
            return;
        }

        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        try {
            const response = await axios.get(`http://localhost:3000/api/v1/dashboard`, axiosConfig);
            setUser(response.data);
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, [token]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch(`${host}/api/Company/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Fetched companies:", data);
                setCompanies(data);

                if (user) {
                    setFormData({
                        companyName: data.company_name,
                        shareValue: data.company_fund_req / data.total_share,
                        shareAmount: (data.company_fund_req / data.total_share) * value,
                        username: user.name,
                        imageUrl: `${host}/${data.image}`,
                    });
                }
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };

        if (user) {
            fetchCompanies();
        }
    }, [id, user, value]);

    const perSharePrice = companies.company_fund_req ? companies.company_fund_req / companies.total_share : 0;

    const handleValue = (e) => {
        const enteredValue = e.target.value;
        const regex = /^[0-9]*$/;

        if (regex.test(enteredValue)) {
            setValue(parseInt(enteredValue));
            setFormData({
                ...formData,
                shareAmount: perSharePrice * parseInt(enteredValue),
                shareValue: parseInt(enteredValue),
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            console.log("Form Data:", formData); // Log formData before sending the request
            const response = await axios.post(
                "http://localhost:3000/api/investors",
                formData
            );
            console.log("Investor added:", response.data);
            alert("Investment is done");
            updatecompany();
            // Clear form fields after successful submission
            setFormData({
                companyName: "",
                shareValue: 0,
                shareAmount: 0,
                username: "",
                imageUrl: "",
            });
        } catch (err) {
            console.error("Error adding investor:", err.message);
            setError("Failed to add investment. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const [companyFundReq, setCompanyFundReq] = useState(companies.company_fund_req);
    const [totalShare, setTotalShare] = useState(companies.total_share);

    const updatecompany = async () => {

      setCompanyFundReq(companies.company_fund_req-shareAmount);
      setTotalShare(companies.total_share - value );
        try {
            const updateData = {
                company_fund_req: companyFundReq,
                total_share: totalShare
            };

            const response = await fetch(`http://localhost:5173/api/Company/${companyId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateData)
            });

            const updatedCompany = await response.json();
            console.log('Updated company:', updatedCompany);
            alert('Company updated successfully!');
        } catch (error) {
            console.error('Error updating company:', error);
            alert('Failed to update company. Please try again.');
        }
    };

    return (
        <>
            <div className="font-sans bg-gray-50 p-6 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Checkout</h2>
                    <div className="grid lg:grid-cols-3 gap-8 mt-12">
                        <div className="lg:col-span-2">
                            <div>
                                <div className="image w-100">
                                    <img className='w-full' src={`${host}/${companies.image}`} alt="company image" />
                                </div>
                            </div>
                        </div>
                        <form className="lg:border-l lg:pl-8" onSubmit={handleSubmit}>
                            <h3 className="text-xl flex flex-wrap font-bold text-gray-900 sm:mb-10 mb-3">company <span className="ml-auto font-bold">{companies.company_name}</span></h3>
                            <input type="hidden" name="companyName" value={formData.companyName} required />
                            <ul className="text-gray-900 mt-5 space-y-4">
                                <li className="flex flex-wrap gap-4 text-sm">Total Shares <input type="number" name="shareValue" value={value} onChange={handleValue} required className="ml-auto font-bold border-b-2 border-black w-20" /></li>
                                <li className="flex flex-wrap gap-4 text-sm">Per Share Price <span className="ml-auto font-bold">{perSharePrice}</span></li>
                                <li className="flex flex-wrap gap-4 text-base font-bold border-t pt-4">Total Investment <span className="ml-auto">{perSharePrice * value}</span></li>
                            </ul>
                            <div className="flex flex-wrap gap-4 mt-12">
                                {loading && <p>Loading...</p>}
                                {error && <p style={{ color: "red" }}>{error}</p>}
                                <button type="submit" disabled={loading} className="px-6 py-3 w-full text-sm bg-blue-600 font-bold tracking-wider text-white rounded-md hover:bg-blue-700" >Buy</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckOutPage;
