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



app.listen(3000, () => {
    console.log('Listening to port 3000')
})