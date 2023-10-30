import React, { useState, useEffect } from 'react';
import FeedbackCard from './FeedbackCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Feedback = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar a lista atualizada de produtos
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/produtos/listar');
        const data = await response.json();
        setProducts(data); // Define os produtos no estado
        setLoading(false); // Define o estado de carregamento como falso
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setLoading(false); // Em caso de erro, também define o estado de carregamento como falso
      }
    };

    // Chame a função de busca de produtos ao montar o componente
    fetchProducts();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Defina o número de produtos a serem exibidos por vez
    slidesToScroll: 1,
  };

  const handleProductAdded = () => {
    // Chamada da função de busca de produtos após cadastrar um novo produto
    fetchProducts();
  };

  return (
    <div className="max-w-screen-2xl mb-11 mx-auto"> {/* Define uma largura máxima de tela extra grande e centraliza o conteúdo */}
    <h1 className="md:leading-[72px] py-2 md:text-6xl text-4xl text-[#313131] mt-4 ml-3">
   Nossos <span className="text-[#a3bfd9]">Produtos</span>
    </h1>
    {loading ? (
      <p>Carregando produtos...</p>
    ) : (
      <div>
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <FeedbackCard
              key={product._id}
              title={product.titulo}
              description={product.descricao}
              price={product.preco}
              url={product.url}
              image={product.imagem}
            />
          ))}
        </Slider>
      </div>
    )}
  </div>
  
  );
};

export default Feedback;
