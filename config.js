const dotenv = require ('dotenv');
dotenv.config();

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, JWT_SECRET} = process.env;

const config = {
    port:5000,
    JWT_SECRET: JWT_SECRET,
    sql:{
        user: DB_USER,
        password: DB_PASSWORD,
        server: DB_HOST,
        database: DB_DATABASE,
        options: {
            encrypt: true,
            trustServerCertificate:false,
    }
    }
}
module.exports = config