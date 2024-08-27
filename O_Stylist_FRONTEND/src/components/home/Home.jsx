import React from 'react'
import './Home.css'
import logo from '../homePictures/O.mp4'
function Home() {

  return (
    <div className='libre m-3'>
      
      <h4 className='text-center'>The O-Stylist<p className='text-secondary text-center'>Your One-Stop Shop for Occasion Style</p></h4>
      <br />
      <div className="homevideopara">
      <video src={logo} className='mb-3' autoPlay muted playsInline loop >
          Your browser does not support the video tag.
      </video>
      <div className="para">
      <p className='fs-5'><span className='text-danger'>Fashion Frustration?😩😖</span>We Got You Boo!😉</p>
      <p>Struggling to find the perfect outfit? We've got you covered! <span className='Wname'>O-Stylist</span> helps you discover clothes that flatter your body type, match your style, and suit any occasion. Ditch the guesswork and embrace confidence with personalized outfit recommendations. Take our style quiz and unlock your fashion potential today!</p>
      </div>
      </div>
      <div className='text-center text-info'>
        <h1 className='text-center mt-5 irish'>Effortless Style<p className='text-center'>Outfit Ideas Based on You</p></h1>
      </div>
    </div>
  )
}

export default Home