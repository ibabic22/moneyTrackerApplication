// const mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "sqldemo.softmetrixgroup.com",
//   user: "root",
//   password: "smx1111",
//   database: 'moneyTracker'
// });

// // con.connect(function(err) {
// //     if (err) throw err;
// //     console.log("Connected!");

// //     var sql = "INSERT INTO main (main_id, main_date, main_cat, main_sum, main_currency, main_com) VALUES ('1', '2016-12-23',shopping', '300' , 'RSD', 'kupilo')";
// //     con.query(sql, function (err, result) {
// //         if (err) throw err;
// //         console.log("1 record inserted");
// //     });
// // });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM main", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });