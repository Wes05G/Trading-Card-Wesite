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
  res.redirect(`/trade/${id}`);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  const ok = model.deleteById(id);
  if (!ok) return res.status(404).send(`Trade with id ${id} not found`);
  res.redirect('/trades');
};