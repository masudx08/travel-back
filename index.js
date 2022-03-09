// Import 
const express = require('express')
const cors = require('cors')
const homeRouter = require('./Routes/Route')
// Declare
const Port = process.env.PORT || 5555

// Used 
const app = express()
app.use(cors())
app.use('/', homeRouter)

app.listen(Port, ()=>{
  console.log('Server is running with port '+Port)
})