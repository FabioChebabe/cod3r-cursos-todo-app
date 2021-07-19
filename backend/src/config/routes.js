const express = require('express');//a referencia desse express ou de qlqr outro express de qlqr outro arquivo sera sempre o mesmo

module.exports = function(server) {
    //Api routes
    const router = express.Router();
    server.use('/api', router);

    //TODO routes
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos');
}