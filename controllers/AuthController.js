const { Usuario } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    
    async login (req,res) {
        // res.send("Bate forte o tambor...eu quero é tik tik tik tá!");

        // ler dados do body para variaveis email e senha

        const { email, senha } = req.body;

        // Usar o model usuário para achar um usuário com o email dado

        const user = await Usuario.findOne({ where: { email: email } });

        //verificar se o usuário existe, caso não existir:
        //res.status(403).json({error:"Login inválido"});

        if (!user) {
			return res.status(403).json({error:"Login inválido"});
		}

        //Verificar a senha passada versus a senha do db (encrypted)
        //Caso senha não bata:
        //res.status(403).json({error:"Login inválido"});

        if (!await bcrypt.compareSync(senha, user.senha)) {
			return res.status(403).json({error:"Login inválido"});
		}

    

        //se chegar até aqui: res.status.(200).json({msg:"sucesso!"});
        return res.status(200).json({msg:"sucesso!"});
        

    },

}
