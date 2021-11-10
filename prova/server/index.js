const express = require('express');
const cors = require('cors');
const URL = require('./urls/url_servidor');

const PORTA = 4000;

const routerUsuarioCadastrar = require('./control/usuario/cadastrar');
const routerUsuarioAtualizar = require('./control/usuario/atualizar');
const routerUsuarioExcluir = require('./control/usuario/excluir');
const routerUsuarioListar = require('./control/usuario/listar');

const routerVeiculoCadastrar = require('./control/veiculos/cadastrar');
const routerVeiculoAtualizar = require('./control/veiculos/atualizar');
const routerVeiculoExcluirId = require('./control/veiculos/excluirId');
const routerVeiculoExcluirUsuario = require('./control/veiculos/excluirUsuario');
const routerVeiculoListar = require('./control/veiculos/listar');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('enc-type', 'multipart/form-data');
    res.header('Content-Type', 'multipart/form-data');
    res.header('Content-Type', 'application/json');
    res.header('Accept', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
});

app.use('/', routerUsuarioCadastrar);
app.use('/', routerUsuarioAtualizar);
app.use('/', routerUsuarioExcluir);
app.use('/', routerUsuarioListar);

app.use('/', routerVeiculoCadastrar);
app.use('/', routerVeiculoAtualizar);
app.use('/', routerVeiculoExcluirId);
app.use('/', routerVeiculoExcluirUsuario);
app.use('/', routerVeiculoListar);

/** CRIA AS TABELAS - Retire o comentário caso elas não existam */
//const tabUsuarios = require('./model/tabela_usuarios');
//const tabCarros = require('./model/tabela_carros');

app.listen(PORTA, console.log('Servidor conectado na porta ' + PORTA + ': ' + URL));
