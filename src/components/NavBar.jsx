import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import './NavBar.css'; 

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const navigate = useNavigate(); 

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState); // Меняем состояние для показа/скрытия меню
  };

  return (
    <div className="navbar">
      <img onClick={()=>navigate('/')} src={assets.logo} alt="Logo" />
      <ul className="navbar-links">
        <NavLink to="/" onClick={() => handleSetActive('home')}>
          <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>Home</li>
          {activeLink === 'home' && <hr />}
        </NavLink>
        <NavLink to="/doctors" onClick={() => handleSetActive('all-doctors')}>
          <li className={`nav-item ${activeLink === 'doctors' ? 'active' : ''}`}>Doctors</li>
          {activeLink === 'all-doctors' && <hr />}
        </NavLink>
        <NavLink to="/about" onClick={() => handleSetActive('about')}>
          <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}>About</li>
          {activeLink === 'about' && <hr />}
        </NavLink>
        <NavLink to="/contact" onClick={() => handleSetActive('contact')}>
          <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>Contact</li>
          {activeLink === 'contact' && <hr />}
        </NavLink>
      </ul>

      <div className="flex-container">
        {
          token ? (
            <div className="profile-group">
              <img
                className="profile-pic"
                src={assets.profile_pic}
                alt="Profile Picture"
                onClick={toggleMenu} // При клике на картинку профиля, будет переключаться меню
              />
              <img
                className="dropdown-icon"
                src={assets.dropdown_icon}
                alt="Dropdown Icon"
                onClick={toggleMenu} // Тот же обработчик клика для значка
              />

              <div className={`menu ${showMenu ? 'show' : ''}`}>
                <div className="menu1">
                  <p onClick={()=>navigate('my-profile')} className='menu-p'>My profile</p>
                  <p onClick={()=>navigate('my-appointments')} className='menu-p'>My appointment</p>
                  <p onClick={()=>setToken(false)} className='menu-p'>Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate('/login')}>Create account</button>
          )
        }
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/* {-----------Mobile Menu--------------} */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={()=>setShowMenu(false)} to='/'><p  className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p  className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/about'><p  className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p  className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
