import React from 'react';
import './About.css';
import profileImage from '../homePictures/profile.jpeg'
import { FcAbout } from "react-icons/fc";
import aboutUs from '../homePictures/About Us.png';

function About() {
  return (
    <div className='libre m-3 '>
      <div className="row aboutUs mt-5">
        <div className="col-lg-6 slideInRight">
      <p>Welcome to <span className='Wname'>O-Stylist</span>! We're a dedicated team of fashion enthusiasts committed to making your special occasions even more memorable with the perfect outfit. Our mission is to take the hassle out of choosing the right attire by providing personalized style recommendations tailored to your unique attributes.</p>
      <p>At <span className='Wname'>O-Stylist</span>, we believe that everyone deserves to look and feel their best, no matter the occasion. Whether it's your birthday, a wedding, or a night out with friends, our platform offers style advice that takes into account your body type, skin tone, and personal preferences.</p>
      <p>Our team of fashion experts continuously curates the latest trends and timeless classics to ensure that you have access to a diverse range of outfit options. By leveraging advanced algorithms and a keen eye for style, we provide recommendations that are both fashionable and flattering.</p>
      <p>Join us on this journey to elevate your fashion game and never worry about what to wear again. With <span className='Wname'>O-Stylist</span>, you're just a few clicks away from discovering the perfect outfit for any occasion.</p>
      <p>Thank you for choosing <span className='Wname'>O-Stylist</span>. Let's get dressed and make every moment a stylish one!</p>
      </div>
      <div className="col-lg-6 text-center my-auto slideInLeft"><img  src={aboutUs} alt=""/></div>
      </div>
      <br />
      <div className="row mt-5 aboutMe ">
        <div className="col-lg-6 my-auto slideInLeft2">
          <p className='text-center'><strong>Developed by:</strong><br />Thrinath- Aspiring web developer with a passion for creating user-friendly and visually appealing websites.Front-End Developer with expertise in HTML, CSS, and JavaScript.</p>
      </div>
      <div className="col-lg-6 text-center my-auto mb-3 slideInRight2"><img  src={profileImage} alt=""/></div>
      </div>
    </div>
  );
}

export default About;
