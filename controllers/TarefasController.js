<<<<<<< HEAD
const { Tarefa } = require("../models");
const jwt = require('jsonwebtoken');

module.exports = {
    index: (req,res) =>{
        res.send(req.headers);


        // Verificar se existe um campo Authorization nos headers
        
        //capturar token

        //levantar qual o usuário é o dono do token

        // levantar as tarefas desse usuário

        //Masndar as tarefas com o req.status(200).json(tarefas)
=======
const jwt = require("jsonwebtoken");

module.exports = {
    index: (req,res) => {
        res.json(req.headers);

        // Verificar se exite um campo Authorization nos headers

        // Capturar o token

        // Levantar qual o usuário é o dono do token

        // Levantar as tarefas desse usuário

        // Mandar as tarefas com req.status(200).json(tarefas)        
>>>>>>> 1828a8d9abcf73bc7193265d664e542bfa26811a
    }
}