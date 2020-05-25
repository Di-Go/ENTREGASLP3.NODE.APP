const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');
const appServer = express();

// Rotas e Templates
appServer.get('/', (request, response) => {
    response.send("<h1>Servidor Executando<h1/>");
});

// Start Server
appServer.listen(8081, (request, response) => {
    console.log("Servidor executando em http://localhost:8081");
});