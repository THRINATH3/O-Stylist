import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className="container libre">
        <hr />
        <div className="row">
          <div className="col-md-4 mb-5">
            <h5 className="mb-2">Contact Us</h5>
            <p>Email: thrinathpothineni@gmail.com</p>
            <p>Phone: +919347001342</p>
            <p>Nethaji Road, Madhuranagar, Vijayawada-11, Krishna dist., Andhra Pradesh, India</p>
          </div>
          <div className="col-md-4 mb-5">
            <h5 className="mb-2">Follow Us</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className='links'><BsLinkedin className='linked_in mx-1' /></Link> <Link to="#" className='links'><BsGithub className='git_hub'/></Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-5">
            <h5 className="mb-2">Site Links</h5>
            <ul className="list-unstyled">
              <li><Link to="" className='links'>Home</Link></li>
              <li><Link to="about" className='links'>About Us</Link></li>
              <li><Link to="#" className='links'>Privacy Policy</Link></li>
              <li><Link to="#" className='links'>Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 O-Stylist. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
