 {/*const express = require('express');
const multer = require('multer');
const { MongoClient, ObjectId } = require('mongodb');

const cors = require('cors');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('uploads'));

app.use(cors());
app.use(express.static('uploads'));


// Configuração do multer para lidar com uploads de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define o diretório onde as imagens serão armazenadas
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Define o nome do arquivo
  },
});

const upload = multer({ storage: storage });

// Conexão com o MongoDB
const uri = 'mongodb://localhost:27017/e-shop';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function conectarMongoDB() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

conectarMongoDB();

// Rota para cadastrar um novo produto com imagem
app.post('/api/produtos', upload.single('imagem'), async (req, res) => {
  const { titulo, descricao, preco } = req.body;

  // Verifique se o campo 'imagem' está presente na requisição
  if (!req.file || !req.file.path) {
    console.error('Erro: Imagem não fornecida na requisição.');
    return res.status(400).json({ erro: 'Imagem não fornecida na requisição' });
  }

  const imagem = req.file.path; // Caminho da imagem no servidor

  const produtosCollection = client.db('e-shop').collection('produtos');

  try {
    const resultado = await produtosCollection.insertOne({
      titulo,
      descricao,
      preco,
      imagem,
    });

    console.log(chalk.green(`Produto '${titulo}' cadastrado com sucesso!`)); // Log de sucesso com o título do produto

    res.json({
      mensagem: 'Produto cadastrado com sucesso!',
      produto: {
        _id: resultado.insertedId,
        titulo,
        descricao,
        preco,
        imagem,
      },
    });
  } catch (error) {
    console.error('Erro ao cadastrar o produto:', error);
    res.status(500).json({ erro: 'Erro ao cadastrar o produto' });
  }
});

// Rota para listar todos os produtos
app.get('/api/produtos', async (req, res) => {
  const produtosCollection = client.db('e-shop').collection('produtos');

  try {
    const produtos = await produtosCollection.find({}).toArray();
    res.json(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos do MongoDB:', error);
    res.status(500).json({ erro: 'Erro ao buscar produtos' });
  }
});

// Rota para excluir um produto por ID
app.delete('/api/produtos/:id', async (req, res) => {
  const { id } = req.params;

  const produtosCollection = client.db('e-shop').collection('produtos');

  try {
    const produto = await produtosCollection.findOne({ _id: new ObjectId(id) });

    if (!produto) {
      console.error('Produto não encontrado.');
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    const resultado = await produtosCollection.deleteOne({ _id: new ObjectId(id) });

    if (resultado.deletedCount === 1) {
      console.log(chalk.red(`'Produto '${produto.titulo}' excluído com sucesso!'`));
      res.json({ mensagem: 'Produto excluído com sucesso!' });
    } else {
      console.error('Erro ao excluir o produto.');
      res.status(500).json({ erro: 'Erro ao excluir o produto' });
    }
  } catch (error) {
    console.error('Erro ao excluir o produto:', error);
    res.status(500).json({ erro: 'Erro ao excluir o produto' });
  }
});


// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
*/}