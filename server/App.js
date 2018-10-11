// Start
const express = require('express')
const port = 3001
const path = require('path');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');

var Db = require('./models/Db.js');
var db = new Db();
var Uploader = require('./models/Uploader.js');
var uploader = new Uploader();
var Auth = require('./models/Auth.js');
var auth = new Auth(db);

const app = express()
app.use(fileUpload());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')))
app.use('/public', express.static('public'))

app.post('/api/upload', function(req, res) {
    var ret = uploader.upload(req);
    res.send(JSON.stringify(ret));
});

app.post('/api/login', async function(req, res) {
    auth.createCookies(req, res);
    var ret = await auth.login(req);
    res.send(JSON.stringify(ret));
});

app.post('/api/signup', async function(req, res) {
    var ret = await auth.signup(req);
    if (ret.res === 'OK') {
        auth.createCookies(req, res);
        var p1 = await auth.login(req);        
    }
    res.send(JSON.stringify(ret));
});

app.post('/api/auth', async function(req, res) {
    auth.createCookies(req, res);
    var ret = await auth.validate();
    res.send(JSON.stringify(ret));
});

app.post('/api/logout', async function(req, res) {
    auth.createCookies(req, res);
    var ret = await auth.logout();
    res.send(JSON.stringify({"res" : "OK"}));
});

app.post('/api/setLang', async function(req, res) {
    res.send(JSON.stringify({"res" : "OK"}));
});

app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// End