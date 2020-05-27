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
    }
}