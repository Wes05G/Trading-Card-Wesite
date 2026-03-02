const model = require('../models/trade')

exports.trades = (req, res) => {
    res.render('trades/trades')
};

 exports.index = (req,res)=>{
    let categories = model.findSet();
    let subCategories = model.findsubSet();
    let trades = model.findTrades();
    res.render('/trades/trades',{categories, subCategories, trades}); 
    //we call on the view now after making calls to the model and extracting the information we need.
};

exports.megaEvolution = (req,res)=>{
    let categories = model.findSet();
    let subCategories = model.findsubSet();
    let trades = model.findTradesBySet('megaEvolution');
    res.render('/trades/megaEvolution',{categories, subCategories, trades}); 
};

exports.scarletViolet = (req,res)=>{
    let categories = model.findSet();
    let subCategories = model.findsubSet();
    let trades = model.findTradesBySet('scarletViolet');
    res.render('/trades/scarletViolet',{categories, subCategories, trades}); 
};

exports.edit = (req,res)=>{
    let id = req.params.id;
    let trade = model.findById(id);
    res.render('/trades/edit',{trade});
}

exports.update = (req,res)=>{
    let id = req.params.id;
    let newtrade = req.body;
    model.updatebyId(id, newtrade);
    res.redirect('/trades');
}

exports.add = (req,res)=>{
    let newtrade = req.body;
    model.add(newtrade);
    res.redirect('/trades');
}

exports.delete = (req,res)=>{
    let id = req.params.id;
    model.deleteById(id);
    res.redirect('/trades');
}