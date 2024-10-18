import fs from "fs";
//read the users json   
const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
//create a array with the data users
const usersArray = Object.values(users);
//print the array
console.log(usersArray);