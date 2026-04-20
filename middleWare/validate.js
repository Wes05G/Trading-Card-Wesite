const User = require('../models/user');

exports.validateId = async (req, res, next) => {
    const {id} = req.parms;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
    return res.staus(400).render('trades/error', {status: 400, message: 'Invalid ID format' });
    }
}
