import React, { useState } from 'react';
import { FaUser, FaWhatsapp } from 'react-icons/fa';
import { Navbar, CTA, Categories, Cards, Feedback, Footer, Hero, ProductManagement, Banner } from './components';
import banner1 from './assets/banner-vm-1.jpg'
import banner2 from './assets/banner-vm-2.jpg'
import Modal from './components/Modal';

const adminCredentials = { username: 'admin', password: 'admin' };

const App = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [inputCredentials, setInputCredentials] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
    setShowLoginModal(false);
    setLoginError('');
  };

  const handleLogin = () => {
    if (inputCredentials.username === adminCredentials.username && inputCredentials.password === adminCredentials.password) {
      toggleAdminMode();
    } else {
      setLoginError('Credenciais incorretas. Tente novamente.');
    }
  };

  const openWhatsApp = () => window.open('https://api.whatsapp.com/send?phone=5585981015490', '_blank');
  const openInstagram = () => window.open('https://www.instagram.com/finon.bpo/', '_blank');

  return (
    <div style={{ margin: '0 auto', overflowX: 'hidden' }}>
      <header>
        <nav>
          {isAdminMode ? (
          <button
          onClick={() => setIsAdminMode(false)}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
        >
          Sair do modo administrador
        </button>
        
          ) : (
            <FaUser
            onClick={() => setShowLoginModal(true)}
            className="absolute top-2 right-2 cursor-pointer"
          />
          )}
        </nav>
      </header>

      {isAdminMode && <ProductManagement />}

      {showLoginModal && (
        <Modal className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 bg-gray-900">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Modo Administrador</h2>
            <input
              type="text"
              placeholder="Usuário"
              value={inputCredentials.username}
              onChange={(e) => setInputCredentials({ ...inputCredentials, username: e.target.value })}
              className="w-full px-3 py-2 border rounded-md mb-4"
            />
            <input
              type="password"
              placeholder="Senha"
              value={inputCredentials.password}
              onChange={(e) => setInputCredentials({ ...inputCredentials, password: e.target.value })}
              className="w-full px-3 py-2 border rounded-md mb-4"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-md mb-4"
            >
              Entrar
            </button>
            {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
            <button
              onClick={() => setShowLoginModal(false)}
              className="w-full bg-gray-300 hover:bg-gray-400 py-2 rounded-md"
            >
              Fechar
            </button>
          </div>
        </Modal>
      )}

      <Navbar />
      <Banner
  images={[
    { url: banner1, alt: "Descrição da imagem 1" },
    { url: banner2, alt: "Descrição da imagem 2" },
  ]}
/>
      <div id="feedback"><Feedback /></div>
      <div id="cta"><CTA /></div>
      <div id="home"><Hero /></div>
    {/*}  <div id="categories"><Categories /></div>
      <div id="cards"><Cards /></div>
     
*/}

<div id="footer"><Footer /></div>z
      {/* Ícone do WhatsApp flutuante */}
      <div
        className="whatsapp-icon"
        onClick={openWhatsApp}
        style={{
          backgroundColor: 'green',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
          zIndex: '1000',
        }}
      >
        <FaWhatsapp size={30} color="#fff" />
      </div>
    </div>
  );
};

export default App;
