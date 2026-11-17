const express = require('express') 
const patientRoute = require("./routes/patientRoute")


const app = express()

app.use(express.json())


app.use("/api/v1/patients", patientRoute)


module.exports = app ;