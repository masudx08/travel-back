const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://admin:1zzoxqJwBlsWfWqc@cluster0.pdv5w.mongodb.net/ToxifinderDB?retryWrites=true&w=majority', { //DB en MongoDB Atlas
//   serverSelectionTimeoutMS: 5000,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(db => console.log('Base de datos conectada con éxito.'))
//   .catch(err => console.log(err.reason));

mongoose.connect('mongodb://localhost:27017/TakeMeWhere', { useNewUrlParser: true, useUnifiedTopology: true });

// Schema
const departureScrema = new mongoose.Schema({
  cityName: String,
  countryName: String
});

const citySchema = new mongoose.Schema({
  cityName: String,
  countryName: String,
  flightLink: String,
  hotelLink: String,
  packageLink: String,
  introduction: String,
  popularity: Number
});

const flightScrema = new mongoose.Schema({
  departureCity: String,
  destinationCity: String,
  price: Number
});

const hotelSchema = new mongoose.Schema({
  destinationCity: String,
  price: Number
});


// Model
const departureModel = mongoose.model('Departure', departureScrema);
const cityModel = mongoose.model('City', citySchema);
const flightModel = mongoose.model('Flight', flightScrema);
const hotelModel = mongoose.model('Hotel', hotelSchema);

module.exports = {
    departureModel,
    cityModel,
    flightModel,
    hotelModel
}