const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const tradeRoutes = require('./routes/tradeRoutes');
const mainRoutes = require('./routes/mainRoutes');

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Trades')
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log("Server is running on port", PORT);
        })
    })
    .catch(err=>console.log(err.message));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/trades', tradeRoutes);

app.use('/', mainRoutes);

app.use('/users', userRoutes);



/*
// let trades = [];

// --Routes--

// Home
//app.get('/', (req, res) => {
    //res.render('index');
//});

// Trades page (VIEW trades)
app.get('/trades', (req, res) => {
    res.render('trades', { trades });
});

// Create trade (PROCESS form)
app.post('/create-trade', (req, res) => {
    trades.push(req.body);
    res.redirect('/newTrades');
});

// Pokemon sets
app.get('/mega-evolution', (req, res) => {
    res.render('megaEvolution');
});

app.get('/scarlet-violet', (req, res) => {
    res.render('scarletViolet');
});

// Magic sets
app.get('/avatar', (req, res) => {
    res.render('avatar');
});

app.get('/spider-man', (req, res) => {
    res.render('spiderMan');
});

// Trade details
app.get('/trade-details', (req, res) => {
    res.render('tradeDetails', {
        card: req.query
    });
});

// Auth / info pages
app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

//-- Server --
*/
