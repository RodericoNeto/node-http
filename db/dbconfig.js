const mongoose = require('mongoose');



// mongoose.connect('mongodb+srv://dcfs01:dcfs01@cluster0.gplbvjr.mongodb.net/node_mongo');
mongoose.connect('mongodb://localhost:27017/node_http_local');


// a variável db recebe a conexão do banco e vamos exporta-la com o module.exports
let db = mongoose.connection;


// exporta a conexão com o mongo (o atlas ou o local, dependendo da string de conexão)
module.exports = db;

