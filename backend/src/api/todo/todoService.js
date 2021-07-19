const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({new: true, runValidators: true});//se nao usar essa linha, nao ira retornar o novo registro att, e sim o registro antigo e desatualizado

module.exports = Todo;