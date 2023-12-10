import express from 'express';
const app = express();
app.use(express.json());//para recibir json

const PORT = 3000;
/* _par asi ignora el parametro, esto es propio de typescript */
app.get('/', (req, res) => {
  console.log("el req",req);  
  console.log("el body del req",req.body);
  console.log('Hello world');
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});