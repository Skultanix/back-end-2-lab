const express = require(`express`)
const cors = require(`cors`)

const app = express()

app.use(express.json())
app.use(cors())

//variable requiring controller file.
const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller')