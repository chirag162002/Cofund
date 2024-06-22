import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function CompanyList() {


  const host = "http://localhost:5000";
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(`${host}/api/Company/fetchallcompanies`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched companies:", data); // Log fetched data
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);


  // const navigate =  useNavigate();
  // const navigateToCompanyDetails = () => {
  //   navigate("/company/:id", { state: { company: companies } });
  // };

  return (
    <>
        <div className="main-container mt-20 mb-10 ">
            <h1 className=' text-center text-4xl font-bold ' >Startup <span className='text-red-600 ' >List</span></h1>
            <h2 className='text-center my-4 mx-2 text-gray-800 md:text-lg text-sm ' >Invest in leading InDemand projects with Cofunds, fueling <span className='text-red-600 font-semibold'>&nbsp;Innovation growth</span></h2>
            <div className="list flex justify-around lg:m-20 m-5 flex-wrap gap-9 ">
              {
                companies.map((company, index) =>(
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
                  <img className="w-full" src={`${host}/${company.image}`} alt="Company Image"/>
                  <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{company.company_name}</div>
                      <p className="text-gray-700 text-base">{company.company_sdesc}</p>
                  </div>
                  <div className="px-6 pt-2 pb-2 flex justify-between mb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Technology</span>
                      <Link to= {`/company/${company._id}`} ><button  className=' bg-red-500 py-1 px-2 text-sm drop-shadow-md text-white rounded-md ' >Explore</button></Link>
                  </div>
                </div>
                ))
              }
                 
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dbe9fead" fill-opacity="1" d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,80C840,75,960,85,1080,101.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>         */}

            <div className="button flex justify-center">
            <button className=" border border-red-500 hover:bg-red-600  hover:text-white font-bold py-2 px-4 rounded-full drop-shadow-xl ">
                Find More 
            </button>
            </div>
        </div>
    </>
  )
}

export default CompanyList