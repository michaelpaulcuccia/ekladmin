const express = require('express');
const router = express.Router();
const OrderForm = require('../models/OrderForm');

//ROUTE: /orderForms
//DESCRIPTION: Gets ALL orderForms from DB for Admin Grid
router.get('/', async (req, res) => {

    //pass an empty object as arg to get ALL docs in collection
    const data = await OrderForm.find({});

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
            newObj.phone = item.phone
            newObj.email = item.email
            newObj.address = item.address
            newObj.deliveryaddress = item.deliveryaddress
            newObj.mumberofguests = item.mumberofguests
            newObj.deliverydateandtime = item.deliverydateandtime
            newObj.options = item.options
            newObj.dietaryrestrictions = item.dietaryrestrictions
            newObj.allergies = item.allergies

            //add to new data object to array
            dataArr.push(newObj);
        });

        res.send(dataArr);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

//ROUTE: /orderForms/:id
//DESCRIPTION: Deletes an orderForm
router.delete('/:id', async (req, res) => {

    //find orderForm
    const oF = await OrderForm.findById(req.params.id);

    try {

        //check if orderForm exists
        if (!oF) {
            return res.status(404).json({ msg: 'orderForm not found' });
        }

        //remove user from db
        await oF.remove();

        res.json({ msg: 'orderForm removed' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;