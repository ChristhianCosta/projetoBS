import mongoose from "mongoose";
import 'dotenv/config'


async function db() { 
    try{ 
       await mongoose.connect(/*url para o banco de dados*/)

        console.log('Conexão com banco de dados com sucesso')
    } catch (error){
        console.log(`Erro: ${error}`)
    }
}

export default db;