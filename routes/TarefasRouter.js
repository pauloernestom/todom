<<<<<<< HEAD
var express = require('express');
var router = express.Router();

const TarefasController = require('../controllers/TarefasController');



router.get('/tarefas', TarefasController.index);


=======

const express = require("express");
const router = express.Router();

const TarefasController = require("../controllers/TarefasController");

router.get('/tarefas',TarefasController.index);
>>>>>>> 1828a8d9abcf73bc7193265d664e542bfa26811a

module.exports = router;