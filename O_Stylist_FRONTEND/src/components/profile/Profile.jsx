import React from 'react';
import { useContext } from 'react';
import { usercontext } from '../../context/userLoginContext';
import { FaUserLarge } from "react-icons/fa6";
import './Profile.css';
import userlogo from '../homePictures/userlogo.png'
import { maleOutfits, femaleOutfits, occasionsWithEmojis,maleAccessories,femaleAccessories } from '../outfits/Outfit';

function Profile() {
  const { curruser } = useContext(usercontext);
  return (
    <div className='libre p-5'>
      <div className="row">
        <div className="col-12 col-md-5 text-center mt-4">
         <img src={userlogo} alt="" style={{width:'60%',height:'360px',borderRadius:'100%'}} />
        </div>
        <div className="col-12 col-md-7">
          <div className='user-container'>
            <p className='fs-6'>
              <strong className='fs-4'>Username: </strong>
              {curruser.username}
            </p>
            <p className='fs-6'>
              <strong className='fs-4'>Personal Info:</strong>
            </p>
            <p className='fs-6'>
              <strong className='fs-4'>Weight: </strong>
              {curruser.weight.charAt(0).toUpperCase() + curruser.weight.slice(1).toLowerCase()}
            </p>
            <p className='fs-6'>
              <strong className='fs-4'>Height: </strong>
              {curruser.height.charAt(0).toUpperCase() + curruser.height.slice(1).toLowerCase()}
            </p>
            <p className='fs-6'>
              <strong className='fs-4'>Age: </strong>
              {curruser.age}
            </p>
            <p className='fs-6'>
              <strong className='fs-4'>Gender: </strong>
              {curruser.gender.charAt(0).toUpperCase() + curruser.gender.slice(1).toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
