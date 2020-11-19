const express = require('express');
const router = express.Router();
const OrderForm = require('../models/OrderForm');

//ROUTE: /admin/orderForms
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

//ROUTE: /admin/orderForms/:id
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

//ROUTE: /admin/orderForm/:id
//DESCRIPTION: Get an orderForm by ID
router.get('/:id', async (req, res) => {

    //find orderForm
    const data = await OrderForm.findById(req.params.id);

    try {

        //create an empty object
        let newObj = {}

        //set id instead of ._id
        newObj.id = data._id
        //set remaining fields as is 
        newObj.name = data.name
        newObj.phone = data.phone
        newObj.email = data.email
        newObj.address = data.address
        newObj.deliveryaddress = data.deliveryaddress
        newObj.mumberofguests = data.mumberofguests
        newObj.deliverydateandtime = data.deliverydateandtime
        newObj.options = data.options
        newObj.dietaryrestrictions = data.dietaryrestrictions
        newObj.allergies = data.allergies

        res.send(newObj);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// //ROUTE: /admin/orderForm/:id
// //DESCRIPTION: Edits an orderForm
router.put("/:id", async (req, res) => {

    //req.body =  { id: '', name: '', email: '', etc... }
    //req.params = { id: '' }

    let oF = await OrderForm.find(req.params);

    try {

        if (oF) {
            oF = await OrderForm.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
            res.send(req.body);
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


});

module.exports = router;