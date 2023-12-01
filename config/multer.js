/*
    essas são as definições do multer que permite o sistema lidar com cadastro
    de posts com imagem, ele funciona e salva nesse mesmo servidor as imagens,
    não é o mais eficiente só que as alternativas demandariam mais custos e/ou
    maior uso de banco de dados e manipulação de imagens pra base64

    como arquivos PDF podem ser usados é possivel configurar o multer para tratar
    deles também ou mesmo tratar de 2 ou mais imagens
*/

import multer from "multer";
import path from "node:path"

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads")
    },
    filename: function(req, file, cb){
       

        cb(null, Date.now() + path.extname(file.originalname))
        
    }
})

const upload = multer({storage})

export default upload