import express from 'express';
const app = express();
app.get('/', (req,res) => {
    res.send('Hola Mundo');
})
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
})