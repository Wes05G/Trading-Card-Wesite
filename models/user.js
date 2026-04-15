const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: { type: String, required: true, unique: true, default: () => new mongoose.Types.ObjectId().toString() },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String,},
    }, { id: false });

module.exports = mongoose.model('User', userSchema, 'User');