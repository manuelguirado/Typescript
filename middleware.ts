import express  from "express"
import fs from "fs";
const app = express();
//create a middleware for know the time to process the request
app.use((req, res, next) => {
   console.log("Time: ", Date.now());
   next();

})
//create a middleware for know the type of request
app.use((req, res, next) => {
    console.log("method: ", req.method);
    next();
})
//define the paths
app.get("/users", (req, res) => {
fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const users = JSON.parse(data);
    res.json(users);
})
})
app.get("/articules", (req, res) => {
    fs.readFile("articules.json", "utf-8", (err, data) => {
         if (err) {
             console.error(err);
             return;
         }
         const articules = JSON.parse(data);
         res.json(articules);
    })

})
app.get("/itproducts", (req, res) => {
    fs.readFile("itproducts.json", "utf-8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const itproducts = JSON.parse(data);
        res.json(itproducts);
    })   
})

app.get("/", (req, res) => {
    res.send("main page");
});
//define the port
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});