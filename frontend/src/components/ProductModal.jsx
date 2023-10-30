import React from 'react';

const ProductModal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 backdrop-blur-sm bg-black"></div>
      <div className="modal bg-white p-4 rounded-lg shadow-md relative">
        {/*<button className="close-button absolute top-2 right-2 text-gray-600" onClick={onClose}>X</button>*/}
        {children}
      </div>
    </div>
  );
};

export default ProductModal;
