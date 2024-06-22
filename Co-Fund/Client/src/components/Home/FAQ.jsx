import React, { useState } from 'react';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    
    function click(index) {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <section className="bg-white">
            <div className=" px-6 py-12 sm:mx-36">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 lg:text-3xl">Frequently asked questions</h1>

                <div className="mt-8 space-y-8 lg:mt-12">
                    <div className="p-4 sm:p-6 bg-gray-100 rounded-lg ">
                        <button className="flex items-center justify-between w-full" onClick={() => click(0)}>
                            <h1 className={`font-semibold  text-sm sm:text-base ${activeIndex === 0? "text-blue-700" :"text-gray-700"}`}>How does your platform work?</h1>
                            <span className="text-gray-400 bg-gray-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={activeIndex ==0? "M18 12H6": "M12 6v6m0 0v6m0-6h6m-6 0H6"} />
                                </svg>
                            </span>
                        </button>

                        <p className={`mt-6 text-base font-semibold text-gray-500 ${activeIndex === 0 ? '' : 'hidden'}`}>
                        Our platform connects startups seeking capital with investors looking to invest in innovative fintech companies. Startups add their company or startup and then investors can browse and invest in companies they believe in.
                        </p>
                    </div>

                    <div className="p-4 sm:p-6 bg-gray-100 rounded-lg ">
                        <button className="flex items-center justify-between w-full" onClick={() => click(1)}>
                            <h1 className={`font-semibold  text-sm sm:text-base ${activeIndex === 1? "text-blue-700" :"text-gray-700"}`}>How do I start investing?</h1>
                            <span className="text-gray-400 bg-gray-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={activeIndex ==1? "M18 12H6": "M12 6v6m0 0v6m0-6h6m-6 0H6"} />
                                </svg>
                            </span>
                        </button>

                        <p className={`mt-6 text-base font-semibold text-gray-500 ${activeIndex === 1 ? '' : 'hidden'}`}>
                        Sign up for an account, complete the necessary verification process, browse available investment opportunities, and choose the startups you wish to invest in.


                        </p>
                    </div>

                    <div className="p-4 sm:p-6 bg-gray-100 rounded-lg ">
                        <button className="flex items-center justify-between w-full" onClick={() => click(2)}>
                            <h1 className={`font-semibold  text-sm sm:text-base ${activeIndex === 2? "text-blue-700" :"text-gray-700"}`}>How do I track my investments?</h1>
                            <span className="text-gray-400 bg-gray-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"  d={activeIndex ==2? "M18 12H6": "M12 6v6m0 0v6m0-6h6m-6 0H6"} />
                                </svg>
                            </span>
                        </button>

                        <p className={`mt-6 text-base font-semibold text-gray-500 ${activeIndex === 2 ? '' : 'hidden'}`}>
                        You can track your investments through your account dashboard, which provides updates on the performance of your portfolio.
                        </p>
                    </div>

                    <div className="p-4 sm:p-6 bg-gray-100 rounded-lg ">
                        <button className="flex items-center justify-between w-full" onClick={() => click(3)}>
                            <h1 className={`font-semibold  text-sm sm:text-base ${activeIndex === 3? "text-blue-700" :"text-gray-700"}`}>Why should I choose CoFund for crowdfunding?</h1>
                            <span className="text-gray-400 bg-gray-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={activeIndex ==3? "M18 12H6": "M12 6v6m0 0v6m0-6h6m-6 0H6"} />
                                </svg>
                            </span>
                        </button>

                        <p className={`mt-6 text-base font-semibold text-gray-500 ${activeIndex === 3 ? '' : 'hidden'}`}>
                        Innovative Focus: CoFund specializes in fintech startups, providing a platform tailored to innovative financial technology businesses. Our expertise in this sector helps match the right investors with the right startups.
                        <br></br> <br />Comprehensive Support: We offer end-to-end support, from the initial listing process to post-funding guidance, ensuring startups have the best chance for success and investors can make informed decisions.

                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FAQ;
