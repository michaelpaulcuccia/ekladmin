const express = require('express');
const router = express.Router();
const Indian = require('../models/Indian');

//ROUTE: /admin/indian
//DESCRIPTION: Gets ALL indian meals from DB for Admin Grid
router.get('/', async (req, res) => {

    //pass an empty object as arg to get ALL docs in collection
    const data = await Indian.find({});

    try {

        //Set Response Headers
        res.setHeader('Content-Type', 'application/json');
        //CONTENT-RANGE MUST BE INCLUDED! 
        res.setHeader('Content-Range', `orderForms 0-20/${data.length}`);

        //all IDs in 'data' are "._id" and must be converted to 'id'

        //create an empty array
        let dataArr = [];

        data.forEach(item => {

            //create an empty object
            let newObj = {}

            //set id instead of ._id
            newObj.id = item._id
            //set remaining fields as is 
            newObj.name = item.name
            newObj.price = item.price
            newObj.type = item.type

            //add to new data object to array
            dataArr.push(newObj);
        });

        res.send(dataArr);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

//ROUTE: /admin/indian/:id
//DESCRIPTION: Deletes a meal
router.delete('/:id', async (req, res) => {

    //find orderForm
    const meal = await Indian.findById(req.params.id);

    try {

        //check if meal exists
        if (!meal) {
            return res.status(404).json({ msg: 'meal not found' });
        }

        //remove user from db
        await meal.remove();

        res.json({ msg: 'meal removed' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

//ROUTE: /admin/indian/:id
//DESCRIPTION: Get a meal by ID
router.get('/:id', async (req, res) => {

    //find orderForm
    const data = await Indian.findById(req.params.id);

    try {

        //create an empty object
        let newObj = {}

        //set id instead of ._id
        newObj.id = data._id
        //set remaining fields as is 
        newObj.name = data.name
        newObj.price = data.price
        newObj.type = data.type

        res.send(newObj);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// //ROUTE: /admin/indian/:id
// //DESCRIPTION: Edits a meal
router.put("/:id", async (req, res) => {

    //req.body =  { id: '', name: '', email: '', etc... }
    //req.params = { id: '' }

    let meal = await Indian.find(req.params);

    try {

        if (meal) {
            meal = await Indian.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
            res.send(req.body);
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;