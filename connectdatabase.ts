import mysql from 'mysql';

const connection = mysql.createConnection({
        host: '192.168.1.137',
        user: 'manudev',
        password: '270504'


})
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
})