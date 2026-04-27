const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');

const wishlistSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    cards: { type: [String], default: [] },
}, { id: false });  

module.exports = mongoose.model('Wishlist', wishlistSchema, 'Wishlist');