import postController from "../controler/postController.js";
import { Router } from "express";
import upload from "../config/multer.js";
import authToken from "../middleware/authJWT.js";

/*
    algumas rotas são redundantes para teste
    a autenticação ainda não está implementada
    pois a rota de logout ainda n funcionou

*/
const postRouter = Router();

//criar
postRouter.post('/criarmulti', upload.single("file"), postController.createImage)

//buscar
postRouter.get('/buscar', postController.findTitle)
postRouter.get('/buscar/:id', postController.findOne)
postRouter.get('/id', postController.findid)
postRouter.get('/todos', postController.findAll)

//atualizar


//deletar
postRouter.delete('/id', postController.findDelete)

export default postRouter