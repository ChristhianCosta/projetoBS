import express from "express";
import router from "./routes/router.js"
import db from "./models/connect.js";
import cors from 'cors'

import postRouter from "./routes/postRoutes.js";
const app = express();
app.use(express.json())
app.use(cors())

//rotas e roteadores
app.use(router);
app.use('/post', postRouter)

//conexão com banco de dados
db();

app.listen(3000, ()=> {
console.log("http://localhost:3000")
});
