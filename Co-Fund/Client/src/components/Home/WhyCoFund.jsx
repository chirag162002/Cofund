import React from 'react';
import zeroPercentImg from '../../assets/zero-percent.png'
import securePatment from '../../assets/secure-payment1.png'
// import VerifiedCompany from '../assets/4400262.jpg'
import Approved from '../../assets/Approved(1).png'
import Interactive from '../../assets/interactive.png'
import CompanyInsight from '../../assets/company-insight.png'
import Support from '../../assets/5114855.jpg'


function WhyCoFund() {
  const cardsData = [
    {
      imgSrc: zeroPercentImg,
      description: "Online Platform Fee",
    },
    {
      imgSrc: securePatment,
      description: "Secure Payment Gateway",
    },
    {
      imgSrc: Approved,
      description: "Verified Business Profiles",
    },
    {
      imgSrc: Interactive,
      description: "Interactive Dashboard",
    },
    {
      imgSrc: CompanyInsight,
      description: "Brief company insights for Investment",
    },
    {
      imgSrc: Support,
      description: "24/7 Support for Your Crowdfunding Journey",
    },
  ];

  return (
    <div className="whyCofund py-8 sm:py-12 bg-gray-100">
      <h2 className='text-center font-bold text-xl mb-6 sm:text-3xl sm:mb-10'>Why CoFund ?</h2>

      <div className='flex justify-center flex-wrap gap-3 sm:gap-5 xl:mx-64'>
        {cardsData.map((card, index) => (
          <div key={index} className="card md:w-52 md:h-auto w-36 h-auto bg-white rounded-xl py-5 px-3 mx-2">
            <img className='mb-4 w-28 sm:w-full' src={card.imgSrc} alt="" />
            <div className='md:text-base text-xs text-center font-bold'>{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyCoFund;











// import React from 'react'

// function WhyCoFund() {
//   return (
//     <>
//       <div className="whyCofund py-12 bg-gray-100">
//         <h2 className=' text-center font-bold text-3xl mb-10'>Why CoFund</h2>

//         <div className='flex justify-evenly flex-wrap gap-y-4 ' >

//           <div className="card w-52 bg-white rounded-xl  py-5 px-3">
//             <img className='w-44' src="https://img.freepik.com/free-vector/concept-credit-card-payment-landing-page_52683-24923.jpg?t=st=1712733042~exp=1712736642~hmac=aa6186fc5845ab9ac6aa87d620f71c2350bdb82a19296a0acaf64aa6b798b631&w=740" alt="" />
//             <div className=' text-sm '>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, et laboriosam 
//             </div>
//           </div>
//           <div className="card w-52 bg-white rounded-xl  py-5 px-3">
//             <img className='w-44' src="https://img.freepik.com/free-vector/concept-credit-card-payment-landing-page_52683-24923.jpg?t=st=1712733042~exp=1712736642~hmac=aa6186fc5845ab9ac6aa87d620f71c2350bdb82a19296a0acaf64aa6b798b631&w=740" alt="" />
//             <div className=' text-sm '>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, et laboriosam 
//             </div>
//           </div>
//           <div className="card w-52 bg-white rounded-xl  py-5 px-3">
//             <img className='w-44' src="https://img.freepik.com/free-vector/concept-credit-card-payment-landing-page_52683-24923.jpg?t=st=1712733042~exp=1712736642~hmac=aa6186fc5845ab9ac6aa87d620f71c2350bdb82a19296a0acaf64aa6b798b631&w=740" alt="" />
//             <div className=' text-sm '>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, et laboriosam 
//             </div>
//           </div>
//           <div className="card w-52 bg-white rounded-xl  py-5 px-3">
//             <img className='w-44' src="https://img.freepik.com/free-vector/concept-credit-card-payment-landing-page_52683-24923.jpg?t=st=1712733042~exp=1712736642~hmac=aa6186fc5845ab9ac6aa87d620f71c2350bdb82a19296a0acaf64aa6b798b631&w=740" alt="" />
//             <div className=' text-sm '>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, et laboriosam 
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </>
//   )
// }

// export default WhyCoFund