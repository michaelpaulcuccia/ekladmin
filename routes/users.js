const express = require('express');
const router = express.Router();
const User = require('../models/User');

//ROUTE = /users
router.get('/', async (req, res) => {

    //pass an empty object as arg to get ALL docs in collection
    const userCollection = await User.find({});


    res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
    res.setHeader('Content-Range', 'users 0-20/200')
    //console.log(res.getHeaders())


    res.send(userCollection)
});


module.exports = router;