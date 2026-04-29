const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    id: { type: String, required: true, unique: true },
    cardName: { type: String, required: true },
    owner: { type: String, required: true },
    userId: { type: String, required: true },
    cardGrade: { type: String, required: true },
    status: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    Set: { type: String, required: true },
    subSet: { type: String, required: true },
    wishlist: { type: [String], default: [] },
    }, { id: false });

module.exports = mongoose.model('Card', tradeSchema, 'Card');

// Load trades from JSON file
/*
let trades = [];
try {
    trades = JSON.parse(fs.readFileSync('./trades.json', 'utf8'));
} catch (err) {
    console.error('Error loading trades.json:', err);
    trades = [];
}

//search for a specific card via their id
const findById = (id) => {
    return trades.find(trade => trade.id === id);
};
//save and add a new card to the trades
const save = (newtrade) => {
    // Add new set if needed
  if (newtrade.Set && !Set.includes(newtrade.Set)) {
    Set.push(newtrade.Set);
  }
  // Add new subset if needed
  if (newtrade.subSet && !subSet.includes(newtrade.subSet)) {
    subSet.push(newtrade.subSet);
  }
  // Auto-generate an id if missing
  if (!newtrade.id) {
    const maxId = trades.reduce((max, t) => Math.max(max, Number(t.id)), 0);
    newtrade.id = String(maxId + 1);
  }
  if(newtrade.set && !newtrade.Set){
    newtrade.Set = newtrade.set;
  }
    if(newtrade.subset && !newtrade.subSet){
    newtrade.subSet = newtrade.subset;
  }
  // Add the trade/card to trades list
  trades.push(newtrade);

  // Save to JSON file
  fs.writeFileSync('./trades.json', JSON.stringify(trades, null, 2));

  // return the saved trade
  return newtrade;
};
//update a card
const updateById = (id, newtrade) => {

  if (newtrade.set && !newtrade.Set) newtrade.Set = newtrade.set;
  if (newtrade.subset && !newtrade.subSet) newtrade.subSet = newtrade.subset;

  const index = trades.findIndex(trade => trade.id === id);
  if (index === -1) return false;

  trades[index] = { ...trades[index], ...newtrade, id };

  // Save to JSON file
  fs.writeFileSync('./trades.json', JSON.stringify(trades, null, 2));

  return true;
};
//delete a card
const deleteById = (id) => {
    const index = trades.findIndex(trade => trade.id === id);
    if (index === -1) return false;
    trades.splice(index, 1);

    // Save to JSON file
    fs.writeFileSync('./trades.json', JSON.stringify(trades, null, 2));

    return true;
};

const deleteByIds = (ids) => {
    //loop with id
    ids.forEach(id => {
        const index = trades.findIndex(trade => trade.id === id);
        //delete the id (the card)
        trades.splice(index,1);
    });
    //console.log(trades);

    // Save to JSON file
    fs.writeFileSync('./trades.json', JSON.stringify(trades, null, 2));

    return trades;
};

const findSet = () => {
    return Set;
};

const findsubSet = () => {
    return subSet;
};

const findTradesBySet = (set) => {
    return trades.filter(trade => trade.Set === set);
};

const findTradesBySubSet = (subSetParam) => {
    return trades.filter(trade => trade.subSet === subSetParam);
};

module.exports = {
    Trade,
    findById,
    save,
    updateById,
    deleteById,
    deleteByIds,
    findSet,
    findsubSet,
};
module.exports = {
    Trade,
    findById,
    save,
    updateById,
    deleteById,
    deleteByIds,
    findSet,
    findsubSet,
    findTradesBySet,
    findTradesBySubSet
};
*/
