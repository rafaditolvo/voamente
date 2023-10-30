import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';

const Cards = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=5585981015490', '_blank');
  };

  return (
    <motion.div
      className='w-full py-10 px-5 bg-[#fff] shadow-lg rounded-lg hover:shadow-xl'
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      ref={ref}
    >
      <h1 className='text-4xl  text-[#333] text-center mb-6'>
        Planos de  <span className='text-[#A53692]'>Investimento Mensal</span>  
      </h1>
      <div className='max-w-[1200px] mt-10 grid md:grid-cols-3 gap-10 mx-auto'>
        {[
          {
            title: 'Pessoa Física',
            price: 'R$297,90',
            features: ['<strong>A partir de</strong>'],
          },
          {
            title: 'Pessoa Jurídica (MEI)',
            price: 'R$397,90',
            features: ['<strong>A partir de</strong>'],
          },
          {
            title: 'Pessoa Jurídica (SN)',
            price: 'R$697,90',
            features: ['<strong>A partir de</strong>'],
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className='w-full bg-white shadow-lg p-6 rounded-lg hover:shadow-xl duration-300'
          >
            <div className='bg-[#A53692] text-white text-center font-bold py-2 rounded-tl-lg rounded-tr-lg'>
              {card.title}
            </div>
            <div className='mt-4 text-center'>
              {card.features.map((feature, i) => (
                <p
                  key={i}
                  className='flex items-center text-bold justify-center text-[#333] py-2'
                  dangerouslySetInnerHTML={{ __html: feature }}
                />
              ))}
            </div>
            <p className='text-3xl mt-2 font-bold text-center py-2 text-[#A53692]'>
              {card.price}
            </p>
            <button
              onClick={openWhatsApp}
              className='bg-[#A53692] text-white w-full rounded-full font-semibold  my-4 px-6 py-4 hover:bg-[#27FFE9] transition duration-300 flex items-center justify-center'
            >
              <FaWhatsapp className='text-3xl mr-2' /> Tenho Interesse
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Cards;
