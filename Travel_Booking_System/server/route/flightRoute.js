const express = require('express');
const {allflight,addflight, updateFlight , deleteFlight} = require('../controller/flight')
const flightRouter = express.Router();

flightRouter.get('/allflight', allflight);
flightRouter.post('/addflight', addflight);
flightRouter.patch('/update/:id', updateFlight);
flightRouter.delete('/delete/:id', deleteFlight);

module.exports = {flightRouter}
