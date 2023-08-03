import mongoose from "mongoose";
import 'dotenv/config'


async function db() { 
    try{
       await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.jnb8muo.mongodb.net/`)

        console.log('Conexão com banco de dados com sucesso')
    } catch (error){
        console.log(`Erro: ${error}`)
    }
}

export default db;