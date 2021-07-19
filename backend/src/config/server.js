const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({extends: true}));//sempre que chegar uma requisição queusa o padrao para submissao de usuarios quem vai fazer o parser e justamento o body-parser, o modo extended suporta mais tipo de dados doq o padrao do urlencoded
//o express e muito fortemente baseado no padrao chain ofresponsability, como se tivesse uma cadeia de funçoes que vao estar trabalhando com a requisiçao
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server;