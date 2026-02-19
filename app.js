const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//--Routes--//

// Home page
app.get('/', (req, res) => {
    res.render('index');
});

// Pokemon Page
app.get('/pokemon', (req, res) => {
    res.render('pokemon');
});

// Mega Evolution page
app.get('/mega-evolution', (req, res) => {
    res.render('megaEvolution');
});

// Scarlet & Violet page
app.get('/scarlet-violet', (req, res) => {
    res.render('scarletViolet');
});

// Avatar page
app.get('/avatar', (req, res) => {
    res.render('avatar');
});

// Spider Man page
app.get('/spider-man', (req, res) => {
    res.render('spiderMan');
});

// Trade details page (uses query params)
app.get('/trade-details', (req, res) => {
    res.render('tradeDetails', {
        card: req.query
    });
});

// Form submission
app.post('/trades', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

// Login page
app.get('/login', (req, res) => {
    res.render('login');
});

// About page
app.get('/about', (req, res) => {
    res.render('about');
});

// Contact page
app.get('/contact', (req, res) => {
    res.render('contact');
});

//--Server--//

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
