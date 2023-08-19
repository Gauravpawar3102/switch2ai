import React from 'react';
import LandingPageNavbar from '../components/LandingPageNavbar';
import { FiChevronRight } from 'react-icons/fi';

function LandingPage() {
  const HeroSection = () => {
    return (
      <div className='heroContainer  w-4/5  flex items-center '>
        <div className='left-container w-3/5 flex flex-col gap-5 mt-[-100px]'>
          <div className='heading-container font-semibold text-[40px] leading-[128%]  '>
            AI-Powered Tools for a Smarter Job Search.
          </div>
          <div className='description-container text-[16px] leading-[128%] mb-5 '>
            Stand Out to Recruiters with Optimized Resumes, Cover Letters &
            Networking Messages. Get Hired Faster with Switch
          </div>
          <div className='cta-container flex gap-4 '>
            <button className='btn-primary-large '>Get Started</button>
            <div className='secondary-cta flex items-center px-4 py-2   '>
              <div className='text-cta text-md hover:underline hover:text-blue-400 cursor-pointer font-medium tracking-wider'>
                learn more
              </div>
              <div className='svg-container pt-1 '>
                <FiChevronRight />
              </div>
            </div>
          </div>
        </div>
        <div className='right-container w-2/5 bg-gray-50 '>
          <div className='box-container w-full '>
            <div className='heading-container bg-[#5F82FD] text-white text-xl py-2 text-center '>
              Create Job Description-Based Resume
            </div>
            <div className='input-container flex gap-4 flex-col p-4'>
              <div className='email-input-container'>
                <label
                  for='default-input'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email address
                </label>
                <input
                  type='text'
                  id='default-input'
                  placeholder='enter you email...'
                  className='bg-white border border-gray-300 outline-[#5F82FD] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />{' '}
              </div>
              <div className='description-input-container'>
                <label
                  for='default-input'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Paste job description
                </label>
                <textarea
                  type='message'
                  id='large-input'
                  rows='5'
                  className='block p-2.5 w-full text-sm outline-[#5F82FD] text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='paste yor job description here...'
                />
              </div>
              <div className='buttons-contianer flex justify-between mb-5 gap-2'>
                <button className='uploadresume px-4 py-2 bg-[#5F82FD] hover:bg-[#5f79da]  w-1/2 tracking-wider text-white'>
                  upload resume
                </button>
                <button className='entermanually px-4 py-2 w-1/2 text-[#5F82FD] tracking-wider  hover:bg-[#5F82FD] hover:text-white '>
                  enter manually
                </button>
              </div>
              <button className='downloadbtn uppercase  hover:bg-[#FF8956] tracking-wide text-black w-full py-2 border-[2px] border-[#5F82FD] hover:border-2 hover:border-[#FF8956] hover:font-semibold'>
                Download JOB-optimized resume
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className='landing-page-container flex flex-col items-center w-screen gap-10'>
      <LandingPageNavbar />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
