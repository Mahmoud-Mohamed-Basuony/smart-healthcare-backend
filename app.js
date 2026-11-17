const cors = require('cors')
const express = require('express') 
const patientRoute = require("./routes/patientRoute")


const app = express()

app.use(cors());

app.use(express.json())


app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Smart Healthcare API is running successfully!',
  });
});
 
app.use("/api/v1/patients", patientRoute)


module.exports = app ;