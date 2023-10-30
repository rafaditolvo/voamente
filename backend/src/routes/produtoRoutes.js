const express = require('express');
const multer = require('multer');
const ProdutoController = require('../controllers/produtoController');
const database = require('../utils/database');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Configuração de storage para armazenar em memória

// Middleware para conectar ao MongoDB
router.use(async (req, res, next) => {
  await database.connect();
  next();
});

const produtosCollection = database.client.db('e-shop').collection('produtos');
const produtoController = new ProdutoController(produtosCollection);

// Rota para cadastrar um novo produto com imagem
router.post('/cadastrar', upload.single('imagem'), produtoController.cadastrarProduto.bind(produtoController));

// Rota para listar todos os produtos
router.get('/listar', produtoController.listarProdutos.bind(produtoController));

// Rota para excluir um produto por ID
router.delete('/excluir/:id', produtoController.excluirProduto.bind(produtoController));

module.exports = router;
