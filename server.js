const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = require("./app")

dotenv.config({ path: "./config.env" })

const DB = process.env.DATABASE.replace("<db_password>", process.env.DATABASE_PASSWORD)

const connectDB = async () => {
    await mongoose.connect(DB);
    console.log("DB connection successful!");
};
connectDB();
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`App running on port ${port}...`);
    });
}
//  ma01030370_db_user
// 6OxKaLs3sZbmgcAp


module.exports = app