import React, { useState } from 'react';

const ProductForm = ({ updateProductList }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(''); // Novo estado para a URL
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', title);
    formData.append('descricao', description);
    formData.append('preco', price);
    formData.append('imagem', image);
    formData.append('url', url); // Inclua a URL no formulário
  
    console.log(url); // Adicione este console.log para verificar o valor da URL
    try {
      const response = await fetch('http://localhost:3000/api/produtos/cadastrar', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Produto cadastrado com sucesso!');
        setError('');
        setTitle('');
        setDescription('');
        setPrice('');
        setImage(null);
        setUrl(''); // Limpe o campo de URL após o sucesso

        // Após cadastrar com sucesso, atualize a lista de produtos
        updateProductList();
      } else {
        const errorData = await response.json();
        setMessage('');
        setError('Erro ao cadastrar o produto: ' + errorData.erro);
      }
    } catch (error) {
      setMessage('');
      setError('Erro ao cadastrar o produto: ' + error.message);
    }
  };

  return (
    <div className="product-form-container">
      <h2>Cadastrar Produto</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagem:</label>
          <input
            type="file"
            id="image"
            name="imagem"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-group">
  <label htmlFor="url">Link:</label>
  <input
    type="text"
    id="url"
    value={url}
    onChange={handleUrlChange}
    required
  />
</div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ProductForm;
