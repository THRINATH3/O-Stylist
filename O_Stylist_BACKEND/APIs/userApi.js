const express = require('express');
const userapp = express.Router();
userapp.use(express.json()); // Use express.json() middleware to parse JSON bodies

require('dotenv').config();
const bcryptjs=require('bcryptjs');

const jwt=require('jsonwebtoken');

// GET all users
userapp.get('/users', async (req, res) => {
    const usersCollection = req.app.get('usersCollection');
    try {
        let users = await usersCollection.find().toArray();
        res.send({ message: "USERS", payload: users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ message: 'Error fetching users' });
    }
});

// POST a new user registration
userapp.post('/user', async (req, res) => {
    const usersCollection = req.app.get('usersCollection');
    try {
        const newUser = req.body;
        let existingUser = await usersCollection.findOne({
            username: newUser.username,
          });
          //if user already existed
          if (existingUser !== null) {
            res.send({ message: "User already existed" });
        }
        else {
            //hash the password
            let hashedpassword = await bcryptjs.hash(newUser.password, 7);
            //replace plain password with hashed password in newUser
            newUser.password = hashedpassword;
            //save user
            await usersCollection.insertOne(newUser);
            //send res
            res.send({ message: "USER CREATED" });
          }
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Error creating user' });
    }
});


//user login

userapp.post('/login',async(req,res)=>{
    const usersCollection=req.app.get('usersCollection');
    const userCred=req.body;
    console.log(usersCollection);

    let dbUser=await usersCollection.findOne({username:userCred.username});
    if(dbUser===null)
    {
        res.send({message:"INVALID USERNAME"});
    }
    else
    {
        let result=await bcryptjs.compare(userCred.password,dbUser.password);
        if(result==false)
        {
            res.send({message:"INVALID PASSWORD"});
        }
        else
        {
            let signedToken=jwt.sign(
                {username:userCred.username},
                process.env.SECRET_KEY,
                {
                    expiresIn:'1h',
                }
            )

            res.send({message:"LOGIN SUCCESS",token:signedToken,user:dbUser});
        }
    }
})

module.exports = userapp;
