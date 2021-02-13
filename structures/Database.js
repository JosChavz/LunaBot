const mysql = require('../node_modules/mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: "185.201.11.149", 
    user: "u620084790_jchavez", 
    password: "?7AdELG*~",
    port: 3306,
    database: "u620084790_luna_bot_db",
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
