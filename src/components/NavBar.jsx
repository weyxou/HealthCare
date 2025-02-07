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
      <img src={assets.logo} alt="Logo" />
      <ul className="navbar-links">
        <NavLink to="/" onClick={() => handleSetActive('home')}>
          <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>Home</li>
          {activeLink === 'home' && <hr />}
        </NavLink>
        <NavLink to="/all-doctors" onClick={() => handleSetActive('all-doctors')}>
          <li className={`nav-item ${activeLink === 'all-doctors' ? 'active' : ''}`}>All Doctors</li>
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
      </div>
    </div>
  );
};
