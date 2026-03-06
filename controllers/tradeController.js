const model = require('../models/trade');

exports.details = (req, res) => {
  const id = req.params.id;
  const trade = model.findById(id);
  if (!trade) return res.status(404).send(`Trade with id ${id} not found`);
  res.render('trades/trade', { trade });
};

exports.new = (req, res) => {
  res.render('trades/newTrade');
};

exports.add = (req, res) => {
  model.save(req.body);
  res.redirect('/trades');
};

exports.edit = (req, res) => {
  const id = req.params.id;
  const trade = model.findById(id);
  if (!trade) return res.status(404).send(`Trade with id ${id} not found`);
  res.render('trades/edit', { trade });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const updated = model.updateById(id, req.body);
  if (!updated) return res.status(404).send(`Trade with id ${id} not found`);
  res.redirect(`/trades/${id}`);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  const ok = model.deleteById(id);
  if (!ok) return res.status(404).send(`Trade with id ${id} not found`);
  res.redirect('/trades');
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