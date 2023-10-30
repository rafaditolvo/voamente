const Produto = require('../models/Produto');

class ProdutoController {
  constructor(produtosCollection) {
    this.produtoModel = new Produto(produtosCollection);
  }

  async cadastrarProduto(req, res) {
    const { titulo, descricao, preco, url } = req.body;
  
    if (!req.file) {
      return res.status(400).json({ erro: 'Nenhum arquivo de imagem enviado.' });
    }
  
    if (!titulo || !descricao || !preco || !url) {
      return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
    }
  
    // Lê a imagem enviada no upload (req.file.buffer)
    const imagemBuffer = req.file.buffer;
  
    try {
      const produtoId = await this.produtoModel.cadastrarProduto({
        titulo,
        descricao,
        preco,
        imagem: imagemBuffer,
        url
      });
  
      res.json({
        mensagem: 'Produto cadastrado com sucesso!',
        produto: {
          _id: produtoId,
          titulo,
          descricao,
          preco,
          url
        },
      });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  
  

  async listarProdutos(req, res) {
    try {
      const produtos = await this.produtoModel.listarProdutos();
      res.json(produtos);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async excluirProduto(req, res) {
    const { id } = req.params;

    try {
      const deleted = await this.produtoModel.excluirProduto(id);

      if (deleted) {
        res.json({ mensagem: 'Produto excluído com sucesso!' });
      } else {
        res.status(500).json({ erro: 'Erro ao excluir o produto' });
      }
    } catch (error) {
      res.status(404).json({ erro: error.message });
    }
  }
}

module.exports = ProdutoController;
