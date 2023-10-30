import React from 'react';
import mulher from '../assets/voa-mente.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const backgroundStyle = {
    background: 'linear-gradient(185deg, #a3bfd9, #F2A2A2)',
    clipPath: 'polygon(0 , 100% 0, 100% 90%, 0% 100%)',
  };

  return (
    <div className='w-full py-1 md:py-40 align-center' style={backgroundStyle}>
      <div className='md:max-w-[1580px] m-auto grid md:grid-cols-2 max-w-[800px] px-4 md:px-0'>

        {/* Texto à esquerda */}
        <motion.div
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.1, ease: 'easeOut' }}
          ref={ref}
          className='flex flex-col justify-start gap-5 md:ml-0 md:ml-2 mt-1'
        >
          <p className='py-2 text-2xl text-[#a43494] font-medium'></p>
          <h1 className='md:leading-[72px] py-2 md:text-6xl text-4xl mb-10 ml-8 text-[#313131] mr-8'>
            Inovamos com um serviço <span className='text-[#fff]'>simples e de baixo custo</span> para facilitar a sua rotina diária
          </h1>
          <p className='max-w-[800px] mb-10 py-1 px-10 text-lg md:text-2xl text-white leading-relaxed'>
            Somos apaixonados por empreendedorismo e queremos transformar a economia nacional ajudando Pessoas e Empresas na sua gestão financeira.
          </p>
        </motion.div>

        {/* Imagem à direita */}
        <img
          src={mulher}
          className='h-50 w-90 mb-10 mx-auto md:mx-0 mt-2 md:h-50 md:w-90 md:order-1' // Manter a imagem após o título na visualização móvel
          alt='Multimedia'
        />
      </div>
    </div>
  );
};

export default CTA;
