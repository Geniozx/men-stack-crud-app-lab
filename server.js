const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('coneted', () => {
    console.log(`Connected to MONGODB ${mongoose.connection.name}`)
});


const carsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
})

const cars = mongoose.model('Cars', carsSchema)
module.exports = cars


app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get('/')


app.listen(3000, () => {
    console.log('Listening to port 3000')
})