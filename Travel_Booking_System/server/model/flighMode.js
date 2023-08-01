const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
    airline: { type: String },
    flightNumber: { type: String },
    departureAirport: { type: String },
    arrivalAirport: { type: String },
    departureDateTime: { type: String }, // Format: YYYY-MM-DDTHH:mm:ss (e.g., "2023-07-30T08:30:00")
    arrivalDateTime: { type: String }, // Format: YYYY-MM-DDTHH:mm:ss (e.g., "2023-07-30T12:45:00")
    duration: { type: String }, // e.g., "4h 15m"
    price: { type: Number },
    availableSeats: { type: Number },
    baggageAllowance: {
        carryOn: { type: String }, // e.g., "7 kg"
        checked: { type: String }, // e.g., "20 kg"
    },
});

const Flight = mongoose.model("flights", flightSchema);
module.exports = { Flight }

