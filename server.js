const express = require("express");
const path = require("path");

const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './pages'));

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve index.ejs for the root path
app.get('/', (req, res) => {
    res.render('index');
});

const port = 8008;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
