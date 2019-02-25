const express = require('express');
const app = express();
const path = require('path')
const http = require('http');
const mysql = require('mysql');
const port = 3000;
const bodyparser = require('body-parser');

//konekcija ka bazi

const db = mysql.createConnection({
    host: 'sqldemo.softmetrixgroup.com',
    port: '3306',
    user: 'root',
    password: 'smx1111',
    database: 'moneytracker',
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

app.use('js', express.static('js'));

//prikazivanje reda iz baze u tabelu

app.get('/', function(req, res) {
    db.query('SELECT main_id, main_date, main_cat, main_sum, main_com FROM main', function(err, result) {
        if (err) {
            throw err;
        } else {
            main = result;
            console.log(main);
            res.render('index', main);
        }
    })
})

//brisanje reda iz baze

app.post('/delete',(req, res) => {
    let delete_id = Number(req.body.main_id); 
    db.query('DELETE FROM main where main_id= ?', [delete_id],(err, rows,fields)=> {
        if (!err) {
            data = {
                deleted: true
            }
            res.send('Deleted successfully.');
        } else {
            // console.log(err);
            // console.log(main);
       }
   })
})

   
//dodavanje reda iz forme u bazu

app.post('/add',function(req, res) {
    console.log(req)
    let date = req.body.date;
    let category = req.body.category;
    let number = req.body.number;
    let comment = req.body.comment;
    
    db.query("INSERT INTO `moneytracker`.`main` (`main_date`, `main_cat`, `main_sum`, `main_com`) VALUES ('"+date+"', '"+category+"', '"+number+"', '"+comment+"');", function(err, result) {

        if (err) {
            throw err;
        } else {
            var data = {};
            res.json(req.body);
      }
    })
})

//edit selektovanog reda

app.post('/edit',function(req, res) {
    console.log(req)
    let date = req.body.date;
    let category = req.body.category;
    let number = req.body.number;
    let comment = req.body.comment;
    let id = req.body.id; 
    db.query("UPDATE `moneytracker`.`main` SET `main_date`='"+date+"', `main_cat`='"+category+"', `main_sum`='"+number+"', `main_com`='"+comment+"' WHERE `main_id`='"+id+"'", function(err, result) {

        if (err) {
            throw err;
        } else {
            var data = {};
            res.json(req.body);
      }
    })
})

 



// charts


app.get('/chartsDesni',function(req, res) {
 
     
    db.query("SELECT main_cat,MONTHNAME(main_date) as month, SUM(main_sum) as total_main_sum FROM main GROUP BY(main_cat)  ", function(err, result) { //sabira kolonu sum i pravi novo polje

        if (err) {
            throw err;
        } else {
           
            console.log(result)
           
            res.json(result);
      }
    })
})



app.get('/chartsLevi',function(req, res) {
 
     
    db.query("SELECT MONTHNAME(main_date) as month, SUM(main_sum) as total FROM main   GROUP BY(month) ", function(err, result) { //sabira kolonu sum i pravi novo polje

        if (err) {
            throw err;
        } else {
           
            console.log(result)
           
            res.json(result);
      }
    })
})

app.get('/chartsBalance',function(req, res) {
 
     
     db.query ('SELECT (SELECT  sum(main_sum) from moneytracker.main WHERE main_cat LIKE "%Salary%") - (SELECT sum(main_sum) from moneytracker.main WHERE main_cat NOT LIKE "%Salary%"  ) AS balance' , function(err, result) { 

        if (err) {
            throw err;
        } else {
           
            console.log(result)
           
            res.json(result);
      }
    })
});




 app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});
