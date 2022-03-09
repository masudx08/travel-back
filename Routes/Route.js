const express = require('express')
const homeRouter = express.Router()
// const bodyParser = require('body-parser')

// Models
const {departureModel, cityModel, flightModel, hotelModel}  = require('../Model/Model')

homeRouter.get("/departures",(req, res, next)=>{
  departureModel.find((err, docs)=>{
    res.send(docs)
  })
})
homeRouter.get("/cities",(req, res, next)=>{
  cityModel.find((err, docs)=>{
    res.send(docs)
  })
})
homeRouter.get("/flights",(req, res, next)=>{
  flightModel.find((err, docs)=>{
    res.send(docs)
  })
})
homeRouter.get("/hotels",(req, res, next)=>{
  hotelModel.find((err, docs)=>{
    res.send(docs)
  })
})

module.exports = homeRouter

