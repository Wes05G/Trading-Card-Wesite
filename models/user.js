const userSchema = new Schema({
    id: { type: String, required: true, unique: true },
    cardName: { type: String, required: true },
    owner: { type: String, required: true },
    cardGrade: { type: String, required: true },
    status: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    Set: { type: String, required: true },
    subSet: { type: String, required: true },
    }, { id: false });

module.exports = mongoose.model('User', userSchema, 'User');