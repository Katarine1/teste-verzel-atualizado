const express = require('express');
const expressFileUpload = require('express-fileupload');
const path = require('path');
const db = require('./../../model/conexao');

const app = express();

app.use('/files', express.static(path.resolve(__dirname, "public")));
app.use(expressFileUpload({createParentPath: true}));

/** Salvar Veículo */
app.post('/salvar-veiculo', async (req, res) => {

    const nome = req.body.mynome;
    const marca = req.body.mymarca;
    const modelo = req.body.mymodelo;
    const foto = req.files.myfile;
    const usuarioId = req.body.myusuario_id;

    if (nome != null || marca != null || modelo != null || foto != null || usuarioId != null) {

        const file = Date.now().toString() + '_' + foto.name;

        const filePath = path.join(__dirname, 'public', 'imagens');

        foto.mv(`${filePath}/${file}`, err => {
            if (err) {
                return console.log('Imagem não salva!');
            } else {
                return console.log('Imagem salva com sucesso!');
            }
        });


        try {

            const sql = "INSERT INTO carros (nome, marca, modelo, foto, usuario_id) VALUES (?,?,?,?,?);";

            await db.query(sql, [nome, marca, modelo, file, usuarioId], (err, result) => {
                if (result) {
                    console.log(result)
                    return res.send(result);
                } else {
                    return console.log('false');
                }
            });

        } catch (err) {
            console.log('Erro: ' + err);
        }

    } else {
        return res.send('Campos não Preenchidos!');
    }
});

module.exports = app;
