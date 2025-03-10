import express, { Request, Response } from "express";
//import { connectDatabase,addUser,getUsers,updateUser,deleteUser } from "./connectdatabase";
import fs from "fs";
const app = express();
//connect to the database
//connectDatabase();
//create a interface  for the users
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}
/// make a array to store the users
let users : User[] = [ ]
//create a middleware
app.use(express.json())
//create a main route
app.get("/", (req, res) => {
 res.end("Hello World!");   

})
//make a auxiliar varibale to store the id and increment
let currentId = 1;
app.get("/" , (req, res) => {
    res.end("Hello World!");
})
//create a route to create a user
app.post("/users", (req : Request , res : Response) => {
    const { name, email, password } = req.body;
     //if one of the fields is missing send an 400
    if (!name || !email || !password) {
       res.status(400).json({ error: "Missing required fields" });
    }
  //create a new user
    const newUser: User = {
        id:  currentId++,
        name,
        email,
        password
    };
    //push the new user
    users.push(newUser);
    //add user to the database
    addUser(name, email, password);
    res.status(201).json({ message: "User created successfully" });
   
     
})
//get specefic user
app.get("/users/:id", (req: Request, res: Response) => {
    //get the id with query params
    const userId = parseInt(req.params.id);
    //find the user
    const usres = users.find((user) => user.id === userId);
    if (!users) {
        //if the user is not found
            res.status(404).json({ error: "User not found" });
    }
     //get the users 
     getUsers( );
    res.json(usres);


})
//update a user
app.put("/users/:id", (req: Request, res: Response) => {
    //find the user with the id
 const userId = parseInt(req.params.id);
 //update the user with the new data
  const { name, email, password } = req.body;
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
      res.status(404).json({ error: "User not found" });
  }
  updateUser(userId, name, email, password);
  res.json({ message: "User updated successfully" });


})
//delete a user
app.delete("/users/:id", (req: Request, res: Response) => {
const userId = parseInt(req.params.id);
const userIndex = users.findIndex((user) => user.id === userId);
 if ( userIndex === -1) {
  res.status(404).json({ error: "User not found" });
 }

 deleteUser(userId);
 res.status(204).send();


})
//list all users are created
app.get("/users", (req, res) => {
     res.status(200).json({ users });
})
//set a port and start the server
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
})
