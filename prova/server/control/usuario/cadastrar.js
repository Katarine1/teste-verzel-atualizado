const express = require('express');
const db = require('./../../model/conexao');

const app = express();

/** Salvar Usuário */
app.post('/salvar-usuario', async (req, res) => {

    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    if (nome != null || email != null || senha != null) {
        try {
            const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?,?,?);";

            await db.query(sql, [nome, email, senha], (err, result) => {
                if (result) {
                    console.log('Usuário Salvo!');
                    return res.json({
                        erro: 'false',
                        mensagem: 'Usuário Salvo!'
                    });
                } else {
                    console.log('Usuário não Salvo!');
                    return res.json({
                        erro: 'true',
                        mensagem: 'Usuário não Salvo!'
                    });
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
