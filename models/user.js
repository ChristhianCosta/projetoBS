import mongoose from 'mongoose';
const { Schema, model } = mongoose;

/*
    o usuário é simples pois é basicamente um autor, sem hierarquia já que o
    pedido havia sido para usuários que só manejariam conteúdo

*/

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },

    image: String
}, {timestamps: true})

const User = model('User', postSchema)

export default User;