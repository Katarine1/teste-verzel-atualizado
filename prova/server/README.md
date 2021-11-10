<h3>Instalaçõs de pacotes:</h3>

<p>1) Express:</p>
npm install express

<p>2) MySql Banco de Dados:</p>
npm install mysql

<p>3) Cors:</p>
npm install cors

<p>4) Express File Upload:</p>
npm install express-fileupload

<p>5) Criar uma Base de Dados no Banco de dados MySql chamada de "prova".</p>

<p>5.1) O Sistema de Banco de dados utilizado foi o phpMyAdmin.</p>

<p>5.2) Para realizar a conexão foi utilizado o XAMPP</p> ( https://www.apachefriends.org/pt_br/index.html ).

<p>6) Abra o Arquivo ./server/index.js :</p>

<p>6.1) Importes: (Retirar Comentários de "tabUsuarios" e "tabCarros")</p>

<p>/** CRIA AS TABELAS - Retire o comentário caso elas não existam */</p>
const tabUsuarios = require('./model/tabela_usuarios');
const tabCarros = require('./model/tabela_carros');

<p>6.2) Após executar a inicialização do servidor, essas tabelas serão criadas.</p>

<p>6.3) Executar o servidor Node Js após a a retirada dos comentários no item 6.1:</p>
node index.js

<p>6.3) Desconectar Servidor Node Js:</p>
ctrl + C

<p>6.4) Importes: (Colocar Comentários de "tabUsuarios" e "tabCarros")</p>

<p>/** CRIA AS TABELAS - Retire o comentário caso elas não existam */</p>
//const tabUsuarios = require('./model/tabela_usuarios');
//const tabCarros = require('./model/tabela_carros');


<h3>Casos Importantes:</h3>

<p>Importante : Instalar pacotes para ter todas as dependências:</p>
npm Install

<p>Importante : Caso ocorra algum erro, reinstalar pacotes:</p>
npm Install

<p>Important: Antes de executar o servidor, trocar url para funcionar:</p>
<p>Entre na pasta: './urls/'</p>
<p>Nos arquivos: 'url_imagem.js' e 'url_servidor.js' retire a palavra 'localhost' pela url correta.</p>

<p>Executar Servidor Antes de executar o app:</p>
node index.js
