import React from 'react';
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
          <a href='#'>
            Book appointment <img src={assets.arrow_icon} alt="Arrow Icon" />
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
