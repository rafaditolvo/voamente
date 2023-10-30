const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/e-shop';

class Database {
  constructor() {
    this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  async connect() {
    try {
      await this.client.connect();
      console.log('Conectado ao MongoDB');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
    }
  }
}

module.exports = new Database();
