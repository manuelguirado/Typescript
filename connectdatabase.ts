

import mysql from 'mysql';


const connection = mysql.createConnection({
        host: '192.168.1.145',
        user: 'manudev',
        password: '270504',
        database : 'todo'
})

export  function connectDatabase() {
    connection.connect(error => {
        if (error) throw error;
        console.log("Database connected");
    });
}


export function addTask( task : string, description:string, completed : string){
    let query = `INSERT INTO todo (id, TASK, DESCRIPTION, completed) VALUES ( '${task}', '${description}', ${completed})`;
    connection.query(query, (error, result) => {
        if (error) throw error;
       JSON.stringify(result);
    })
}
export function getTask(){
    let query =  `SELECT *  FROM todo`;
    connection.query(query,(error, result) => {
        if (error) throw error;
        JSON.stringify(result);

    })
}
export function deleteTask(id : number){
    let query = `SELECT * FROM todo where id =  ${id}`;
    connection.query(query,(error, result) =>  {
         if ( error) throw error;
         JSON.stringify(result);
    })
}
export function updateTask(id : number, task : string, description : string, completed : boolean){
  let query = ` UPDATE todo set (${id}, '${task}', '${description}', ${completed})`;
  connection.query(query,(error,result) => {
    if (error) throw error;
    JSON.stringify(result);
 })
}
module.exports = {
    connectDatabase,
    addTask,
    getTask,
    deleteTask,
    updateTask
}