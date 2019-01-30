const express = require('express');
const app = express();
const path = require('path')
const http = require('http');
const mysql = require('mysql');
const port = 3000;
const bodyparser = require('body-parser');

const con = mysql.createConnection({
    host: 'sqldemo.softmetrixgroup.com',
    port: '3306',
    user: 'root',
    password: 'smx1111',
    database: 'moneyTracker',
    multipleStatements: true
});

// Body Parser Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.use('js', express.static('js'))

app.post('/moneytracker/main', function(req, res) {
    let newExpense = {
        main_date: req.body.main_date,
        main_cat: req.body.main_cat,
        main_sum: req.body.main_sum,
        main_com: req.body.main_com
    }
    let query = "INSERT INTO `main` (main_id ,main_date, main_cat, main_sum, main_com)";
});


app.get('/', function(req, res) {
    con.query('SELECT main_id, main_date, main_cat, main_sum, main_com FROM main', function(err, result) {
        if (err) {
            throw err;
        } else {
            main = result;
            //console.log(main);
            res.render('index', main);
        }
    })
})


app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});

