import React, { useEffect, useState } from 'react'
import "../../styles/Logout.css";
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        const logoutTimeout = setTimeout(() => {
            localStorage.removeItem("auth");
            navigate("/");
        }, countdown * 1000);

        return () => {
            clearInterval(countdownInterval);
            clearTimeout(logoutTimeout);
        };
    }, [countdown, navigate]);

    return (
        <div className='logout-main'>
            <h1>Logout Successful!</h1>
            <p>You will be redirected to the landing page in {countdown} {countdown === 1 ? 'second' : 'seconds'}...</p>
        </div>
    );
};

export default Logout;
