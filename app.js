const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const session = require('express-session');
const { MongoStore } = require('connect-mongo');

const tradeRoutes = require('./routes/tradeRoutes');
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

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

//connect and store sessions in MongoDB
app.use(session({
    secret: 'cpsc455-secret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: 'mongodb://localhost:27017/Trades'}),
        cookie: { maxAge: 1000 * 60 * 60 * 24}
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Calling the routes
app.use('/trades', tradeRoutes);
app.use('/', mainRoutes);
app.use('/users', userRoutes);

// 404 — no route matched
app.use((req, res) => {
    res.status(404).render('trades/error', { status: 404, message: 'The page you are looking for does not exist.' });
});

// 500 — unhandled error bubbled up from a route or middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    const code = err.status || err.statusCode || 500;
    res.status(code).render('trades/error', { status: code, message: err.message || 'An unexpected error occurred.' });
});



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
