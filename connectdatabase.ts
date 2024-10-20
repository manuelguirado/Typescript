
import mysql from 'mysql';

const connection = mysql.createConnection({
        host: '192.168.1.137',
        user: 'manudev',
        password: '270504',
        database : './prueba.sql'


})
connection.connect(error => {
    if (error) throw error;
    console.log("Database connected");
});
connection.query("select * from users", function(err,rows,fields){
    if(err) throw err;
    console.log(rows);
})