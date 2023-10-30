import React from 'react';
import multimedia from '../assets/voa-mente.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className='w-full bg-white'
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1, ease: 'easeOut' }}
      ref={ref}
    >
      <div className='md:max-w-[1680px] m-auto grid md:grid-cols-2 max-w-[800px] px-4 md:px-0'>
        <div className='flex flex-col justify-start gap-4  md:ml-16'>
          <p className='py-2 text-2xl text-[#a3bfd9] text-[#313131]'></p>
          <h1 className='md:leading-[72px] py-2 md:text-6xl text-4xl text-[#313131] mt-5 ml-3'>
           Título <span className='text-[#a3bfd9]'>Exemplo</span> Aqui
          </h1>
          <p className='py-2 px-2 text-xl sm:text-mt-2 md:text-2xl text-gray-600 mb-5 leading-relaxed ml-3'> {/* Alinhar o parágrafo com o subtítulo */}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Imagem na visão desktop (exibida apenas na visão desktop) */}
        <img
          src={multimedia}
          className='hidden md:flex md:order-last h-30 w-90 order-first rounded-xl mx-auto md:mx-0 mt-5 md:ml-8' 
          alt='Multimedia'
        />
      </div>

      {/* Imagem na visão móvel (exibida apenas na visão móvel) */}
      <img
        src={multimedia}
        className='md:hidden w-3/4 mx-auto mt-5' // Reduz o tamanho da imagem para metade
        alt='Multimedia'
      />
    </motion.div>
  );
};

export default Hero;
