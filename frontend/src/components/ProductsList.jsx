import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForms';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Função para buscar a lista atualizada de produtos
  const updateProductList = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/produtos/listar');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useEffect(() => {
    updateProductList(); // Busque a lista de produtos ao montar o componente
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/produtos/excluir/${productId}`);
      updateProductList(); // Atualize a lista após excluir o produto com sucesso
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };

  console.log(products); // Coloque o console.log(products) aqui para visualizar os produtos

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <img

  src={`data:image/png;base64,${product.imagem}`}

  alt={product.titulo}
  style={{ width: '100px', height: '100px', marginRight: '10px' }}
/>

              <div>
                <h3>{product.titulo}</h3>
                <p>{product.descricao}</p>
                <p>Preço: R$ {parseFloat(product.preco).toFixed(2)}</p>
                <button onClick={() => handleDeleteProduct(product._id)}>Excluir</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <ProductForm updateProductList={updateProductList} /> {/* Passe a função de atualização como prop */}
    </div>
  );
};

export default ProductList;
