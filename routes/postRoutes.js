import postController from "../controler/postController.js";
import { Router } from "express";


const postRouter = Router();

//criar
postRouter.post('/criar', postController.createPost)

//buscar
postRouter.get('/buscar', postController.findTitle)
postRouter.get('/buscar/:id', postController.findOne)
postRouter.get('/id', postController.findid)
postRouter.get('/todos', postController.findAll)

//atualizar


//deletar
postRouter.delete('/id', postController.findDelete)

export default postRouter