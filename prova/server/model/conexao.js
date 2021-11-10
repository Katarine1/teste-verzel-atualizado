const mysql = require('mysql');

const CONEXAO = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prova'
});

CONEXAO.connect((err) => {
    if(!err) {
        console.log("Conectado ao Banco de Dados!");
    } else {
        console.log("Não Conectado ao Banco de Dados!");
    }
});

module.exports = CONEXAO;
