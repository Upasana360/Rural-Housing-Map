
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "database_1"
// });

// con.connect(function(err)
// {
//   if (err) throw err;
//   con.query("SELECT * FROM housingboard ", function ( err, result   )
//   {
//     if (err) throw err;
//     console.log(result);
//   });
// });



var XLSX = require('xlsx')


const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');

var workbook = XLSX.readFile('C:/Users/stephen/Desktop/DemoNode/ruralhousing.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);

// readXlsxFile('C:/Users/Suprava/Desktop/DemoNode/ruralhousing.xlsx').then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.
//   console.log(rows);
// })
// var aaa = readXlsxFile(fs.createReadStream('C:/Users/Suprava/Desktop/DemoNode/DATA.xlsx'));
// console.log(aaa);
