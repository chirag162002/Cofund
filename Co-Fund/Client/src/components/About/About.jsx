import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className="main">
        <div className="image w-full h-36 sm:h-96 bg-slate-200">
          <img className='w-full h-full bg-cover object-contain' src="https://img.freepik.com/premium-vector/office-worker-illustration-creative-people-presentation-setting-start-up-discussion-business-team-working-together-big-desk-using-laptops-flat-illustration_181182-3209.jpg" alt="" />
        </div>
        <div className="about mx-8 sm:mx-48 my-8 sm:my-16">
          <h2 className='text-4xl font-bold'>About Us</h2>
          <p className='text-base mt-5'>
          Our Platform “Cofund” provide a space where creators can showcase their projects and solicit financial support from a diverse community of backers who believe in their vision.
By leveraging the power of collective funding, crowdfunding democratizes access to capital, allowing individuals from all backgrounds to pursue their entrepreneurial aspirations.
Cofund facilitates the listing of startups on its website by offering a user-friendly and intuitive interface that guides entrepreneurs through the process step by step.
          </p>
          <p className='text-base mt-5'>
          In today's fast-changing business world, startups and small to medium-sized businesses (SMBs) often struggle to get enough money to start or grow. This problem is known as the "funding gap".
Traditional ways of getting money, like loans from banks, are tough to get and don't always work for these smaller businesses. Because of this, many great business ideas never get off the ground, holding back progress and stopping new and creative ideas from coming to life.
Our website aims to help entrepreneurs by creating a platform where startups can use crowdfunding to get the money they need for their projects. Ultimately, our goal is to empower startups to turn their innovative ideas into reality, driving economic progress and fostering a culture of entrepreneurship.
          </p>
        </div>
        <div className="team mx-8 sm:mx-16 sm:my-20">
          <p className='text-3xl font-semibold text-center text-blue-600 mb-10 sm:mb-20'>Meet our team</p>
          <div className='flex flex-wrap justify-center gap-5 sm:gap-10'>
            <div className="team-member">
              <div className="img1 w-64 h-64 bg-slate-600 rounded-full">
                <img className='rounded-full' src="https://media.licdn.com/dms/image/D4D03AQH82EgQROysXQ/profile-displayphoto-shrink_400_400/0/1699621361968?e=1721865600&v=beta&t=EjCLohX_Ucbdyyj1nhnjtHg9auMgQE5pezyk6jreNv0" alt="" />
              </div>
              <div className="text-center my-5">
              <p >Shiv</p>
                <Link to="https://www.linkedin.com/in/shivshah19/" className="inline-block text-center">linkedin</Link>
              </div>
            </div>
            <div className="team-member">
              <div className="img1 w-64 h-64 bg-slate-600 rounded-full">
                <img className='rounded-full' src="https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg" alt="" />
              </div>
              <div className="text-center my-5">
              <p>Shreya Khanna</p>
                <Link to="https://www.linkedin.com/in/shreya-khanna-b3214b253/" className="inline-block text-center">linkedin</Link>
              </div>
            </div>
            <div className="team-member">
              <div className="img1 w-64 h-64 bg-slate-600 rounded-full">
                <img className='rounded-full' src="https://media.licdn.com/dms/image/D4D35AQGbCansZx68vw/profile-framedphoto-shrink_400_400/0/1705990450995?e=1717106400&v=beta&t=2fa0tpRiOTEVrvtRufmfugkagyECoylAC3mL3FRVm1g" alt="" />
              </div>
              <div className="text-center my-5">
              <p>Chirag Maheshwari</p>
                <Link to="https://www.linkedin.com/in/chirag-maheshwari-4b3116236/" className="inline-block text-center">linkedin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
