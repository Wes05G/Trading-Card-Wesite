//the sets of Pkm cards
const Set =[
'megaEvolution',
'scarletViolet',
];
//the sub sets of Pkm cards
const subSet = [
  'blackBolt',
  'whiteFlare',
  'megaEvolutions',
  'phantasmalFlames'   
];
//the details of the cards
const trades = [
    {
        id: '1',
        cardName: 'Zekrom ex 172',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'scarletViolet',
        subSet: 'blackBolt'
    },
    {
        id: '2',
        cardName: 'Victini',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'scarletViolet',
        subSet: 'blackBolt'
    },
    {
        id: '3',
        cardName: 'Seismitoad 105',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'scarletViolet',
        subSet: 'blackBolt'
    },
    {
        id: '4',
        cardName: 'Reshiram ex 173',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'scarletViolet',
        subSet: 'whiteFlare'
    },
    {
        id: '5',
        cardName: 'Reshiram ex 166',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'scarletViolet',
        subSet: 'whiteFlare'
    },
    {
        id: '6',
        cardName: 'Victini',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'scarletViolet',
        subSet: 'whiteFlare'
    },
    {
        id: '7',
        cardName: 'Mega Lucario ex 188',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'megaEvolution',
        subSet: 'megaEvolutions'
    },
    {
        id: '8',
        cardName: 'Mega Gardevoir ex 187',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'megaEvolution',
        subSet: 'megaEvolutions'
    },
    {
        id: '9',
        cardName: 'Mega Lucario ex 179',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'megaEvolution',
        subSet: 'megaEvolutions'
    },
    {
        id: '10',
        cardName: 'Mega Charizard X ex 125',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'megaEvolution',
        subSet: 'phantasmalFlames'
    },
    {
        id: '11',
        cardName: 'Mega Charizard X ex 109',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'megaEvolution',
        subSet: 'phantasmalFlames'
    },
    {
        id: '12',
        cardName: 'Mega Charizard X ex 130',
        owner: 'wesley',
        cardGrade: '10',
        status: 'open',
        image: '',
        price: '$1000',
        Set: 'megaEvolution',
        subSet: 'phantasmalFlames'
    },
];
//search for a specific card via their id
const findbyId = (id) => {
    return trades.find(trade => trade.id === id);
};
//save and add a new card to the trades
exports.save = (newtrade) => {
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

  // Add the trade/card to trades list
  trades.push(newtrade);

  // return the saved trade 
  return newtrade;
};

//update a card
const updatebyId = (id, newtrade) => {
    //add to categories if needed
     // Find existing trade
  const trade = trades.find(t => t.id === id);

  if (!trade) {
    return null; // not found
  }

  // Add new set if needed
  if (newtrade.Set && !Set.includes(newtrade.Set)) {
    Set.push(newtrade.Set);
  }

  // Add new subset if needed
  if (newtrade.subSet && !subSet.includes(newtrade.subSet)) {
    subSet.push(newtrade.subSet);
  }

  // Never allow ID to change
  newtrade.id = id;

  // Update fields
  Object.assign(trade, newtrade);

  console.log(trades);
  return trade;
};
//delete a card
exports.deletebyId = (id) => {
    //finds the card 
    const index = trades.findIndex(trade => trade.id === id);
    //delete the id (the card)
    trades.splice(index,1);
    //console.log(trades);
    return trades;
};

exports.deletebyIds = (ids) => {
    //loop with id
    ids.forEach(id => {
        const index = trades.findIndex(trade => trade.id === id);
        //delete the id (the card)
        trades.splice(index,1);
    });
    //console.log(trades);
    return trades;
};

exports.findSet = () => {
    return Set;
};

exports.findsubSet = () => {
    return subSet;
};

exports.findTradesBySet = (Set) => {
    return trades.filter(trades => trades.Set === Set)
};

exports.findTradesBySubSet = (subSet) => {
    return trades.filter(trades => trades.subSet === subSet)
};

exports.
//console.log(findbyId('1'));
// console.log(updatebyId('1', {cardName: 'Zekrom ex 172', owner: 'Karter', cardGrade: '10', status: 'open', image: '', price: '$1000', Set: 'scarletViolet', subSet: 'black-bolt'}));
