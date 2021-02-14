var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs')

var XLSX = require('xlsx')

function readExcel(filePath, callback) {
    var workbook = XLSX.readFile(filePath);
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    callback(xlData);
}

app.get('/test', function (request, response) {
    var data = [];
    readExcel(__dirname + '/ruralhousing.xlsx', function(housing) {
        data = housing;
        readExcel(__dirname + '/jalanidhi.xls', function(jalanidhi) {

            var count = 0;
            jalanidhi.forEach(element => {
                data.push(element);
                count++;
                if(count >= jalanidhi.length) {
                    response.send(housing);
                }
            });
    
            
        })    
    })
    
})

app.get('/values', (request, response) => {
    let x = {name: 'NIC', address : 'BBSR'};
    response.send(x);
})
app.get('/index', (req, res) => {
    res.render('index');
})

app.listen(3000);
console.log('Server Listening at Port 3000');