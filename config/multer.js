import multer from "multer";
import path from "node:path"

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split('.')[1]

        cb(null, Date.now() + path.extname(file.originalname))
        
    }
})

const upload = multer({storage})

export default upload