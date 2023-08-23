import postController from "../controler/postController.js";
import { Router } from "express";
import upload from "../config/multer.js";


const postRouter = Router();

//criar
postRouter.post('/criar', postController.createPost)

//rota teste para multipart
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