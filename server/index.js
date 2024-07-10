const express = require('express')
const mockup = require('./mockup.json')
const app = express()

app.get('/', (req, res) => {
  res.send(mockup)
})

app.listen(3001, () => {
  console.log('App started on 3001')
})
