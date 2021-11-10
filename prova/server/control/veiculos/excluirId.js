const express = require('express');
const db = require('./../../model/conexao');

const app = express();

/** Excluir Veículo por Id */
app.delete('/excluir-veiculo/:id', async (req, res) => {
    const id = req.params.id;

    try {

        const sql = "DELETE FROM carros WHERE id=?;";

        db.query(sql, [id], (err, result) => {
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
