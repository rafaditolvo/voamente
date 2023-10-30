import React, { useState } from 'react';

const FeedbackCard = ({ title, description, price, image, url }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleBuyClick = () => {
    window.open(url, '_blank');
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="relative m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a className="relative mx-3 mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 flex h-60 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl" href="#">
        <img className="object-cover" src={`data:image/png;base64,${image}`} alt={title} />
        {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% Desconto</span> */}
      </a>
      <div className="mt-4 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-5">
        <a href="#">
          <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight text-slate-900">{title}</h5>
        </a>
        <div className="mt-2 mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-2 sm:mb-0">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900">R$ {price}</span>
            <span className="text-sm text-slate-900 line-through"></span>
          </p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              {/* Ícones das estrelas */}
            </svg>
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          </div>
        </div>
        <button
          className="flex items-center justify-center rounded-md bg-transparent px-5 py-2.5 text-center text-sm font-medium text-[#0077cc] hover:bg-[#0077cc] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={toggleDescription}
        >
          Sobre
        </button>

        {showFullDescription && (
          <div className="mt-3 p-3 border border-gray-200 rounded">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">Descrição do Produto</h3>
            <p>{description}</p>
          </div>
        )}

        <a href="#" onClick={handleBuyClick} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Comprar
        </a>
      </div>
    </div>
  );
};

export default FeedbackCard;
