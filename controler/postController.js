import Post from "../models/post.js";

/*
    criar serviço e classe e serviço para cada um
*/

const postController = {
    createImage: async(req, res)=>{
        /*
            o post é criado recebendo o path da imagem dele através do multer
        */
        try {
            const post = {
                title: req.body.title,
                category: req.body.category,
                content:req.body.content,
                image:req.file.path, 
            };
            
            const response = await Post.create(post);

            res.status(201).json({response, msg:"Postagem efetuada com sucesso"})
        } catch (error) {
            console.log(error)
            
        }
    },

    findOne: async(req, res)=>{
        try {
            /*para testes */
            const id = req.params.id

            const response = await Post.findById(id)

            if (response == null) {
                res.status(404).json({response, msg:"Nenhuma postagem encontrada"}) 
            } else {
                res.status(201).json({response, msg:"Encontrado com sucesso"}) 
            }

            
        } catch (error) {
            console.log(error)
        }
    },

    findid: async(req, res)=>{
        try {
            /*para testes */
            const holder = req.body.id
            var id = holder.toString()

            const response = await Post.findById(id)

            if (response == null) {
                res.status(404).json({response, msg:"Nenhuma postagem encontrada"}) 
            } else {
                res.status(201).json({response, msg:"Encontrado com sucesso"}) 
            }

            
        } catch (error) {
            console.log(error)
        }
    },

    findTitle: async(req, res)=>{
        try {
            
            const title = req.body.title

            const response = await Post.find({title: {$regex:title}})

            if (response==null) {
                res.status(404).json({response, msg:"Nenhuma postagem encontrada"}) 
            } else {
               res.status(201).json({response, msg:"Encontrado com sucesso"}) 
            }
            
        } catch (error) {
            console.log(error)            
        }
    },

    findAll: async(req, res)=>{
        try {
            const posts = await Post.find();
            res.json(posts)
        } catch (error) {
            console.log(error)  
        }
    },

    findDelete: async(req, res)=>{
        try {
            /*implementar o acesso a id do post*/
            const holder = req.body.id
            var id = holder.toString()

            const response = await Post.findByIdAndDelete(id)

            if (response == null) {
                res.status(404).json({response, msg:"Nenhuma postagem encontrada"}) 
            } else {
                res.status(201).json({response, msg:"Encontrado com sucesso e deletado"}) 
            } 

        } catch (error) {
            console.log(error)
        }
    }
}

export default postController;