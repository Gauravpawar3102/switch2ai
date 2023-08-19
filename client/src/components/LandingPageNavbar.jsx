import React from 'react';
import switchLogo from '../assets/switch-logo.svg';
function LandingPageNavbar() {
  return (
    <div className='navbar-container flex justify-between h-16  items-center w-4/5 p-2  '>
      <div className='left-container '>
        <div className='logo-container flex items-center'>
          <div className='logo'>
            <img src={switchLogo} alt='switch logo' />
          </div>
          <div className='logo-text font-medium text-2xl tracking-wider '>
            Switch
          </div>
        </div>
      </div>
      <div className='middle-container '>
        <ul className='navlinks-container flex  gap-2'>
          <li className='home-link' onclick>
            Home
          </li>
          <li className='home-link'>Product</li>
          <li className='home-link'>Pricing</li>
          <li className='home-link'>About Us</li>
          <li className='home-link'>FAQ</li>
        </ul>
      </div>
      <div className='right-container '>
        <div className='buttons-container  flex'>
          <button className='get-started-btn capitalize px-4  bg-[#FF8956] font-semibold   text-black py-1'>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPageNavbar;
