import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import investiment from '../assets/moca.png';
import ome from '../assets/ome.png';
import '../App.css'

const Achievement = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [topPositionClass, setTopPositionClass] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile view
        setTopPositionClass('image-container-mobile');
      } else {
        // Desktop view
        setTopPositionClass('image-container-desktop');
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener to handle window resizing
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotate: 0 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <motion.div
    className='w-full bg-white py-10 md:py-10'
    initial='hidden'
    animate={inView ? 'visible' : 'hidden'}
    ref={ref}
  >
    <div className='md:max-w-[1280px] mx-auto'>
      <h1 className='text-4xl md:text-5xl mt-2 text-[#313131] text-center'>
        Economize até <span className='text-[#A53692]'>R$ 25.682,40</span> por ano com a FinOn!
      </h1>
    </div>

    <div className='md:max-w-[1180px] mt-10 mx-auto grid md:grid-cols-2 md:gap-10 max-w-[600px] px-4 md:px-10 lg:px-10'>
      {/* Card 1 */}
      <motion.div
        variants={cardVariants}
        className={`rounded-lg shadow-md mt-5 p-6 ${topPositionClass}`} // Aplicar a classe de posição superior ao primeiro card
        style={{
          background: 'linear-gradient(185deg, #9e56cf, #A53692)',
        }}
      >
        <div className='bg-[#F1FAFE] p-10 rounded-lg shadow-md relative'>
          <h2 className='text-xl md:text-2xl font-semibold'>Custo Funcionário CLT (mensal)</h2>
          <ul className='list-none mt-5 list-inside text-gray-700'>
            <li className='mb-2'>Salário: <span className="text-[#ff0000]">R$ 1.500,00</span></li>
            <li className='mb-2'>Vale Transporte: <span className="text-[#ff0000]">R$ 99,00</span></li>
            <li className='mb-2'>Vale Alimentação: <span className="text-[#ff0000]">R$ 264,00</span></li>
            <li className='mb-2'>FGTS: <span className="text-[#ff0000]">R$ 120,00</span></li>
            <li className='mb-2'>INSS Patronal: <span className="text-[#ff0000]">R$ 300,00</span></li>
            <li className='mb-2'>13º Salário: <span className="text-[#ff0000]">R$ 125,00</span></li>
            <li className='mb-2'>Férias: <span className="text-[#ff0000]">R$ 166,65</span></li>
            <li className='mb-2'>Encargos s/13º e Férias: <span className="text-[#ff0000]">R$ 118,95</span></li>
            <li className='mb-2'>Multa Rescisória: <span className="text-[#ff0000]">R$ 60,00</span></li>
          </ul>
          <p className='font-semibold text-xl md:text-2xl mt-4 text-gray-800'>
            TOTAL POR MÊS: <span className="text-[#ff0000]">R$ 2.753,60</span>
          </p>
            <div className='image-container' style={{ position: 'relative', top: '40px' }}>
            <img
              src={ome}
              className='md:order-last h-30 w-90 order-first rounded-xl mx-auto md:mx-0 mt-5'
              alt='Multimedia'
            />
          </div>
          </div>
          


        </motion.div>
      
       
          {/* Card 2 */}
          <motion.div
          variants={cardVariants}
          className={`rounded-l mt-5 shadow-md p-6 ${topPositionClass}`} // Aplicar a classe de posição superior ao segundo card
          style={{
            background: 'linear-gradient(185deg, #9e56cf, #A53692)',
          }}
        >
          <div className='bg-[#F1FAFE] p-10 rounded-lg shadow-md relative'>
            <h2 className='text-xl md:text-2xl font-semibold'>Custo FinOn (mensal – plano PJ)</h2>
            <ul className='list-none mt-5 list-inside text-gray-700'>
              <li className='mb-2'>Mensalidade: <span className="text-[#A53692]">R$ 697,90</span></li>
              <li className='mb-2'>Vale Transporte: <span className="text-[#A53692] text-decoration-line-through">R$ 0,00</span></li>
              <li className='mb-2'>Vale Alimentação: <span className="text-[#A53692] text-decoration-line-through">R$ 0,00</span></li>
              <li className='mb-2'>FGTS: <span className="text-[#A53692] text-decoration-line-through">R$ 0,00</span></li>
              <li className='mb-2'>INSS Patronal: <span className="text-[#A53692] text-decoration-line-through">R$ 0,00</span></li>
              <li className='mb-2'>13º Salário: <span className="text-[#A53692] text-decoration-line-through">R$ 0,00</span></li>
              <li className='mb-2'>Férias: <span className="text-[#A53692] text-decoration-line-through">R$ 0,00</span></li>
              <li className='mb-2'>Encargos s/13º e Férias: <span className="text-[#A53692] text-decoration-line-through">R$ 0,00</span></li>
              <li className='mb-2'>Multa Rescisória: <span className="text-[#A53692] text-decoration-line-through">R$ 0,00</span></li>
            </ul>
            <p className='font-semibold text-xl md:text-2xl mt-4 text-[#000]'>
              TOTAL POR MÊS: <span className="text-[#A53692]">R$ 697,90</span>
            </p>
            <div className='image-container' style={{ position: 'relative', top: '40px' }}>
            <img
              src={investiment}
              className='md:order-last h-30 w-90 order-first rounded-xl mx-auto md:mx-0 mt-5'
              alt='Multimedia'
            />
          </div>
          </div>
          


          
        </motion.div>
                {/* Card 2 
                
                
                
                
                  <div className='bg-[#F1FAFE] p-12 rounded-lg shadow-md relative'>
          <h1 className='text-xl md:text-2xl font-semibold'>Custo Funcionário CLT (mensal)</h1>
          <ul className='list-none mt-5 list-inside text-gray-700'>
            <li className='mb-2'>Salário: <span className="text-[#ff0000]">R$ 1.500,00</span></li>
            <li className='mb-2'>Vale Transporte: <span className="text-[#ff0000]">R$ 99,00</span></li>
            <li className='mb-2'>Vale Alimentação: <span className="text-[#ff0000]">R$ 264,00</span></li>
            <li className='mb-2'>FGTS: <span className="text-[#ff0000]">R$ 120,00</span></li>
            <li className='mb-2'>INSS Patronal: <span className="text-[#ff0000]">R$ 300,00</span></li>
            <li className='mb-2'>13º Salário: <span className="text-[#ff0000]">R$ 125,00</span></li>
            <li className='mb-2'>Férias: <span className="text-[#ff0000]">R$ 166,65</span></li>
            <li className='mb-2'>Encargos s/13º e Férias: <span className="text-[#ff0000]">R$ 118,95</span></li>
            <li className='mb-2'>Multa Rescisória: <span className="text-[#ff0000]">R$ 60,00</span></li>
          </ul>
          <p className='font-semibold text-xl md:text-2xl mt-4 text-gray-800'>
            TOTAL POR MÊS: <span className="text-[#ff0000]">R$ 2.753,60</span>
          </p>
          <div className='image-container' style={{ position: 'relative', top: '100px' }}>
          <img src={ome} className='md:order-last h-90 w-full order-first rounded-xl mx-auto md:mx-0 ' alt='Multimedia' />
        </div>
        </div>*/}


         {/* Card 2 */}
      
          {/* Adicione o badge "Melhor Escolha" */}
          {/* <div className='absolute top-1 right-1 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-md'>
            Melhor Escolha
          </div>*/}
         
          


          

    
      
      </div>
    </motion.div>
  );
};

export default Achievement;
