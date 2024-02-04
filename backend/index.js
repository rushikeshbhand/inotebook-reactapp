const connectToMongo = require('./db');
const express = require('express')

// connect to mongodb
connectToMongo();

// express boiler plate
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})