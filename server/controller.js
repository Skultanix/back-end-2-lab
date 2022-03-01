const e = require("express")
const houseDB = require(`./db.json`)
let houseID = 4

module.exports = {
getHouses: (req, res) => res.status(200).send(houseDB),
deleteHouse: (req, res) => {
    let index = houseDB.findIndex(ele => ele.id === +req.params.id)
    houseDB.splice(index, 1)
    return res.status(200).send(houseDB)
},
createHouse: (req, res) => {
    let {address, price, imageURL} = req.body
    let newHouse = {
        id: houseDB,
        address,
        price,
        imageURL
    }
    houseDB.push(newHouse)
    return res.status(200).send(houseDB)
    houseID++
},
updateHouse: (req, res) => {
    let {id} = req.params
    let {type} = req.body
    let index = houseDB.findIndex(ele => ele.id === +id)
    if(houseDB[index].price <= 10000 && type === `minus`) {
        houseDB[index].price = 0
        res.status(200).send(houseDB)
    } else if(type === `plus`) {
        houseDB[index].price += 10000
        res.status(200).send(houseDB)
    } else if(type === `minus`) {
        houseDB[index].price -= 10000
        res.status(200).send(houseDB)
    } else {
        res.status(400)
    }
}
}