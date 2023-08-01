const express = require('express');
const app = express();
const { connection } = require('./config/db');
const { userRouter } = require('./route/userRoute');
const { flightRouter } = require('./route/flightRoute');

const PORT = process.env.Port || 5000
require('dotenv').config();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        status: true,
        msg: 'Welcome to Flight Booking System'
    });
})


app.use('/user', userRouter);
app.use('/flight', flightRouter);

app.listen(PORT, async () => {
    try {
        await connection
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is running on Port http://localhost:${PORT}`);

})