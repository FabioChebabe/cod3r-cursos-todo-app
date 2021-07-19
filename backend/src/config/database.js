const mongoose = require('mongoose');
mongoose.Promise = global.Promise;//isso so serve para tirar uma mensagem de advertencia
module.exports = mongoose.connect('mongodb://localhost/todo');
