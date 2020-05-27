/**
<<<<<<< HEAD
 * a) Criar uma rota POST para o ENDPOINT/login direcionando a requisição para AuthController.login
 */

var express = require('express');
var router = express.Router();

const AuthController = require('../controllers/AuthController');



router.post('/login', AuthController.login);



=======
 * a) Criar uma rota POST para o ENDPOINT /login direcinando a requisição para AuthController.login
 */

const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
router.post('/login',AuthController.login);
>>>>>>> 1828a8d9abcf73bc7193265d664e542bfa26811a
module.exports = router;