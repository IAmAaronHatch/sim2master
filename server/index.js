const express = require('express')
const bodyParser = require('body-parser')
// const massive = require('massive')

// require('dotenv').config()

const app = express()

const {CONNECTION_STRING} = process.env

app.use(bodyParser.json())

// massive ( process.env.CONNECTION_STRING ).then( db => {
//     app.set('db', db)
// }).catch( err => console.log(err) )

//const  = require('./')

//app.get('/', )
//app.post('/', )
//app.put('/', )
//app.delete('/', )



const PORT = 4200
app.listen(PORT, () => {
    console.log('listening on port:', PORT)
})