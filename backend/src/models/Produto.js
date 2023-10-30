const { ObjectId } = require('mongodb');

class Produto {
  constructor(collection) {
    this.collection = collection;
  }

  async cadastrarProduto({ titulo, descricao, preco, imagem, url }) {
    try {
      const resultado = await this.collection.insertOne({ titulo, descricao, preco, imagem, url });
      return resultado.insertedId;
    } catch (error) {
      console.error('Erro ao cadastrar o produto:', error);
      throw new Error('Erro ao cadastrar o produto');
    }
  }

  async listarProdutos() {
    try {
      return await this.collection.find({}, { projection: { titulo: 1, descricao: 1, preco: 1, imagem: 1, url: 1 } }).toArray();
    } catch (error) {
      console.error('Erro ao buscar produtos do MongoDB:', error);
      throw new Error('Erro ao buscar produtos');
    }
  }

  async excluirProduto(id) {
    try {
      const produto = await this.collection.findOne({ _id: new ObjectId(id) });
      if (!produto) throw new Error('Produto não encontrado');

      const resultado = await this.collection.deleteOne({ _id: new ObjectId(id) });
      if (resultado.deletedCount !== 1) throw new Error('Erro ao excluir o produto');

      return true;
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
      throw new Error('Erro ao excluir o produto');
    }
  }
}

module.exports = Produto;
