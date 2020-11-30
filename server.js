const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();

//connect database
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