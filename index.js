const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get(('/'),(req, res, next) => {
    res.render('home.ejs');
} )

app.get(('/about'), (req, res, next) => {
    res.render('about.ejs');
})

app.get(('/contact'), (req, res, next) => {
    res.render('contact.ejs');
})


app.listen(port , () => {
    console.log(`Server run on ${port}`)
} )
