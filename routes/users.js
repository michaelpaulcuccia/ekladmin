const express = require('express');
const router = express.Router();
const User = require('../models/User');


//ROUTE = /users
router.get('/', async (req, res) => {

    //pass an empty object as arg to get ALL docs in collection
    const userCollection = await User.find({});

    res.send(userCollection)
});


module.exports = router;