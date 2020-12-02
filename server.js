const express = require('express')


const app = express()


app.use(express.json())

const students = ["dami", "funmi", "gbemi", "kola"]

app.get('/', (req, res) => {
    res.json(students)
})



module.exports = app