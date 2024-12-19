import React from 'react';
import './Home.css';
import logo from '../homePictures/O.mp4';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container libre">
      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <h1 className="fw-bold text-dark mb-3">Welcome to The O-Stylist</h1>
        <p className="lead text-muted text-center">Your One-Stop Shop for Occasion Style</p>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="text-danger fw-bold">Fashion Frustration? 😩😖</h2>
              <p className="fs-5 text-primary">We Got You Boo! 😉</p>
              <p className="fs-5 text-dark">
                Struggling to find the perfect outfit? We've got you covered! <span className="fw-bold">O-Stylist </span>
                helps you discover clothes that flatter your body type, match your style, and suit any occasion.
                Ditch the guesswork and embrace confidence with personalized outfit recommendations. Take our style
                quiz and unlock your fashion potential today!
              </p>
            </div>
            <div className="col-lg-6">
              <video src={logo} className="rounded" autoPlay muted playsInline loop >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-primary mb-4">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card p-4 shadow-sm h-100 bg-white rounded  box">
                <h5 className="text-primary mb-3">Personalized Style Quiz</h5>
                <p className="text-muted">
                  Answer a few questions about your preferences, body type, and favorite styles, and let us do the rest!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 shadow-sm h-100 bg-white rounded  box">
                <h5 className="text-success mb-3">Outfits for Every Occasion</h5>
                <p className="text-muted">
                  From casual hangouts to weddings, get outfit suggestions tailored for every event.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 shadow-sm h-100 bg-white rounded  box">
                <h5 className="text-danger mb-3">Boost Your Confidence</h5>
                <p className="text-muted">
                  Discover outfits that complement your unique body shape and enhance your confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-primary mb-4">How It Works</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="info-card p-4 bg-light rounded shadow-sm  box">
                <h5 className="text-primary mb-3">Step 1: Take the Quiz</h5>
                <p className="text-muted">
                  Share your preferences, body type, and style goals through our quick and easy quiz.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card p-4 bg-light rounded shadow-sm  box">
                <h5 className="text-success mb-3">Step 2: Get Recommendations</h5>
                <p className="text-muted">
                  Receive tailored outfit ideas that are perfect for your unique style and body type.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card p-4 bg-light rounded shadow-sm  box">
                <h5 className="text-danger mb-3">Step 3: Shop & Shine</h5>
                <p>
                  Shop confidently and enjoy outfits that make you look and feel amazing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section py-5 text-center text-white irish" style={{ backgroundColor: '#1d3557' }}>
        <div className="container">
          <h2 className="fw-bold mb-3">Effortless Style, Tailored for You</h2>
          <p className="lead text-center">Unlock your fashion potential with personalized outfit ideas!</p>
          <Link to='occasion'><button className="btn btn-warning btn-lg mt-3">Get Started Now</button></Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
