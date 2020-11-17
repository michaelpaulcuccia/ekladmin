const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();

//connect database
connectDB();

//Middleware - get data from req.body in routes
app.use(express.json({ extended: false }));

app.use(cors());

//test route
/*
app.get('/', (req, res) => {
    res.send('working')
})
*/

//routes
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});