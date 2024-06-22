// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { Link} from 'react-router-dom';
// import axios from 'axios';

// function UserProfile() {
//   const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")) || null);
//   const [data, setData] = useState(null);
//   const navigate = useNavigate();
//   const host = "http://localhost:3000";

//   const fetchUserProfile = async () => {
//     if (!token) {
//       navigate("/login");
//       toast.warn("Please login first to access profile");
//       return;
//     }

//     const axiosConfig = {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     };

//     try {
//       const response = await axios.get(`${host}/api/v1/dashboard`, axiosConfig);
//       setData(response.data);
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const [name, setName] = useState('');
//   const [investors, setInvestors] = useState([]);
//   const [error, setError] = useState(null);

//   // Function to handle searching for investors
//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`/investors/${name}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setInvestors(data);
//       console.log(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setInvestors([]);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
//     handleSearch();
//   }, [token]);


  

//   return (
//     <div className="my-8 mx-24">
//       {data ? (
//         <div className="bg-gray-800 text-white py-8 px-12 sm:px-16 rounded-lg shadow-xl">
//           <Link to={"/logout"}>
//           <button className='w-8'><img src="https://icon-library.com/images/logout-icon-png/logout-icon-png-8.jpg" alt="" /></button>
//           </Link>
//           <div className="flex flex-wrap">
//             <div className="w-full sm:w-1/3 pr-4 border-r border-gray-700">
//               <div className="w-64 h-64 mx-auto flex justify-center items-center">
//                 <img
//                   src="https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg"
//                   alt="Profile Picture"
//                   className="rounded-full"
//                 />
//               </div>
//               <div className="mt-5 text-center">
//                 <h2 className="text-xl font-semibold">{ data.name }</h2>
//                 <p className="text-sm">Male</p>
//               </div>
//               <div className="flex gap-5 mt-5">
//                 <button className="bg-green-600 text-sm text-white p-2 rounded-lg">Total investment : <span>5,00,000</span></button>
//                 <button className="bg-green-600 text-sm text-white p-2 rounded-lg">Total shares : <span>1,000</span></button>
//               </div>
//             </div>
//             <div className="w-full sm:w-2/3 pl-4">
              
                
//               <div>
//               <h1 className='text-2xl text-center mb-5 p-2 border-b-2 border-green-600'>Company list</h1>

//               <div className=" flex flex-wrap text-black">
//                 <div className="w-60 mx-auto">
//                   <div className="flex flex-col mb-6 p-4 rounded-lg border border-gray-300 bg-white shadow-md">
//                     <div className="w-full h-36 overflow-hidden rounded-lg">
//                       <img className="object-cover w-full h-full" src="http://localhost:5000/uploads\1715634208950-Urban-Company-2048x1365.jpg" alt="Company" />
//                     </div>
//                     <div className="mt-4">
//                       <h5 className="text-xl font-semibold">Urban Company</h5>
//                       <div className="mt-2">
//                         <p className="text-sm">Total Investment: <span>5,000</span></p>
//                         <p className="text-sm">Total Shares: <span>5,000</span></p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-60 mx-auto">
//                   <div className="flex flex-col mb-6 p-4 rounded-lg border border-gray-300 bg-white shadow-md">
//                     <div className="w-full h-36 overflow-hidden rounded-lg">
//                       <img className="object-cover w-full h-full" src="http://localhost:5000/uploads\1715634208950-Urban-Company-2048x1365.jpg" alt="Company" />
//                     </div>
//                     <div className="mt-4">
//                       <h5 className="text-xl font-semibold">Urban Company</h5>
//                       <div className="mt-2">
//                         <p className="text-sm">Total Investment: <span>5,000</span></p>
//                         <p className="text-sm">Total Shares: <span>5,000</span></p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

                
//                 <div className="w-60 mx-auto">
//                   <div className="flex flex-col mb-6 p-4 rounded-lg border border-gray-300 bg-white shadow-md">
//                     <div className="w-full h-36 overflow-hidden rounded-lg">
//                       <img className="object-cover w-full h-full" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="Company" />
//                     </div>
//                     <div className="mt-4">
//                       <h5 className="text-xl font-semibold">Nike</h5>
//                       <div className="mt-2">
//                         <p className="text-sm">Total Investment: <span>5,000</span></p>
//                         <p className="text-sm">Total Shares: <span>5,000</span></p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default UserProfile;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function UserProfile() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('auth')) || null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const host = 'http://localhost:3000';

  const fetchUserProfile = async () => {
    if (!token) {
      navigate('/login');
      toast.warn('Please login first to access profile');
      return;
    }

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(`${host}/api/v1/dashboard`, axiosConfig);
      setUser(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [investors, setInvestors] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      if (!user) return;
      const response = await fetch(`${host}/api/investors/${user.name}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setInvestors(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setInvestors([]);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [token]);

  useEffect(() => {
    handleSearch();
  }, [user]);

  const totalAmount = investors.reduce((total, investor) => total + investor.shareAmount, 0);
  const totalShare = investors.reduce((total, investor) => total + investor.shareAmount / investor.shareValue, 0);
  
  return (
    <div className="my-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      {user ? (
        <div className="bg-gray-800 text-white py-8 px-4 sm:px-8 rounded-lg shadow-xl">
          <button className="w-8 sm:w-10 h-10 sm:h-10" onClick={() => navigate('/logout')}>
            <img src="https://icon-library.com/images/logout-icon-png/logout-icon-png-8.jpg" alt="" />
          </button>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 pr-4 sm:border-r border-gray-700">
              <div className="w-48 sm:w-64 h-48 sm:h-64 mx-auto flex justify-center items-center">
                <img
                  src="https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg"
                  alt="Profile Picture"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-sm">Male</p>
              </div>
              <div className="flex gap-5 mt-5 justify-center">
                <button className="bg-green-600 text-sm text-white p-2 rounded-lg">
                  Total investment: <span>{totalAmount}</span>
                </button>
                <button className="bg-green-600 text-sm text-white p-2 rounded-lg">
                  Total shares: <span>{totalShare}</span>
                </button>
              </div>
            </div>
            <div className="w-full sm:w-1/2 pl-4">
              <div>
                <h1 className="text-2xl text-center mb-5 p-2 border-b-2 border-green-600">
                  Company list
                </h1>

                <div className="flex flex-wrap justify-start text-black">
                  {/* Mapping through investors data */}
                  {investors.map((investor) => (
                    <div key={investor.id} className="w-60 mx-2 my-4 sm:mx-auto">
                      <div className="flex flex-col mb-6 p-4 rounded-lg border border-gray-300 bg-white shadow-md">
                        <div className="w-full h-36 overflow-hidden rounded-lg">
                          <img
                            className="object-cover w-full h-full"
                            src={investor.imageUrl}
                            alt="Company"
                          />
                        </div>
                        <div className="mt-4">
                          <h5 className="text-xl font-semibold">{investor.companyName}</h5>
                          <div className="mt-2">
                            <p className="text-sm font-semibold">
                              Total Investment: <span className='ml-7'>{investor.shareAmount}</span>
                            </p>
                            <p className="text-sm font-semibold">
                              Total Shares: <span className='ml-14'>{investor.shareAmount/investor.shareValue}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
