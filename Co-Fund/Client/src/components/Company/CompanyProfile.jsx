import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// import { Sprinto } from "../../assets/Sprinto1.png";

function CompanyProfile() {

  // const location = useLocation();
  // // const { company } = location.state; // Assuming you're passing company details through location state
  // console.log(location.state);

  const {id} = useParams();
  const host = "http://localhost:5000";
  const [companies, setCompanies] = useState([]);
  
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
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchCompanies();
  }, []);

  // const [image1, setimage1] = useState("")
  // const [image2, setimage2] = useState("")
  // if(companies.company_name == "Sprinto"){
  //   setimage1(Sprinto)
  // }
  // else if(companies.company_name == "Urban Company"){
  //   setimage1("https://tse3.mm.bing.net/th?id=OIP.3xVzk2NJq5J0hSgTJ6fIeQHaD2&pid=Api&P=0&h=180")
  // }

  // console.log("Current companies state:", companies);

  return (
    <>
      <div className="main p-4">
        <div className="top-section bg-gray-100 p-4 sm:py-12 sm:px-12 md:px-16  flex flex-col sm:flex-row">
          <div className="company-image w-full sm:w-2/3 h-60 sm:h-96  rounded-md">
            <img className='w-full h-full cover rounded-md' src={`${host}/${companies.image}`} alt="hello" />
          </div>

          <div className="detail pl-4 sm:pl-12 p-4 pb-0 sm:p-5 flex flex-col justify-center">
            <div className='text-xl sm:text-3xl font-semibold text-blue-800 mb-2' >{companies.company_name}</div>
            <div className='flex'>
            <svg version="1.0" className="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            width="18px" height="20px" viewBox="0 0 64 64">
            <path fill="#231F20" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
                C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
                C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
            </svg>            
            <span className='mx-2'>Delhi, India</span></div>
            <div className='mt-3 mb-1'>We're raising funds of amount</div>
            <div><span className='text-2xl sm:text-3xl pr-1 sm:pr-2 font-bold'>{companies.company_fund_req}</span><span>Rs</span> </div>
            <div className='text-sm'>in exchange of {companies.total_share} shares</div>
            <Link to={`/checkout/${companies._id}`}><button className='bg-orange-500 text-white py-2 px-12 font-bold sm:px-20 my-3 sm:my-10 rounded-md text-base sm:text-lg'>Invest</button> </Link>
          </div>
        </div>
        

        <div className='flex justify-center items-center bg-gray-50' >
            <div className="description bg-gray-50 sm:w-3/4 mt-4 sm:mt-8 sm:mx-24 p-4 sm:p-6 md:p-10">
              <h2 className='text-xl sm:text-2xl font-semibold'>Company Description </h2>
              <div className='my-3 text-sm sm:text-base sm:my-5 text-wrap text-justify'>{companies.company_Ldesc}</div>
              <div className="graph mt-6 sm:mt-10 ">
                <img className='w-full h-60 my-3 sm:h-80 bg-slate-500 rounded-md' src="https://www.slideteam.net/media/catalog/product/cache/960x720/b/u/business_growth_graph_of_year_over_year_slide01.jpg" alt="Graph" />
            <div className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ducimus inventore nisi architecto voluptate pariatur? Incidunt, odio exercitationem ullam nisi consequatur optio porro velit accusantium id est beatae expedita cum blanditiis nostrum vitae, natus alias cupiditate eligendi suscipit aliquid neque facilis voluptatum ea! Expedita nisi exercitationem cum, architecto ipsa quibusdam maxime ullam nesciunt magnam, quae quia iusto explicabo. Similique inventore obcaecati quasi eius quisquam iure hic non repellendus, labore vitae ea perferendis cupiditate eum voluptas. Modi excepturi architecto cumque quam.</div>
                <img className='w-full h-60 my-3 sm:h-80 bg-slate-500 rounded-md' src="https://i.pinimg.com/originals/31/da/28/31da285c923b8708e27850c37aa69cb3.jpg" alt="Graph" />
              </div>
              <div className="name mt-6 sm:mt-10">Founders: {companies.company_founders_name}</div>
              <div className='mt-4 sm:mt-6'>{companies.company_Email}</div>
            </div>
          </div>
        </div>
    </>
  );
}

export default CompanyProfile;
