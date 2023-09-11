import mongoose from 'mongoose';
const { Schema, model } = mongoose;

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