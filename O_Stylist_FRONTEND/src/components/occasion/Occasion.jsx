import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usercontext } from '../../context/userLoginContext';
import './Occasion.css';
import { maleOutfits, femaleOutfits, occasionsWithEmojis, maleAccessories, femaleAccessories } from '../outfits/Outfit';
import tempImage from '../homePictures/Temporary.png';

function Occasion() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { loginStatus, curruser } = useContext(usercontext);
  const [getoccName, setGetoccName] = useState('');
  const [physic, setPhysic] = useState('');
  const [animation, setAnimation] = useState(true);
  const [err, setErr] = useState('');
  const [reply, setReply] = useState('');
  const [userSuggestedOutfits, setUserSuggestedOutfits] = useState([]);

  const navigate = useNavigate();

  // Function to fetch user suggested outfits
  const fetchUserSuggestedOutfits = async (occasion, bodyStructure) => {
    try {
      const nooccasion=occasion.replace(/\s+/g, '');
      console.log(nooccasion);
      const nobodyStructure=bodyStructure.replace(/\s+/g, '');
      const res = await fetch(`http://localhost:5000/usersSuggestedMaleOutfitsApi/usersSuggestedMaleOutfits/${nooccasion}/${nobodyStructure}/${curruser.gender}`);
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setUserSuggestedOutfits(data);
        console.log(data);
        console.log(userSuggestedOutfits);
      } else {
        setErr(data.message || 'Failed to fetch outfits.');
      }
    } catch (error) {
      console.error('Error fetching outfits:', error);
      setErr('Failed to load outfits.');
    }
  };

  useEffect(() => {
    if (getoccName && physic) {
      fetchUserSuggestedOutfits(getoccName, physic);
    }
  }, [getoccName, physic]);

  function getIndex(occName) {
    setGetoccName(occName);
    setAnimation(false);

    let { weight, height } = curruser;
    weight = weight.charAt(0).toUpperCase() + weight.slice(1).toLowerCase();
    height = height.charAt(0).toUpperCase() + height.slice(1).toLowerCase();

    const key = weight !== 'Lean-muscular' ? `${weight} ${height}` : `Lean Muscular ${height}`;
    const outfits = curruser.gender === 'male' ? maleOutfits : femaleOutfits;

    if (outfits[occName] && outfits[occName][key]) {
      setPhysic(key);
    } else {
      console.error(`No outfits found for ${key} under ${occName}`);
      setPhysic('');
    }

    setSelectedIndex(occasionsWithEmojis.findIndex(occasion => occasion.occasion === occName));
  }

  async function onPost(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      top: formData.get('top'),
      bottom: formData.get('bottom'),
      shoes: formData.get('shoes'),
      description: formData.get('description'),
      occName: getoccName,
      physic: physic,
      gender: curruser.gender,
      username: curruser.username
    };

    try {
      const res = await fetch('http://localhost:5000/usersSuggestedMaleOutfitsApi/usersSuggestedMaleOutfits', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (result.message === 'OUTFIT POSTED') {
        setReply("OUTFIT POSTED");
      } else {
        setErr(result.message);
      }
    } catch (err) {
      console.error(err);
      setErr('An error occurred while posting the outfit.');
    }
  }

  return (
    <div className='container libre'>
      {!loginStatus ? (
        <p className='text-center text-danger'>
          You need to login to view the outfits. Please log in to continue.
        </p>
      ) : (
        selectedIndex === -1 ? (
          <>
            <h1 className='text-center mb-5'>Select Your Occasion</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {occasionsWithEmojis.map((occasion, index) => (
                <div className='col' key={index}>
                  <div className={`card h-100 card-style ${animation && index % 1.5 !== 0 ? 'slideInLeft' : 'slideInRight'}`}>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                      <p className="fs-1 rotate">{occasion.emoji}</p>
                      <p className="fs-6 text-dark"><strong>{occasion.occasion}</strong></p>
                      <button 
                        className="btn btn-outline-success mt-auto border-secondary rotate"
                        onClick={() => getIndex(occasion.occasion)}
                      >
                        My Occasion
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <p className='fs-5 text-center'><strong>Occasion: </strong>{getoccName}</p>
            
            <div className="text-end mb-5">
              <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
              >
                Suggest an Outfit
              </button>
            </div>

            <div 
              className="modal fade" 
              id="staticBackdrop" 
              data-bs-backdrop="static" 
              data-bs-keyboard="false" 
              tabIndex="-1" 
              aria-labelledby="staticBackdropLabel" 
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Suggestion</h5>
                    <button 
                      type="button" 
                      className="btn-close" 
                      data-bs-dismiss="modal" 
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <h3 className='text-center text-success'>{reply}</h3>
                    <form className='mb-5 mt-5 bg-light p-5 shadow-lg mx-10' onSubmit={onPost}>
                      <h3 className='text-center'>Outfit</h3>
                      <div className='mb-3'>
                        <label htmlFor="top" className='form-label'>Top</label>
                        <input type="text" id="top" name="top" className="form-control" required />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="bottom" className='form-label'>Bottom</label>
                        <input type="text" id="bottom" name="bottom" className="form-control" required />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="shoes" className='form-label'>Shoes</label>
                        <input type="text" id="shoes" name="shoes" className="form-control" required />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor="description" className='form-label'>Description</label>
                        <textarea id="description" name="description" className="form-control" required></textarea>
                      </div>
                      <div className="text-center mb-3">
                        <button type="submit" className='btn btn-outline-primary'>Post</button>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Outfit List Section */}
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
              {(curruser.gender === 'male' ? maleOutfits : femaleOutfits)[getoccName]?.[physic]?.map((outfit, index) => (
                <div className='col' key={index}>
                  <div className='card h-100 card-style'>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                      <p className="fs-5 text-center">{`Outfit ${index + 1}`}</p>
                      <div className="text-start">
                        <div className="text-center mb-5">
                          <img 
                            className='outfitsImage' 
                            src={tempImage} 
                            alt="Outfit" 
                            style={{ width: '100%', borderRadius: '10px' }} 
                          />
                        </div>
                        <p className="fs-6">
                          <strong className='text-primary'>Top: </strong>{outfit.top}
                        </p>
                        <p className="fs-6">
                          <strong className='text-primary'>Bottom: </strong>{outfit.bottom}
                        </p>
                        <p className="fs-6">
                          <strong className='text-primary'>Shoes: </strong>{outfit.shoes}
                        </p>
                        <p className="fs-6">
                          <strong className='text-primary'>Description: </strong>{outfit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> 
            {userSuggestedOutfits.length != 0 ? (
              <>
              <hr className='mt-5' />
              <h3 className='text-center m-5'>Outfits Suggestions by Users</h3>
              </>
            ):(
              <br />
            )}
            
             <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
              {userSuggestedOutfits.map((outfit, index) => (
                <div className='col' key={index}>
                  <div className='card h-100 card-style'>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                      <p className="fs-5 text-center">{`Outfit ${index + 1}`}</p>
                      <div className="text-start">
                        <div className="text-center mb-5">
                          <img 
                            className='outfitsImage' 
                            src={tempImage} 
                            alt="Outfit" 
                            style={{ width: '100%', borderRadius: '10px' }} 
                          />
                        </div>
                        <p className="fs-6">
                          <strong className='text-primary'>Top: </strong>{outfit.top}
                        </p>
                        <p className="fs-6">
                          <strong className='text-primary'>Bottom: </strong>{outfit.bottom}
                        </p>
                        <p className="fs-6">
                          <strong className='text-primary'>Shoes: </strong>{outfit.shoes}
                        </p>
                        <p className="fs-6">
                          <strong className='text-primary'>Description: </strong>{outfit.description}
                        </p>
                        <p className="fs-6">
                          <strong className='text-primary'>Suggested By: </strong>{outfit.username}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> 
          </div>
        )
      )}
    </div>
  );
}

export default Occasion;
