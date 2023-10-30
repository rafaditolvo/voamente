import React, { useState, useEffect } from 'react';
import { logo, lock, hamburgerMenu, close } from '../assets';
import logovm from '/Volumes/Storage/Desenvolvimento/e-shop/frontend/landing-page/src/assets/logo-vm.png';
import { FaFacebookF, FaDribbble, FaLinkedinIn, FaInstagram, FaBehance } from 'react-icons/fa';
import ProductManagement from './ProductManagement';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const handleClick = () => setToggle(!toggle);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setToggle(false); 
    }
  };

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=5585981015490', '_blank');
  };

  const openInsta = () => {
    window.open('https://www.instagram.com/finon.bpo/')
  }

  const openFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=61551070980733&mibextid=ZbWKwL')
  }

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/finonbpo')
  }
  //// https://www.facebook.com/profile.php?id=61551070980733&mibextid=ZbWKwL

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <div className={`w-full h-[75px] bg-white ${isDesktop ? 'ml-8' : ''}`}>
    
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
        
        
        <img onClick={() => scrollToSection('home')} src={logovm} alt='LOGO' className='h-[55px] ml-5 mt-3' />
       

        <div className='hidden md:flex items-center '>
          <ul className='flex gap-6'>
            <li
              className='cursor-pointer hover:text-[#f2a2a2] hover:font-bold relative'
              onClick={() => scrollToSection('home')}
            >
              Início
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a2a2] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
            </li>
            <li
              className='cursor-pointer hover:text-[#f2a2a2] hover:font-bold relative'
              onClick={() => scrollToSection('cta')}
            >
              Quem Somos
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a2a2] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
            </li>
            <li
              className='cursor-pointer hover:text-[#f2a2a2] hover:font-bold relative'
              onClick={() => scrollToSection('categories')}
            >
              Serviços
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a2a2] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
            </li>
           
            <li
              className='cursor-pointer hover:text-[#f2a2a2] hover:font-bold relative'
              onClick={() => scrollToSection('cards')}
            >
              Planos
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a2a2] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
            </li>
            {/* Adicione mais itens do menu da mesma forma */}
          </ul>
        </div>

        <div className='hidden md:flex'>
  <div className="flex items-center">
    <a href='https://www.instagram.com/finon.bpo/' target="_blank" rel="noopener noreferrer">
      <FaInstagram  size={10} className="w-6 h-5 mr-5 text-[#f2a2a2]" />
    </a>
    <a href='https://www.facebook.com/profile.php?id=61551070980733&mibextid=ZbWKwL'  target="_blank" rel="noopener noreferrer">
      <FaFacebookF size={10} alt="Facebook" className="w-6 h-4 mr-5 text-[#f2a2a2]" />
    </a>
    <a href="https://www.linkedin.com/in/finonbpo" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn  alt="LinkedIn" size={10} className="w-6 h-5 mr-5 text-[#f2a2a2]" />
    </a>
  </div>
  <button onClick={openWhatsApp} className='px-2 py-3 mr-10 rounded-md bg-[#f2a2a2] text-white font-bold hover:bg-white hover:text-[#f2a2a2] hover:border-[#f2a2a2] hover:border-2 transition-all duration-300'>
    Entre em Contato
  </button>
</div>

        <div className='md:hidden' onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b' : 'hidden'}>
     
        <ul>
                 {/* Mobile Social Icons */}
<div className='mt-6 flex justify-start space-x-10 md:hidden'>
  <FaFacebookF  onClick={openFacebook} color='#f2a2a2' size={30} />
  <FaInstagram onClick={openInsta} color='#f2a2a2' size={30} />
  <FaLinkedinIn onClick={openLinkedin} color='#f2a2a2' size={30} />
</div>

<div className='space-y-6 mt-5'>    <li
            className='cursor-pointer hover:text-[#f2a2a2] mt-8 hover:font-bold relative'
            onClick={() => scrollToSection('home')}
          >
            Início
            <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a2a2] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
          </li>
          <li
            className='cursor-pointer hover:text-[#f2a2a2] hover:font-bold relative'
            onClick={() => scrollToSection('cta')}
          >
            Quem Somos
            <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a2a2] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
          </li>
          <li
            className='cursor-pointer hover:text-[#f2a2a2] hover:font-bold relative'
            onClick={() => scrollToSection('categories')}
          >
            Serviços
            <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a2a2] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
          </li>
          <li
              className='cursor-pointer hover:text-[#f2a2a2] hover:font-bold relative'
              onClick={() => scrollToSection('custos')}
            >
              Custos
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a2a2] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
            </li>
          <li
            className='cursor-pointer hover:text-[#f2a2a2] hover:font-bold relative'
            onClick={() => scrollToSection('cards')}
          >
            Planos
            <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a2a2] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
          </li>
          {/* Adicione mais itens do menu da mesma forma */}</div>
          <button
  onClick={openWhatsApp}
  className='px-6 py-3 rounded-md m8-5 mt-8 bg-[#f2a2a2] text-white font-bold'
>
  Entre em Contato
</button>
        </ul>
        <div className='flex flex-col my-4 gap-4'>
    
        </div>
      </div>
    </div>
  );
};

export default Navbar;
