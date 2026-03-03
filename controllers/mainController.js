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

exports.MEcards = (req,res)=>{
  let model = require('../models/trade')
  let categories = model.findSet('megaEvolution');
  let subCategories = model.findsubSet('megaEvolutions');
  let trades = model.findTradesBySubSet('megaEvolutions');
  res.render('trades/subSets/megaEvolutions',{categories, subCategories, trades});
};

exports.PFcards = (req,res)=>{
  let model = require('../models/trade')
  let categories = model.findSet('megaEvolution');
  let subCategories = model.findsubSet('phantasmalFlames');
  let trades = model.findTradesBySubSet('phantasmalFlames');
  res.render('trades/subSets/phantasmalFlames',{categories, subCategories, trades});
};

exports.scarletViolet = (req,res)=>{
  let model = require('../models/trade')
  let categories = model.findSet('scarletViolet');
  let subCategories = model.findsubSet();
  let trades = model.findTradesBySet('scarletViolet');
  res.render('trades/scarletViolet',{categories, subCategories, trades}); 
};

exports.BBcards = (req,res)=>{
  let model = require('../models/trade')
  let categories = model.findSet('scarletViolet');
  let subCategories = model.findsubSet('blackBolt');
  let trades = model.findTradesBySubSet('blackBolt');
  res.render('trades/subSets/blackBolt',{categories, subCategories, trades});
};

exports.WFcards = (req,res)=>{
  let model = require('../models/trade')
  let categories = model.findSet('scarletViolet');
  let subCategories = model.findsubSet('whiteFlare');
  let trades = model.findTradesBySubSet('whiteFlare');
  res.render('trades/subSets/whiteFlare',{categories, subCategories, trades});
};