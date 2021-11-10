const express = require('express');
const db = require('./../../model/conexao');

const app = express();

/** Atualizar Veículo */
app.put('/atual-veiculo/:id', async (req, res) => {
    
    const id = req.params.id;
    const nome = req.body.nome;
    const marca = req.body.marca;
    const modelo = req.body.modelo;

    if (nome != null || marca != null || modelo != null) {

        try {

            const sql = "UPDATE carros SET nome=?,marca=?,modelo=? WHERE id=?;";

            await db.query(sql, [nome, marca, modelo, id], (err, result) => {
                if (result) {
                    console.log(result)
                    return res.send(result);
                } else {
                    return console.log('false');
                }
            });

        } catch (err) {
            return console.log('Erro: ' + err);
        }

    } else {
        return res.send('Campos não Preenchidos!');
    }
});

module.exports = app;
