

import mysql from 'mysql';

const connection = mysql.createConnection({
        host: '192.168.1.137',
        user: 'manudev',
        password: '270504',
        database : 'USERS'
        


})

export  function connectDatabase() {
    connection.connect(error => {
        if (error) throw error;
        console.log("Database connected");
    });
}


export function addUser(name: string, email: string, password: string) : void {
    connection.query(`INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`);
    console.log("user added");

}
export  function getUsers() {
    connection.query('SELECT * FROM users');
    console.log("users fetched");
}
export  function updateUser(id: number, name: string, email: string, password: string) {
    connection.query(`UPDATE users SET name = '${name}', email = '${email}', password = '${password}' WHERE id = ${id}`);
    console.log("user updated");
}
export function deleteUser(id: number) {
    connection.query(`DELETE FROM users WHERE id = ${id}`);
}
module.exports = {
    connectDatabase,
    addUser,
    getUsers,
    updateUser,
    deleteUser
}