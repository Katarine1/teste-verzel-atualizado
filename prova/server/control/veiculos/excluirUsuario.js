const express = require('express');
const db = require('./../../model/conexao');

const app = express();

/** Excluir Veículo na tela de exclusão de Usuários por Id */
app.delete('/excluir-veiculo-usuario/:id', async (req, res) => {
    const usuarioId = req.params.id;

    try {

        const sql = "DELETE FROM carros WHERE usuario_id=?;";

        db.query(sql, [usuarioId], (err, result) => {
            if (result) {
                return res.send(result);
            } else {
                return res.send('Veículo não Excluído!');
            }
        });

    } catch (err) {
        return console.log('Erro: ' + err);
    }
});

module.exports = app;
