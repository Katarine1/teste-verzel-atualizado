const express = require('express');
const db = require('./../../model/conexao');

const app = express();

/** Listar Veículos por usuário */
app.get('/listar-veiculo/:id', async (req, res) => {
    const idUsuario = req.params.id;

    try {
        if (idUsuario !== null) {
            const sql = "SELECT * FROM carros WHERE usuario_id=? ORDER BY id DESC;";

            await db.query(sql, [idUsuario], (err, result) => {
                if (result !== null) {
                    return res.send(result);
                } else {
                    res.send(JSON.stringify('false'));
                }
            });

        }
    } catch (err) {
        console.log('Erro: ' + err);
    }

});

module.exports = app;
