const express = require('express');
const db = require('./../../model/conexao');

const app = express();

/** Listar Usuário */
app.post('/listar', async (req, res) => {

    const emailParam = req.body.email;
    const senhaParam = req.body.senha;

    try {
        const sql = "SELECT * FROM usuarios WHERE email=? AND senha=?;";

        await db.query(sql, [emailParam, senhaParam], (err, result) => {
            if (result !== null) {
                return res.send(result);
            } else {
                return res.send({ erro: 'false' });
            }
        });
    } catch (e) {
        console.log("Erro: " + e);
    }
});

module.exports = app;
