const express = require('express');
const app = express();



const cors=require('cors');
app.use(cors({
    origin:'https://o-stylist.vercel.app'
}))


app.use(express.json());
require('dotenv').config();

const { MongoClient } = require('mongodb');
let mClient = new MongoClient(process.env.DB_URL);

mClient.connect()
    .then((connectionObj) => {
        const oStylistex = connectionObj.db('oStylist');
        app.listen(5000, () => console.log('HTTP server started on PORT 5000'));
        const usersCollection = oStylistex.collection('users');
        const usersSuggestedMaleOutfits=oStylistex.collection('userSuggestedMaleOutfits');
        const usersSuggestedFemaleOutfits=oStylistex.collection('userSuggestedFemaleOutfits');
        console.log('DB connection is successful');
        app.set('usersCollection', usersCollection);
        app.set('usersSuggestedMaleOutfits', usersSuggestedMaleOutfits);
        app.set('usersSuggestedFemaleOutfits',usersSuggestedFemaleOutfits);

    })
    .catch(err => console.log('Error in DB connection:', err));

// Import the user API router
const userapp = require('./APIs/userApi');
app.use('/user-api', userapp);
const outfitsapp=require('./APIs/usersSuggestedMaleOutfitsApi');
app.use('/usersSuggestedMaleOutfitsApi',outfitsapp);

//handling invalid path
app.use('*',(req,res,next)=>{
    console.log(req.path)
    res.send({message:`Invalid path`})
})