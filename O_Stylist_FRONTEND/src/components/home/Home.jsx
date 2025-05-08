import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const [circleSizes, setCircleSizes] = useState([]);

  useEffect(() => {
    // Define possible size classes
    const sizes = ['small', 'medium', 'large'];

    // Generate random sizes for each circle
    const randomSizes = Array(6).fill().map(() => {
      return sizes[Math.floor(Math.random() * sizes.length)];
    });

    setCircleSizes(randomSizes);
  }, []);

  return (
    <div className="container-fluid py-5 libre">
      <div className="row align-items-center justify-content-center">
        {/* Text Content */}
        <div className="col-md-6 px-5 text-center text-md-start">
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
            Style Smarter, Better, Together.
          </h1>
          <p className="mb-4 lead">
            O-Stylist helps you find the perfect Indian outfits for any body type and occasion.
          </p>
          <div className="d-flex flex-column flex-md-row gap-3">
            <Link to="/occasion" className="btn btn-primary btn-lg">
              Try O-Stylist
            </Link>
            <Link to="/about" className="btn btn-outline-secondary btn-lg">
              Learn More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://t3.ftcdn.net/jpg/05/97/94/02/360_F_597940292_dmaVD664ccNHMDJqi0Wv0SCSexklLyhO.jpg"
            alt="O-Stylist demo"
            className="img-fluid"
            style={{ maxHeight: '400px', borderRadius: '20%' }}
          />
        </div>
      </div>
      <br /><br /><br />
      {/* How it Works Section */}
      <div className="mt-5 mb-5">
        <h1 className="text-center mb-4">How it Works?</h1>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-header fw-bold bg-danger text-white">STEP 1</div>
              <div className="card-body">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p>Log in and set up your profile with your body type and preferences.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-header fw-bold bg-warning text-white">STEP 2</div>
              <div className="card-body">
                <img
                  style={{ width: '50%' }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeH6KWNCChFz8EDeVNZBixYqhkFHQWUEX44w&s"
                  alt=""
                />
                <p>Visit the Outfits page and choose an occasion like a birthday, wedding, or festival.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-header fw-bold bg-success text-white">STEP 3</div>
              <div className="card-body">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAADW1tZzc3N/f3/IyMiwsLD39/ehoaHw8PAZGRkmJibj4+PExMQjIyOoqKhZWVlISEjz8/O9vb3q6uqioqKFhYXPz8/c3NxOTk65ubkSEhI/Pz9eXl5qamoyMjIvLy+UlJSLi4s5OTn7SveAAAACqElEQVR4nO3Z3ZqqIBiGYUxTmzQrzZ8am6bO/xwXIJaW7S3R1nrunZBSey8IvkoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZlC2smSpg41kyU0LcW8Gu6hDvXgtOUCRMb91lPmTC0cJuAhOMh4V9CwhENJsxSP86aZmCYdvuKoNsvFcdj1Ot/vLR5/awS7rd6h65K2Y7a/XolRNo8aK7pdvVRqNu3QojdfYP3e9ecV8KLeY9r8Ui4ke24k9Az/Qd10MbNhajuCftl6KwSqqHy91F4UtNOJQzTNI3FS8JLnKZ6aqoT3Cj6Pct2mF/lDDjlV2/Vu+isEoYmiP4gRZ3ReEr43Z6w67SbK65fbjOrhEc1QX0TRSUszRNvEmZO/xLy28qmv8yImSUUJ/05qvXQqYRVXVdqNj4lPNX11pPNheyOO6d/QMLMLBeqv11p1DgOrDSVbBbyseic/gEJhVi67Q6hEp49z1W741PCTe55v+Ijx1Dzmi3t3/wc6uIkeyTsrqXtW++upd+O86MeTfrhhF9T/orxlDBztsV+5TXRVMJkKQVNQu/abHXy6Z9Cdi+aSzjnMrqawR5MKMLQRvk75DWhHBJHL6e16FdtcdsOHjWNrtrO5kCP5JuE03lNuDJFmNoJXurStprr16W5bt+a6XzoTOY5GFppgqXvx/umvTJUt2nun9rqMPb9dkEKmlffHRNfSfqluD3jfz+senPYvvETbk3Cy7i3ectSwnNysPKj5QBbYzjVvxY2fhGWCdV36uW4d3lPJqxkgTkSVc/KhNFuwogj/zNT6oRZMGHEkf9dK/VuEQkV0ZsmYbQck6oboqiUJU5wy6cJaM+cCjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgP/IHt3kgOhiub/kAAAAASUVORK5CYII="
                  alt=""
                />
                <p>Pick a suggested outfit, leave comments, or suggest your own outfits to help others!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br /><br /><br />
      {/* Why O-Stylist Section */}
      <div className="mt-5 mb-5 why-ostylist-section">
        <h2 className="text-center mb-5" style={{ color: '#00695c' }}>Why O-Stylist Was Created?</h2>
        <div className="circle-container d-flex flex-wrap justify-content-center">
          {circleSizes.map((size, index) => (
            <div key={index} className={`info-circle ${size} bg${index + 1}`}>
              <p>
                <strong>
                  {index === 0 && '🎯 Purpose'}
                  {index === 1 && '🚫 No AI'}
                  {index === 2 && '🤝 Community Driven'}
                  {index === 3 && '🎉 Occasions-Based'}
                  {index === 4 && '🧍‍♀️ Every Body Matters'}
                  {index === 5 && '💬 Feedback-Friendly'}
                </strong>
                <br />
                {index === 0 && 'Suggest perfect Indian outfits based on body shape and height.'}
                {index === 1 && 'Every outfit is suggested by real people with real experiences — not machines.'}
                {index === 2 && 'Users collaborate by suggesting, commenting, and refining each other’s choices.'}
                {index === 3 && 'Outfit suggestions vary for birthdays, weddings, festivals, and more.'}
                {index === 4 && 'Support for all types: tall, short, lean, chubby, and more.'}
                {index === 5 && 'You can rate, comment, and help others look their best.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="quote-block my-5 py-4 px-3 px-md-5 text-center mx-auto">
          <h2 className="quote-mark">❝</h2>
          <p className="quote-text text-center">
            Fashion is not about trends. It’s about how you express yourself without saying a word.
          </p>
          <p className="quote-author mt-3 text-end">— O-Stylist</p>
      </div>

    </div>
  );
};

export default Home;
