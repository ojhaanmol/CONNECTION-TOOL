const mysql = require('mysql2');

module.exports = (input = {}) => {
    const host = input.host || '0.0.0.0';
    const user = input.user || 'root';
    const password = input.password || 'root';
    const database = input.database || 'alap';
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });

        connection.connect((err) => {
            if (err) {
              return resolve({
                host,user,password,database,Connection_status : `not connected`
              });
            } else {
                connection.end();
              return resolve({host,user,password,database,Connection_status : `connected`})
            }
        });
    });
}

