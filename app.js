const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');
const appServer = express();

// Template Engine
appServer.engine("handlebars", handlebars({defaultLayout: 'main'}));
appServer.set('view engine','handlebars');

// Carregamento Estilos
appServer.use('/public', express.static('public'));

// Rotas e Templates
appServer.get("/", (request, response) =>{
    response.render('index');
});
appServer.get("/categoria_filme", (request, response) =>{
    response.render('cadastro-categoria-filme');
});

// Start Server
appServer.listen(8081, (request, response) => {
    console.log("Servidor executando em http://localhost:8081");
});