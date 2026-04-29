const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offersSchema = new Schema({
    tradeId: { type: String, required: true },
    offeredCardId: { type: String, required: true },
    userId: { type: String, required: true },
    status: { type: String, required: true },
    offeredUserId: { type: String, required: true },
    cardName: { type: String },
    offeredCardName: { type: String },
    image: { type: String },
    offeredCardImage: { type: String },
});

module.exports = mongoose.model('Offers', offersSchema, 'Offers');
