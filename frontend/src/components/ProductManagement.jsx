import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Função para buscar a lista atualizada de produtos
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/produtos/listar');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useEffect(() => {
    // Chame a função de busca de produtos ao montar o componente
    fetchProducts();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    let inputValue = e.target.value;
  
    // Remove caracteres não numéricos, exceto o ponto
    inputValue = inputValue.replace(/[^0-9.]/g, '');
  
    // Se houver mais de um ponto decimal, remova o extra
    const parts = inputValue.split('.');
    if (parts.length > 2) {
      parts.pop();
      inputValue = parts.join('.');
    }
  
    // Remove zeros à esquerda do ponto decimal
    const [integerPart, decimalPart] = inputValue.split('.');
    if (integerPart) {
      inputValue = `${parseInt(integerPart, 10)}.${decimalPart || ''}`;
    }
  
    // Adicione automaticamente o ponto decimal se não houver nenhum e houver um número à esquerda
    if (!inputValue.endsWith('.') && !inputValue.startsWith('.')) {
      if (!inputValue.includes('.')) {
        inputValue = inputValue + '.';
      }
    }
  
    setPrice(inputValue);
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
    formData.append('url', url);

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
        setUrl('');
        // Limpar o campo de arquivo após o envio bem-sucedido
        document.getElementById('image').value = ''; // Limpa o valor do campo de arquivo
        // Após cadastrar com sucesso, atualize a lista de produtos
        fetchProducts();
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

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/produtos/excluir/${productId}`);
      // Após excluir com sucesso, atualize a lista de produtos
      fetchProducts();
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Produtos</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product._id} className="border rounded p-4 relative bg-white shadow-md">
            <div className="flex items-center">
              <img
                src={`data:image/png;base64,${product.imagem}`}
                alt={product.titulo}
                className="w-24 h-24 mr-4 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{product.titulo}</h3>
                <p className="text-gray-700">{product.descricao}</p>
                <p className="text-gray-700">Preço: R$ {parseFloat(product.preco).toFixed(2)}</p>
              </div>
            </div>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="bg-red-500 text-white py-2 px-4 rounded-full absolute top-2 right-2 hover:bg-red-600 transition duration-300"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Cadastrar Produto</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Título:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
              className="mt-1 p-2 border rounded w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descrição:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
              className="mt-1 p-2 border rounded w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Preço:
            </label>
            <input
              type="text" // Alterado para type "text" para permitir o comportamento personalizado
              id="price"
              value={price}
              onChange={handlePriceChange}
              required
              className="mt-1 p-2 border rounded w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Imagem:
            </label>
            <input
              type="file"
              id="image"
              name="imagem"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="mt-1 p-2 border rounded w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              Link:
            </label>
            <input
              type="text"
              id="url"
              value={url}
              onChange={handleUrlChange}
              required
              className="mt-1 p-2 border rounded w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Cadastrar
          </button>
        </form>
        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ProductManagement;
