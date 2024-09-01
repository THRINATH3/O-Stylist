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
          username:newOutfit.username,
          review:[]          
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
            username:newOutfit.username,
            review:[]
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

//review posting
userSuggestedMaleOutfitsApp.post('/review/:occName/:physic/:gender/:index', async (req, res) => {
  const review = req.body; // Assuming review object contains {review: string, username: string}
  console.log(review);
  const { occName, physic, gender, index } = req.params;
  const soccName = occName.replace(/([A-Z])/g, ' $1').trim();
  const sphysic = physic.replace(/([A-Z])/g, ' $1').trim();

  try {
    // Determine collection and filter based on gender
    const userSuggestedOutfits = req.app.get(gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits');
    const filter = {
      [`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}.${soccName}.${sphysic}`]: { $exists: true }
    };

    console.log(filter);

    // Ensure the document exists
    const result = await userSuggestedOutfits.findOne(filter, {
      [`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}.${soccName}.${sphysic}`]: 1, _id: 0
    });

    if (!result || !result[`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}`][soccName] ||
      !result[`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}`][soccName][sphysic]) {
      return res.status(404).send({ message: 'No outfits found for the specified occasion and body structure.' });
    }

    const outfitsArray = result[`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}`][soccName][sphysic];
    if (!outfitsArray[index]) {
      return res.status(404).send({ message: 'No outfit found at the specified index.' });
    }

    // Use $addToSet to add review to the specific outfit to prevent duplicate reviews
    const updateResult = await userSuggestedOutfits.updateOne(
      filter,
      {
        $addToSet: {
          [`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}.${soccName}.${sphysic}.${index}.review`]: review
        }
      }
    );

    if (updateResult.modifiedCount === 0) {
      return res.status(500).send({ message: 'Failed to update the document with the new review.' });
    }

    console.log(outfitsArray[index].review);
    res.send({ message: "REVIEW POSTED", payload: outfitsArray[index].review });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Failed to fetch or update outfits. Please try again.' });
  }
});

userSuggestedMaleOutfitsApp.get('/review/:occName/:physic/:gender/:index',async(req,res)=>{
  const review = req.body; // Assuming review object contains {review: string, username: string}
  console.log(review);
  const { occName, physic, gender, index } = req.params;
  const soccName = occName.replace(/([A-Z])/g, ' $1').trim();
  const sphysic = physic.replace(/([A-Z])/g, ' $1').trim();

  try {
    // Determine collection and filter based on gender
    const userSuggestedOutfits = req.app.get(gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits');
    const filter = {
      [`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}.${soccName}.${sphysic}`]: { $exists: true }
    };

    console.log(filter);

    // Ensure the document exists
    const result = await userSuggestedOutfits.findOne(filter, {
      [`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}.${soccName}.${sphysic}`]: 1, _id: 0
    });

    if (!result || !result[`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}`][soccName] ||
      !result[`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}`][soccName][sphysic]) {
      return res.status(404).send({ message: 'No outfits found for the specified occasion and body structure.' });
    }

    const outfitsArray = result[`${gender === 'female' ? 'usersSuggestedFemaleOutfits' : 'usersSuggestedMaleOutfits'}`][soccName][sphysic];
    if (!outfitsArray[index]) {
      return res.status(404).send({ message: 'No reviews found at the specified index.' });
    }


    console.log(outfitsArray[index].review);
    res.send({ message:  outfitsArray[index].review });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Failed to fetch or update outfits. Please try again.' });
  }
})


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
