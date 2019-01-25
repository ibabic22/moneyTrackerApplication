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

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/public/')))

app.use('/js', express.static('js'))

app.get('/', function(req, res) {
    con.query('SELECT * FROM main', function(err, result) {
        if (err) {
            throw err;
        } else {
            obj = result;
            console.log(obj)
            res.render('index', obj)
        }
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

