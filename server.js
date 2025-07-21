const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('coneted', () => {
    console.log(`Connected to MONGODB ${mongoose.connection.name}`)
});

const Car = require('/models/cars.js');

app.use(express.urlendcoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.get("/", async (req, res) => {
    res.render('index.ejs');
});

app.get('/cars', async (req, res) => {
    const allCars = await Car.find({});
    res.render('cars-collections/index.ejs', {cars: allCars});
})

app.get('/cars/new', (req, res) => {
    res.render('/cars-collections/new.ejs');
});

app.get('/cars/:carId', (req, res) => {
    const foundCar = await Car.findById(req.params.carId);
    res.render('cars-collections/show.ejs', { car: foundCar });
});

app.listen(3000, () => {
    console.log('Listening to port 3000')
})