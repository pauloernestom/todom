// Levantando os parâmetros de ambiente
require("dotenv").config();

// Trazendo dependências
const path = require("path");
const express = require('express');

<<<<<<< HEAD
const AuthRouter = require('./routes/AuthRouter');
const TarefasRouter = require('./routes/TarefasRouter');
=======
// Trazendo routers
const AuthRouter = require("./routes/AuthRouter");
const TarefasRouter = require("./routes/TarefasRouter");
>>>>>>> 1828a8d9abcf73bc7193265d664e542bfa26811a

// Criando o app express
const app = express();

app.use(express.json());

// Configurando pasta public para requisições estáticas
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/', AuthRouter);
app.use('/api/', TarefasRouter);

// Levantando o servidor
app.listen(process.env.HTTP_PORT);
