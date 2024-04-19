const dotenv = require("dotenv")

dotenv.config();
console.log(process.env.PORT);


module.exports = {

    // PORT: process.env.PORT
    PORT: 3000,
    ATLAS_DB_URL: process.env.ATLAS_DB_URL,
    NODE_ENV: process.env.NODE_ENV || 'development',
    LOG_DB_URL: process.env.LOG_DB_URL || 'development2'
}