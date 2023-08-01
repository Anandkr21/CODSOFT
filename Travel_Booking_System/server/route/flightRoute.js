const express = require('express');
const {allflight} = require('../controller/flight')
const flightRouter = express.Router();

flightRouter.get('/allflight', allflight);
flightRouter.post('/addflight');

module.exports = {flightRouter}
