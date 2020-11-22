const mysql = require('../node_modules/mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST, 
    user: process.env.USER, 
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE,
    connectionLimit: 5
});

class Database {
    constructor() {
        connection.connect();
    }  

    async query(q) {
        return new Promise( (res, rej) => {
            connection.query(q, function(err, rows, fields) {
                if (err) return rej(err);
                return res(rows);
            });  
        } );
    }

    close() {
        connection.end();
        console.log('Closed Connection');
    }
}

module.exports = Database;