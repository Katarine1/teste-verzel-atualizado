const express = require('express');
const db = require('./../../model/conexao');

const app = express();

/** Excluir Usuário por id */
app.delete('/excluir-usuario/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const sql = "DELETE FROM usuarios WHERE id=?;";

        await db.query(sql, [id], (err, result) => {
            if (result) {
                return res.send(result);
            } else {
                return res.send('Usuário não Excluído!');
            }
        });
    } catch (err) {
        return console.log('Erro: ' + err);
    }
});

module.exports = app;
