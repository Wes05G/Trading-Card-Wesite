exports.index = (req,res)=>{
    res.render('trades/index');
};

exports.about = (req,res)=>{
    res.render('trades/about');
};

exports.contact = (req,res)=>{
    res.render('trades/contact');
};

exports.trades = (req,res)=>{
    res.render('trades/trades');
};

exports.megaEvolution = (req,res)=>{
    let model = require('../models/trade')
    let categories = model.findSet('megaEvolution');
    let subCategories = model.findsubSet();
    let trades = model.findTradesBySet('megaEvolution');
    res.render('trades/megaEvolution',{categories, subCategories, trades}); 
};

    exports.cards = (req,res)=>{
        let model = require('../models/trade')
        let details = model.
        res.render();
    };

exports.scarletViolet = (req,res)=>{
    let categories = model.findSet();
    let subCategories = model.findsubSet();
    let trades = model.findTradesBySet('scarletViolet');
    res.render('trades/scarletViolet',{categories, subCategories, trades}); 
};
