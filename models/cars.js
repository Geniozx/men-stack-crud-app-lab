const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
    name: String,
    isYourFavoriteCar: Boolean,
});

const cars = mongoose.model('Cars', carsSchema);

module.exports = cars;