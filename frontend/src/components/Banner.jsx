import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Banner = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Altera a imagem a cada 3 segundos
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div
      className="banner"
      style={{ position: 'relative', opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src={images[index].url}
        alt={images[index].alt}
        style={{
          maxHeight: '400px',
          width: '100%',
        }}
      />
      <div style={{ position: 'absolute', bottom: '800px', right: '20px', textAlign: 'right' }}>
        {/* Se você quiser adicionar um botão, pode descomentar este trecho de código */}
        {/* <button
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Clique Aqui
        </button> */}
      </div>
    </motion.div>
  );
};

export default Banner;