import React, {useState, useEffect} from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
} from 'react-icons/fa';
import finonLogo from '/Volumes/Storage/Desenvolvimento/e-shop/frontend/landing-page/src/assets/logo-vm.png';

const Footer = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Atualiza o estado quando o tamanho da tela muda
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setToggle(false); // Feche o menu após clicar em uma opção
    }
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

  return (
    <div style={{ background: 'bg-gradient-to-b from-[#E6B8D9] to-[#C4F2E9]' }} className='max-w-[1240px] mx-auto py-16 px-4 flex flex-col md:flex-row justify-between text-gray-300'>

      {/* Left Section */}
      <div className='md:w-1/3'>
        <div className='flex items-center'>
          <img src={finonLogo} alt='Logo' className='w-25 h-14 mr-2' />
        </div>
        <div className='mt-4'>
          <p className='text-[#000]'>Um caminho simples</p>
          <p className='text-[#000]'>para o sucesso financeiro</p>
        </div>

        {/* Desktop Social Icons */}
        <div className='hidden md:flex mt-6 space-x-4'>
          <FaFacebookSquare onClick={openFacebook} color='#A53692' size={30} />
          <FaInstagram onClick={openInsta} color='#A53692' size={30} />
          <FaLinkedinIn onClick={openLinkedin} color='#A53692' size={30} />
        </div>

        {/* Mobile Social Icons */}
        <div className='mt-6 flex justify-start space-x-8 md:hidden'>
          <FaFacebookSquare onClick={openFacebook} color='#A53692' size={30} />
          <FaInstagram onClick={openInsta} color='#A53692' size={30} />
          <FaLinkedinIn onClick={openLinkedin} color='#A53692' size={30} />
        </div>

      </div>

    

      {/* Right Section */}
      <div className='mt-8 md:mt-0 md:w-1/3 md:text-right'>
          {/* Middle Section */}
      <div className='mt-6 md:mt-0 md:w-2/3'>
       
      </div>
      <div className={`mb-5 ${windowWidth < 768 ? 'ml-0' : 'ml-12'}`} ><ul className='flex flex-wrap space-y-2 md:space-y-0 md:space-x-3'>
         
         <li
           className='text-[#000] w-full md:w-auto cursor-pointer hover:text-[#a43494] hover:font-bold relative'
           onClick={() => scrollToSection('home')}
         >
           Início
           <div className=' text-[#000] absolute bottom-0 left-0 right-0 h-0.5 bg-[#a43494] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
         </li>
         <li
           className=' text-[#000] w-full md:w-auto cursor-pointer  hover:text-[#a43494] hover:font-bold relative'
           onClick={() => scrollToSection('cta')}
         >
           Quem Somos
           <div className='text-[#000] absolute bottom-0 left-0 right-0 h-0.5 bg-[#a43494] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
         </li>

         <li
           className=' text-[#000] w-full md:w-auto cursor-pointer  hover:text-[#a43494] hover:font-bold relative'
           onClick={() => scrollToSection('custos')}
         >
           Custos
           <div className='text-[#000] absolute bottom-0 left-0 right-0 h-0.5 bg-[#a43494] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
         </li>
         <li
           className='text-[#000] w-full md:w-auto cursor-pointer hover:text-[#a43494] hover:font-bold relative'
           onClick={() => scrollToSection('categories')}
         >
           Serviços
           <div className='text-[#000] absolute bottom-0 left-0 right-0 h-0.5 bg-[#a43494] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
         </li>
         <li
           className='text-[#000] w-full md:w-auto cursor-pointer hover:text-[#a43494] hover:font-bold relative'
           onClick={() => scrollToSection('cards')}
         >
           Planos
           <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#a43494] transform scale-x-0 transition-transform ease-in-out group-hover:scale-x-100'></div>
         </li>
       </ul></div>
        
        <div> <h6 className='font-medium text-[#A53692] mt-8'>Endereço</h6>
        <ul>
          <li className='py-2 text-sm text-[#000] '>R. Osvaldo Cruz, 2133 - Sala 04 - Dionísio Torres</li>
        </ul>
        <h6 className='font-medium text-[#A53692] mt-4 md:mt-0'>Telefone</h6>
        <ul>
          <li className='py-2 text-sm text-[#000]'>(85) 3063-5490</li>
        </ul></div>
       
      </div>

    </div>
  );
};

export default Footer;
