const dotenv = require("dotenv")
const mongoose =require("mongoose")
const app = require("./app")

dotenv.config({path : "./config.env"})

const DB = process.env.DATABASE.replace("<db_password>", process.env.DATABASE_PASSWORD)

mongoose.connect(DB).then(() => console.log('DB connection successful!'));
const port = process.env.PORT || 3000
app.listen(port, (req, res)=>{
    console.log(`App running on port ${port}...`)
})
//  ma01030370_db_user
// 6OxKaLs3sZbmgcAp
 
module.exports = app