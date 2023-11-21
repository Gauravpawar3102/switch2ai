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

  const HowItWorks = () => {
    const HIWCards = ({ sno, heading, description }) => {
      return (
        <div className='container  flex flex-col gap-2 w-full '>
          <div className='number text-4xl font-semibold'>{sno}</div>
          <div className='heading text-lg font-bold text-gray-500  '>
            {heading}{' '}
          </div>
          <div className='description w-2/3'>{description}</div>
        </div>
      );
    };
    return (
      <div className='container  w-4/5'>
        <div className='top-container flex flex-col gap-2'>
          <div className='heading-text font-bold text-xl'>How it works ?</div>
          <div className='sub-heading-text text-sm mb-6'>
            Get started with 3 easy steps{' '}
          </div>
        </div>
        <div className='bottom-container flex justify-center gap-16 w-full'>
          <HIWCards
            sno={1}
            heading={'Paste the job description'}
            description={
              " Copy the job description you're interested in applying for and paste it into the text field on Switch"
            }
          />
          <HIWCards
            sno={2}
            heading={'Upload or Enter deatils'}
            description={
              '  Upload your existing resume or enter your resume details manually'
            }
          />
          <HIWCards
            sno={3}
            heading={'Get your tailored resume'}
            description={
              '  Download the customized resume based on the job description you pasted and start applying for jobs!'
            }
          />
        </div>
      </div>
    );
  };

  const BenifitsSection = () => {
    return (
      <div className='container w-4/5'>
        <div className='top-container'>
          <div className='heading text-2xl font-semibold '>
            Discover the benifits of switch
          </div>
          <div className='description text-sm'>
            Unleash the power of Switch and experience the benefits for yourself
          </div>
        </div>
        <div className='benifits-animation-section grid grid-cols-5 grid-rows-3  h-[400px] gap-4 mb-4  p-8'>
          <div className='col-start-1 col-end-4 row-start-1 row-end-3 bg-gray-50 flex flex-col justify-end p-4'>
            <div className='text-container '>
              <div className='heading text-xl font-semibold'>
                Enhanced visibility
              </div>{' '}
              <div className='description'>
                Stand out from the competition and capture the attention of
                employers.
              </div>
            </div>
          </div>
          <div className='col-start-4 col-end-6  row-start-1 row-end-2 bg-slate-100 flex justify-center items-center -ml-30'>
            <div className='text-container text-xl font-semibold text-center '>
              AI-Powered Technology
            </div>
          </div>
          <div className='col-start-1 col-end-4 row-start-3 row-end-3 bg-slate-100  p-4 flex flex-col justify-end '>
            <div className='text-container '>
              <div className='heading text-xl font-semibold'>
                Professional Networking
              </div>
              <div className='description'>
                Generate compelling networking messages to connect with
                recruiters.
              </div>
            </div>
          </div>
          <div className='col-start-4 col-end-6  row-start-2 row-end-3 bg-slate-100 flex justify-center items-center -ml-30'>
            <div className='text-container text-xl font-semibold text-center '>
              Optimized Applications{' '}
            </div>
          </div>
          <div className='col-start-4 col-end-6  row-start-3 row-end-4 bg-slate-100 flex justify-center items-center -ml-30'>
            <div className='text-container text-xl font-semibold text-center '>
              Time-Saving
            </div>{' '}
          </div>
        </div>
      </div>
    );
  };

  const ToolsSection = () => {
    const toolsSectionData = [
      {
        imageLeft: true,
        heading: 'heading1',
        subHeading: 'subHeading1',
        bulletPoints: [
          { point1: 'point1' },
          { point2: 'point2' },
          { point3: 'point3' },
        ],
        ctaText: 'Get Early access',
      },
      {
        imageLeft: false,

        heading: 'heading1',
        subHeading: 'subHeading1',
        bulletPoints: [
          { point1: 'point1' },
          { point2: 'point2' },
          { point3: 'point3' },
        ],
        ctaText: 'Get Early access',
      },
      {
        imageLeft: true,

        heading: 'heading1',
        subHeading: 'subHeading1',
        bulletPoints: [
          { point1: 'point1' },
          { point2: 'point2' },
          { point3: 'point3' },
        ],
        ctaText: 'Get Early access',
      },
      {
        imageLeft: false,

        heading: 'heading1',
        subHeading: 'subHeading1',
        bulletPoints: [
          { point1: 'point1' },
          { point2: 'point2' },
          { point3: 'point3' },
        ],
        ctaText: 'Get Early access',
      },
      {
        imageLeft: true,

        heading: 'heading1',
        subHeading: 'subHeading1',
        bulletPoints: [
          { point1: 'point1' },
          { point2: 'point2' },
          { point3: 'point3' },
        ],
        ctaText: 'Get Early access',
      },
      {
        imageLeft: false,

        heading: 'heading1',
        subHeading: 'subHeading1',
        bulletPoints: [
          { point1: 'point1' },
          { point2: 'point2' },
          { point3: 'point3' },
        ],
        ctaText: 'Get Early access',
      },
    ];
    const ToolDetailsComponent = () => {
      return (
        <div className='container'>
          <div className='left-container'></div>
          <div className='right-container'>
            <div className='header-container'>
              <div className='heading'></div>
              <div className='sub-heading'></div>
            </div>
            <div className='points-container'>
              <div className='points'></div>
              <div className='points'></div>
              <div className='points'></div>
            </div>
            <div className='cta-container'>
              <div className='cta-text'></div>
              <div className='icon'></div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className='section-container'>
        <div className='header-container'></div>
      </div>
    );
  };
  return (
    <div className='landing-page-container flex flex-col items-center w-screen gap-10'>
      <LandingPageNavbar />
      <HeroSection />
      <HowItWorks />
      <BenifitsSection />
    </div>
  );
}

export default LandingPage;
