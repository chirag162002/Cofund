import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import CompanyList from './components/Company/CompanyList.jsx'
import Login from './components/login-register/Login.jsx'
import Register from './components/login-register/Register.jsx'
import Company from './components/Company/CompanyProfile.jsx'
import About from './components/About/About.jsx'
import UserProfile from './components/UserProfile/UserProfile.jsx'
import Logout from './components/login-register/Logout.jsx'
import CheckOutPage from './components/Checkout/CheckOutPage.jsx'
import Contact from './components/Contact/Contact.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/startups",
        element: <CompanyList />
      },
      
      {
        path: "/company/:id",
        element: <Company />
      },
      {
        path: "/dashboard",
        element: <UserProfile />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/checkout/:id",
        element: <CheckOutPage />
      },
      {
        path: "/contact",
        element: <Contact />
      }
      
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>,
)
