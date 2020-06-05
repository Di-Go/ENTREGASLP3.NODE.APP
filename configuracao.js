const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');
const servidor = express();

//#region Configurações dos Módulos 
    // Template Engine
        servidor.engine("handlebars", handlebars({defaultLayout: 'main'}));
        servidor.set('view engine','handlebars');
    // Carregamento Estilos
        servidor.use('/public', express.static('public'));
//#endregion


//#region Rotas e Templates
    // Página Inicial
        servidor.get("/", (requisicao, resposta) =>{
            resposta.render('index', {
                tituloDaPagina: "Pagina Inicial"
            });
        });
    // Cadastro de Categoria de Filmes
        servidor.get("/categoria_filme", (requisicao, resposta) =>{
            resposta.render('cadastro-categoria-filme', {
                tituloDaPagina: "Cadastro de Categoria" 
            });
        });
//#endregion

//#region Configuração do Servidor
    // Iniciar Servidor
        const PORTA = 8081;
        servidor.listen(PORTA, (requisicao, resposta) => {
            console.log(`Servidor executando em http://localhost:${PORTA}`);
        });
//#endregion