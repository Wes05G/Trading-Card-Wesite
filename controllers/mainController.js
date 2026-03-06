exports.index = (req,res)=>{
  res.render('trades/index');
};
exports.about = (req,res)=>{
  res.render('trades/about');
};

exports.contact = (req,res)=>{
  res.render('trades/contact');
};

exports.trades = (req, res) => {
  res.render('trades/trades');
};