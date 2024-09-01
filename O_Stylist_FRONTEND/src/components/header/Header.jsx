import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { usercontext } from '../../context/userLoginContext';
import './Header.css';
import logo from '../homePictures/logo.png';
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaPersonHalfDress } from "react-icons/fa6";

function Header() {
  const { logout, loginStatus, curruser } = useContext(usercontext);

  return (
    <div className="header volkhov mb-5">
      <div className="container pt-3">
        <div className="row nav align-items-center">
          <div className="col-lg-6 col-sm-12 text-center logo">
            <img src={logo} width={200} alt="logo" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="d-flex justify-content-between align-items-center">
              <Link to="" className='link-dec'><IoHome className='fs-4 text-dark mb-2'/> Home</Link>
              <Link to="about" className='link-dec'><FcAbout className='fs-4 text-warning mb-1'/> About</Link>
              <Link to="occasion" className='link-dec'><FaPersonHalfDress className='fs-2 text-dark mb-2g' />My Outfit</Link>
              {loginStatus ? (
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle user"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"  
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {curruser.username.charAt(0).toUpperCase()}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><Link className="dropdown-item" to="/profile"><FaUserCircle /> Profile</Link></li>
                    <li><Link className="dropdown-item" to="/settings"><IoSettings /> Settings</Link></li>
                    <li><button className="dropdown-item" onClick={() => logout()}><CiLogout /> Logout</button></li>
                  </ul>
                </div>
              ) : (
                <button className='btn loginShadow'><Link to="login" className='link-dec text-dark'><FiLogIn /> Login</Link></button>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
