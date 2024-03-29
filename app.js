// Imports libraries

// Provides the application with the necessary web server functionality.
const express = require('express')

// Restarts Node.js application every time a relevant change occurs to simplify local development.
const { restart } = require('nodemon')

// Provides the application with functionality to parse HTTP responses.
const bodyParser = require('body-parser') 

// Initialises express application
const app = express()
app.use(bodyParser.json())

// Imports routes
const mockRoute = require('./routes/mock')

// Initialises routes
app.use('/mock', mockRoute)

// Adds homepage route
app.get('/', (req,res)=> {
    res.send('Mock API server is running!')
})

// Starts the server
const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server is up and running at http://localhost:${PORT} ...`)
})