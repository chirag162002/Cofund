import React, { useState, useEffect } from 'react';
import icon from '../../assets/cofund.png';
import './Nav.css';
import { Link, NavLink,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
// import Contact from '../Contact/Contact';

const Nav = () => {

  const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")) || null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const host = "http://localhost:3000";

  const fetchUserProfile = async () => {
    if (!token) {
      navigate("/");
      toast.warn("Please login first to access profile");
      return;
    }

    const axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      const response = await axios.get(`${host}/api/v1/dashboard`, axiosConfig);
      setData(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [token]);




  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const boxShadow = {
    WebkitBoxShadow: '0px 10px 10px -10px rgba(0,0,0,0.2)',
    MozBoxShadow: '0px 10px 10px -10px rgba(0,0,0,0.2)',
    boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.2)',
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isSticky ? 'stickyNavbar' : ''} style={boxShadow}>
      <div className="flex justify-between bg-white-50 px-10 py-4  font-semibold">
        <div className="icon-image my-0 flex justify-center ">
          <Link to="/">
            <img src={icon} alt="" width={130} />
          </Link>
        </div>
        <div className="link-list gap-20 text-lg lg:flex hidden">
          <NavLink to="/" className={({isActive}) =>` ${isActive? "text-indigo-600": "text-gray-500"}`} >Home</NavLink>
          <NavLink to="/startups" className={({isActive}) =>` ${isActive? "text-indigo-600": "text-gray-500"}`}>Find Startups</NavLink>
          <NavLink to="/about" className={({isActive}) =>` ${isActive? "text-indigo-600": "text-gray-500"}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) =>` ${isActive? "text-indigo-600": "text-gray-500"}`}>Contact</NavLink>
        </div>
        <button
          className="lg:hidden focus:outline-none "
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className={`w-6 h-6 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-blue-50 transition-transform transform"
            style={{
              transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            }}
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileMenuOpen(false)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4 p-4">
            <NavLink to="/" className={({isActive}) =>` ${isActive? "text-indigo-600": "text-gray-500"}`} >Home</NavLink>
            <NavLink to="/services" className={({isActive}) =>` ${isActive? "text-indigo-600": "text-gray-500"}`}>Find Startups</NavLink>
            <NavLink to="/about" className={({isActive}) =>` ${isActive? "text-indigo-600": "text-gray-500"}`}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) =>` ${isActive? "text-indigo-600": "text-gray-500"}`}>Contact</NavLink>
           
            {data ? (
              <NavLink to= "/dashboard" ><button className="text-white bg-indigo-500 border-0 py-1.5 w-full focus:outline-none hover:bg-indigo-600 rounded text-lg text-center">{data.name}</button></NavLink>
            
            ) :(
              <NavLink to= "/register" ><button className="text-white bg-indigo-500 border-0 py-1.5 w-full focus:outline-none hover:bg-indigo-600 rounded text-lg text-center">Get Starded</button></NavLink>
            
            )}
  
            </div>
          </div>
        )}
        <div className="nav-button lg:flex hidden gap-3">
         
          {data ? (
              <NavLink to= "/dashboard" ><button className="text-indigo-500 text-lg text-center">{data.name}</button></NavLink>
            
            ) :(
              <NavLink to= "/register" ><button className="text-white bg-indigo-500 border-0 p-1.5 w-full focus:outline-none hover:bg-indigo-600 rounded text-lg text-center">Get Starded</button></NavLink>
            
            )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
