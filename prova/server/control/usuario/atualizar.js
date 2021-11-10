const express = require('express');
const db = require('./../../model/conexao');

const app = express();

/** Atualizar Usuário por id */
app.post('/atual-usuario/:id', async (req, res) => {

    const id = req.params.id;
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    if (nome != null || email != null || senha != null) {

        try {
            const sql = "UPDATE usuarios SET nome=?, email=?, senha=? WHERE id=?;";

            await db.query(sql, [nome, email, senha, id], (err, result) => {
                if (result) {
                    return res.json({
                        erro: 'false',
                        dados: result,
                        id: id
                    });
                } else {
                    return res.send(JSON.stringify('false'));
                }
            });
        } catch (e) {
            console.log("Erro: " + e);
        }
    } else {
        return res.send('Campos não preenchidos!')
    }
        
});

module.exports = app;
