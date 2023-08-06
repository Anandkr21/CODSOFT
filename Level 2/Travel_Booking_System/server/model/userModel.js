const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    dateOfBirth: { type: String }, // Format: YYYY-MM-DD
    phoneNumber: { type: String },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipcode: { type: String },
        country: { type: String },
    },
    paymentInformation: {
        paymentMethod: { type: String }, // e.g., "Credit Card", "PayPal", etc.
        cardNumber: { type: String }, // Last 4 digits, for security reasons
        expirationDate: { type: String }, // Format: MM/YY
        cvv: { type: String }, // Card verification code
    },
    bookingHistory: [
        {
            flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' },
            bookingDate: { type: String }, // Format: YYYY-MM-DD
            passengerCount: { type: Number },
            totalAmount: { type: Number },
            // Add more fields related to booking if needed
        },
    ],
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdAt: {
        type:Date,
        default:Date.now()
    }
})

const User = new mongoose.model('users', userSchema)

module.exports = { User }