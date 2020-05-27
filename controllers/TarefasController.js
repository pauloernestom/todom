const jwt = require("jsonwebtoken");

module.exports = {
    index: (req,res) => {
        res.json(req.headers);

        // Verificar se exite um campo Authorization nos headers

        // Capturar o token

        // Levantar qual o usuário é o dono do token

        // Levantar as tarefas desse usuário

        // Mandar as tarefas com req.status(200).json(tarefas)        
    }
}