// import React from 'react';
import { assets } from '../assets/assets';
import './Header.css';


const Header = () => {
  return (
    <div className='header'>
      {/* Левая часть */}
      <div className='h-left'>
        <p className='p1'>
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="Group Profiles" />
          <p className='p2'>
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free
          </p>
        </div>
        <button>
          <a href="#speciality" className='Flex items-center gap bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow Icon" />
          </a>
        </button>
      </div>
      {/* Правая часть */}
      <div className='h-right'>
        <img src={assets.header_img} alt="Header Image" />
      </div>
    </div>
  );
};

export default Header;
