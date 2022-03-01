const express = require(`express`)
const cors = require(`cors`)

const app = express()

app.use(express.json())
app.use(cors())

//variable requiring controller file.
const {
    getHouses,
     createHouse,
      updateHouse,
       deleteHouse
    } = require('./controller')

//endpoint setup
app.get(`/api/houses`, getHouses)
app.delete(`/api/house/:id`, deleteHouse)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)

app.listen(4004, () => console.log(`Port 4004 locked and loaded.`))