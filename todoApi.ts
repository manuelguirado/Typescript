import express, { response , request} from 'express';
import todo  from './todo';
import { connectDatabase, addTask, getTask, deleteTask, updateTask } from './connectdatabase';
const app = express();
app.use(express.json());
connectDatabase();
let todo :  todo[] ;
app.get('/', (request, response) => {
    response.send('welcome to the todo API');
})

app.get('/todo ' ,  (request, response) => {
     getTask() 
    
})

app.post('/todo' , (request, response) => {
  const { task, description, completed } = request.body;
  if (!task || !description || !completed) {
        response.status(400).json({ error: "Missing required fields" });
    }
    const newTask : todo = {
     
        task,
        description,
        completed
    }
    todo.push(newTask);
    addTask( task, description, completed);
    response.status(201).json({ message: "Task created successfully" });

})
app.listen(3000, () => {
console.log('Server running on http://localhost:3000');

})