const express = require('express');
const cors = require('cors');
const produtoRoutes = require('./routes/produtoRoutes');
const database = require('./utils/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('uploads'));
app.use(cors());

// Middleware para conectar ao MongoDB
app.use(async (req, res, next) => {
  await database.connect();
  next();
});

// Configuração de rotas
app.use('/api/produtos', produtoRoutes);

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
