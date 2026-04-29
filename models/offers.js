const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');

const offersSchema = new Schema({
    id: { type: String, required: true, unique: true },
    tradeId: { type: String, required: true },
    offeredCardId: { type: String, required: true },
    userId: { type: String, required: true },
    status: { type: String, required: true },
    offeredUserId: { type: String, required: true },
    cardName: { type: String },
    offeredCardName: { type: String },
    image: { type: String },
    offeredCardImage: { type: String },
}, { id: false });

module.exports = mongoose.model('Offers', offersSchema, 'Offers');