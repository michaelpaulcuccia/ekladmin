const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

const db = 'mongodb+srv://ekladmin:11920sank@cluster0.iyihp.mongodb.net/<dbname>?retryWrites=true&w=majority'

//connect database
const connectDB = async () => {

    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        //exit process with failure
        process.exit(1);
    }
}
connectDB();

//Middleware - get data from req.body in routes
app.use(express.json({ extended: false }));

app.use(cors());

//routes
app.use('/admin/users', require('./routes/users'));
app.use('/admin/orderForms', require('./routes/orderForms'));

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});