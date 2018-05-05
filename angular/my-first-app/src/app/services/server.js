const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname,'dist')));
app.use('/app_api',require('./server/app_api.js'));

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'dist/index.html'));
})

const server = app.listen(8080,function(){
    const port = server.address().port;
    console.log("Server is runing... as port"+port);
})

