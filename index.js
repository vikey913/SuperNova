var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post('/', function(req,res) {
    console.log('POST request received');
    console.log(req.body, null, '\t');
    console.log(req.headers, null, '\t');
    res.send({'status': 'SUCCESS'});
});

var server = app.listen(8001, function () {
    var port = server.address().port;
    console.log("SuperNova is listening at http://localhost:%s",  port)
});
