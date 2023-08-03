import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: String,
    content: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Post = model('Post', postSchema)

export default Post;