const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const dotenv = require('dotenv')

// configuring environment
dotenv.config()

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

})
// let's test the connection

db.connect((err) => {

    if(err) {
       return console.log('Error connecting to the database',err)
    }

    console.log("Successfully connected to mySQL:", db.threadId)
   
})

// Question 1 goes here

app.get('', (req, res) => {
    const getPatients = "SELECT * FROM patients"
    db.query (getPatients, (err,data) => {
        if(err) {
            return res.status(400).send('failed to collect patients', err)
        }
        
        res.status(200).send(data)
    })
})
// Question 2 goes here

app.get('/providers', (req, res) => {
    const getPatients = "SELECT * FROM providers"
    db.query (getPatients, (err,data) => {
        if(err) {
            return res.status(400).send('failed to collect patients', err)
        }
        
        res.status(200).send(data)
    })
})
// Question 3 goes here

app.get('/firstName', (req, res) => {
    const getPatients = "SELECT first_name FROM patients"
    db.query (getPatients, (err,data) => {
        if(err) {
            return res.status(400).send('failed to collect patients', err)
        }
        
        res.status(200).send(data)
    })
})
// Question 4 goes here

app.get('/special', (req, res) => {
    const getPatients = "SELECT provider_specialty FROM providers"
    db.query (getPatients, (err,data) => {
        if(err) {
            return res.status(400).send('failed to collect patients', err)
        }
        
        res.status(200).send(data)
    })
})


// listen to the server
app.listen(3000, () => {
    console.log(`Server is running on port 3000...`)
})
