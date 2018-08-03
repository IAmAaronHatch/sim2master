//require
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
require('dotenv').config()


const app = express()

const {CONNECTION_STRING} = process.env

app.use(bodyParser.json())

massive ( CONNECTION_STRING ).then( db => {
    app.set('db', db)
    console.log('connected to db')
}).catch( err => console.log(err) )


app.get('/api/houses', controller.getHouses)
//app.post('/', )
//app.put('/', )
//app.delete('/', )



const PORT = 4200
app.listen(PORT, () => {
    console.log('Are you feeling lucky', PORT,'?')
})