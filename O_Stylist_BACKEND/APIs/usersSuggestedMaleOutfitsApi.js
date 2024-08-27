const express = require('express');
const userSuggestedMaleOutfitsApp = express.Router();

// POST endpoint to add new outfit suggestions
userSuggestedMaleOutfitsApp.post('/usersSuggestedMaleOutfits', async (req, res) => {
  const newOutfit = req.body; // Retrieve data sent from the client

  console.log(newOutfit);
  // Determine whether to use male or female outfit suggestions based on gender
  let userSuggestedOutfits;
  if (newOutfit.gender === 'male') {
    userSuggestedOutfits = req.app.get('usersSuggestedMaleOutfits');
  } else {
    userSuggestedOutfits = req.app.get('usersSuggestedFemaleOutfits');
  }

  // Check for missing fields in the request body
  if (!newOutfit.top || !newOutfit.bottom || !newOutfit.shoes || !newOutfit.description || !newOutfit.occName || !newOutfit.physic) {
    return res.status(400).send({ message: 'All fields are required.' });
  }

  try {
    // Construct the filter to find the correct document
    let filter;
    if(newOutfit.gender==='male'){
    filter = {
      [`usersSuggestedMaleOutfits.${newOutfit.occName}.${newOutfit.physic}`]: { $exists: true }
    };
    }
    else
    {
      filter = {
        [`usersSuggestedFemaleOutfits.${newOutfit.occName}.${newOutfit.physic}`]: { $exists: true }
      };
    }

    console.log(filter);

    let update;

    if(newOutfit.gender==='male'){
    // Construct the update to push the new outfit into the array
    update = {
      $addToSet: {
        [`usersSuggestedMaleOutfits.${newOutfit.occName}.${newOutfit.physic}`]: {
          top: newOutfit.top,
          bottom: newOutfit.bottom,
          shoes: newOutfit.shoes,
          description: newOutfit.description,
          username:newOutfit.username
        }
      }
    };
    }
    else
    {
      update = {
        $addToSet: {
          [`usersSuggestedFemaleOutfits.${newOutfit.occName}.${newOutfit.physic}`]: {
            top: newOutfit.top,
            bottom: newOutfit.bottom,
            shoes: newOutfit.shoes,
            description: newOutfit.description,
            username:newOutfit.username
          }
        }
      };
    }


    // Perform the update operation
    const result = await userSuggestedOutfits.updateOne(filter, update);
    console.log(result);

    // Check if the update was successful
    if (result.matchedCount === 0) {
      return res.status(404).send({ message: 'No matching occasion and physique type found.' });
    }

    // Send success response
    res.send({ message: 'OUTFIT POSTED', payload: result });
  } catch (err) {
    console.error(err); // Log any server-side errors
    res.status(500).send({ message: 'Failed to post the outfit. Please try again.' }); // Send error response
  }
});



// GET endpoint to fetch outfits for a given occasion and body structure
userSuggestedMaleOutfitsApp.get('/usersSuggestedMaleOutfits/:occName/:physic/:gender', async (req, res) => {
  const { occName, physic,gender } = req.params;
  const soccName=occName.replace(/([A-Z])/g, ' $1').trim();
  const sphysic=physic.replace(/([A-Z])/g, ' $1').trim();
  console.log(soccName,sphysic);


  console.log(gender);
  if(gender==='female'){
  
  try {

    const userSuggestedOutfits = req.app.get('usersSuggestedFemaleOutfits');

    // Construct the dynamic query to find the document
    const filter = {
      [`usersSuggestedFemaleOutfits.${soccName}.${sphysic}`]: { $exists: true }
    };

    console.log(filter);

    // Query to fetch the specific array
    const result = await userSuggestedOutfits.findOne(filter, {
      [`usersSuggestedFemaleOutfits.${soccName}.${sphysic}`]: 1, _id: 0
    });
    
    if (!result || !result.usersSuggestedFemaleOutfits[soccName] || !result.usersSuggestedFemaleOutfits[soccName][sphysic]) {
      return res.status(404).send({ message: 'No outfits found for the specified occasion and body structure.' });
    }
    console.log(result.usersSuggestedFemaleOutfits[soccName][sphysic]);
    // Send the fetched outfits array in the response
    res.send(result.usersSuggestedFemaleOutfits[soccName][sphysic]);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Failed to fetch outfits. Please try again.' });
  }
  }
  else
  {
    try {

      const userSuggestedOutfits = req.app.get('usersSuggestedMaleOutfits');
  
      // Construct the dynamic query to find the document
      const filter = {
        [`usersSuggestedMaleOutfits.${soccName}.${sphysic}`]: { $exists: true }
      };
  
      console.log(filter);
  
      // Query to fetch the specific array
      const result = await userSuggestedOutfits.findOne(filter, {
        [`usersSuggestedMaleOutfits.${soccName}.${sphysic}`]: 1, _id: 0
      });
      
      if (!result || !result.usersSuggestedMaleOutfits[soccName] || !result.usersSuggestedMaleOutfits[soccName][sphysic]) {
        return res.status(404).send({ message: 'No outfits found for the specified occasion and body structure.' });
      }
      console.log(result.usersSuggestedMaleOutfits[soccName][sphysic])
      // Send the fetched outfits array in the response
      res.send(result.usersSuggestedMaleOutfits[soccName][sphysic]);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Failed to fetch outfits. Please try again.' });
    }
  }
});


module.exports = userSuggestedMaleOutfitsApp;
