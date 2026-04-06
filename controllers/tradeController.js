const model = require('../models/trade');

exports.details = async (req, res) => {
  try {
    const id = Number(req.params.id);
    console.log("Searching for id:", id, "type:", typeof id);
    const trade = await model.findOne({ id: id });
    console.log("Result:", trade);
    if (!trade) return res.status(404).send(`Trade with id ${id} not found`);
    res.render('trades/trade', { trade });
  } catch (err) {
    console.error("DETAILS ERROR:", err.message);
    res.status(500).send(err.message);
  }
};

exports.new = (req, res) => {
  res.render('trades/newTrade');
};

exports.add = async (req, res) => {
  try {
    await model.create(req.body);
    res.redirect('/trades');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.edit = async (req, res) => {
  try {
    const id = String(req.params.id);
    const trade = await model.findOne({ id: id });
    if (!trade) return res.status(404).send(`Trade with id ${id} not found`);
    res.render('trades/edit', { trade });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const id = String(req.params.id);
    const updated = await model.findOneAndUpdate({ id: id }, req.body);
    if (!updated) return res.status(404).send(`Trade with id ${id} not found`);
    res.redirect(`/trades/${id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const id = String(req.params.id);
    const ok = await model.findOneAndDelete({ id: id });
    if (!ok) return res.status(404).send(`Trade with id ${id} not found`);
    res.redirect('/trades');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.megaEvolution = async (req, res) => {
  try {
    const categories = 'megaEvolution';
    const subCategories = await model.find({ Set: 'megaEvolution' });
    const trades = await model.find({ Set: 'megaEvolution' });
    res.render('trades/megaEvolution', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.MEcards = async (req, res) => {
  try {
    const categories = 'megaEvolution';
    const subCategories = await model.find({ Set: 'megaEvolution' });
    const trades = await model.find({ subSet: 'megaEvolutions' });
    res.render('trades/subSets/megaEvolutions', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.PFcards = async (req, res) => {
  try {
    const categories = 'megaEvolution';
    const subCategories = await model.find({ Set: 'megaEvolution' });
    const trades = await model.find({ subSet: 'phantasmalFlames' });
    res.render('trades/subSets/phantasmalFlames', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.scarletViolet = async (req, res) => {
  try {
    const categories = 'scarletViolet';
    const subCategories = await model.find({ Set: 'scarletViolet' });
    const trades = await model.find({ Set: 'scarletViolet' });
    res.render('trades/scarletViolet', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.BBcards = async (req, res) => {
  try {
    const categories = 'scarletViolet';
    const subCategories = await model.find({ Set: 'scarletViolet' });
    const trades = await model.find({ subSet: 'blackBolt' });
    res.render('trades/subSets/blackBolt', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.WFcards = async (req, res) => {
  try {
    const categories = 'scarletViolet';
    const subCategories = await model.find({ Set: 'scarletViolet' });
    const trades = await model.find({ subSet: 'whiteFlare' });
    res.render('trades/subSets/whiteFlare', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).send(err.message);
  }
};