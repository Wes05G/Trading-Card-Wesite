const model = require('../models/trade');

exports.index = async (req, res) => {
  try {
    const allTrades = await model.find({});
    const grouped = {};
    for (const trade of allTrades) {
      if (!grouped[trade.Set]) grouped[trade.Set] = {};
      if (!grouped[trade.Set][trade.subSet]) grouped[trade.Set][trade.subSet] = [];
      grouped[trade.Set][trade.subSet].push(trade);
    }
    res.render('trades/trades', { grouped });
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.details = async (req, res) => {
  try {
    const id = String(req.params.id);
    const trade = await model.findOne({ id: id });
    if (!trade) return res.status(404).render('trades/error', { status: 404, message: `Trade with id ${id} not found` });
    res.render('trades/trade', { trade });
  } catch (err) {
    console.error("DETAILS ERROR:", err.message);
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.new = (req, res) => {
  res.render('trades/newTrade');
};

exports.add = async (req, res) => {
  try {
    const lastTrade = await model.findOne({}).sort({ id: -1 });
    const nextId = lastTrade ? String(Number(lastTrade.id) + 1) : '1';
    await model.create({
      ...req.body,
      id: nextId,
      owner: req.session.userName,
      userId: String(req.session.userId),
    });
    res.redirect('/trades');
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.edit = async (req, res) => {
  try {
    const id = String(req.params.id);
    const trade = await model.findOne({ id: id });
    if (!trade) return res.status(404).render('trades/error', { status: 404, message: `Trade with id ${id} not found` });
    res.render('trades/edit', { trade });
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const id = String(req.params.id);
    const updated = await model.findOneAndUpdate({ id: id }, req.body);
    if (!updated) return res.status(404).render('trades/error', { status: 404, message: `Trade with id ${id} not found` });
    res.redirect(`/trades/${id}`);
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = String(req.params.id);
    const ok = await model.findOneAndDelete({ id: id });
    if (!ok) return res.status(404).render('trades/error', { status: 404, message: `Trade with id ${id} not found` });
    res.redirect('/trades');
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.offers = async (req, res) => {
  try {
    const id = String(req.params.id);
    const trade = await model.findOne({ id: id });
    if (!trade) return res.status(404).render('trades/error', { status: 404, message: `Trade with id ${id} not found` });
    const myCards = await model.find({ userId: String(req.session.userId) });
    res.render('trades/offers', { trade, myCards });
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.wishlist = async (req, res) => {
  try {
    const userId = String(req.session.userId);
    const wishListTrades = await model.find({ wishList: userId });
    res.render('trades/wishList', { trades: wishListTrades });
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.addToWishlist = async (req, res) => {
  try {    
    const tradeId = String(req.params.id);
    const userId = String(req.session.userId);
    await model.findOneAndUpdate({ id: tradeId }, { $addToSet: { wishList: userId } });
    res.redirect(`/trades/${tradeId}`);
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
}

exports.megaEvolution = async (req, res) => {
  try {
    const categories = 'megaEvolution';
    const subCategories = await model.find({ Set: 'megaEvolution' });
    const trades = await model.find({ Set: 'megaEvolution' });
    res.render('trades/megaEvolution', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.MEcards = async (req, res) => {
  try {
    const categories = 'megaEvolution';
    const subCategories = await model.find({ Set: 'megaEvolution' });
    const trades = await model.find({ subSet: 'megaEvolutions' });
    res.render('trades/subSets/megaEvolutions', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.PFcards = async (req, res) => {
  try {
    const categories = 'megaEvolution';
    const subCategories = await model.find({ Set: 'megaEvolution' });
    const trades = await model.find({ subSet: 'phantasmalFlames' });
    res.render('trades/subSets/phantasmalFlames', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.scarletViolet = async (req, res) => {
  try {
    const categories = 'scarletViolet';
    const subCategories = await model.find({ Set: 'scarletViolet' });
    const trades = await model.find({ Set: 'scarletViolet' });
    res.render('trades/scarletViolet', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.BBcards = async (req, res) => {
  try {
    const categories = 'scarletViolet';
    const subCategories = await model.find({ Set: 'scarletViolet' });
    const trades = await model.find({ subSet: 'blackBolt' });
    res.render('trades/subSets/blackBolt', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

exports.WFcards = async (req, res) => {
  try {
    const categories = 'scarletViolet';
    const subCategories = await model.find({ Set: 'scarletViolet' });
    const trades = await model.find({ subSet: 'whiteFlare' });
    res.render('trades/subSets/whiteFlare', { categories, subCategories, trades });
  } catch (err) {
    res.status(500).render('trades/error', { status: 500, message: err.message });
  }
};

