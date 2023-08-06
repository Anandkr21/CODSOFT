const { Flight } = require("../model/flightModel")


// Create
exports.addflight = async (req, res) => {
    try {
        const { airline, flightNumber, departureAirport, arrivalAirport, arrivalDateTime, departureDateTime, duration, price, availableSeats, } = req.body;
        const flight = await Flight.insertMany([{ airline, flightNumber, departureAirport, arrivalAirport, arrivalDateTime, departureDateTime, duration, price, availableSeats }]);
        res.status(201).send({
            status: true,
            msg: "Flight Added Successfully!",
            flight_Detail: flight
        })
    } catch (error) {
        res.status(500).send({
            status: true,
            msg: "Internal server error."
        })
    }
}



// Read
exports.allflight = async (req, res) => {
    try {
        const flight = await Flight.find();
        res.status(200).send({
            status: true,
            msg: "List of all flights.",
            data: flight
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: 'Internal Server error.'
        });
    }
}


// Update
exports.updateFlight = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updated = await Flight.findByIdAndUpdate({ _id: id }, data);
        res.status(200).send({
            status: true,
            msg: `Flight updated with id ${id}`,
            updated_Data: updated
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Internal server error",
            error: error.message
        })
    }
}


// Delete
exports.deleteFlight = async (req, res) => {
    try {
        const id = req.params.id;
        const flight_delete = await Flight.findByIdAndDelete({ _id: id })
        res.status(200).send({
            status: true,
            msg: `Flight deleted with id ${id}`,
            deleted_flight: flight_delete
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Internal server error",
            error: error.message
        })
    }
}

