const express = require('express')
const getMesage = require('./message').getMesage
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send(getMesage())
})

app.post('/', (req, res) => {
    res.send(req.body.message)
})


app.listen(port, () => {
    console.log('listening on port: ' + port)
})