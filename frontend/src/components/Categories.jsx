import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineCurrencyDollar, HiOutlineDocumentText, HiOutlineCreditCard } from 'react-icons/hi';

const Categories = () => {
  const categoryData = [
    { icon: <HiOutlineCurrencyDollar size={30} color="black" />, title: 'Registro e controle de contas a pagar.' },
    { icon: <HiOutlineDocumentText size={30} color="black" />, title: 'Emissão e envio de notas fiscais.' },
    { icon: <HiOutlineCurrencyDollar size={30} color="black" />, title: 'Registro e controle de contas a receber.' },
    { icon: <HiOutlineDocumentText size={30} color="black" />, title: 'Emissão e envio de boletos.' },
    { icon: <HiOutlineCurrencyDollar size={30} color="black" />, title: 'Conciliação bancária completa.' },
    { icon: <HiOutlineCreditCard size={30} color="black" />, title: 'Conciliações de cartões de crédito.' },
    { icon: <HiOutlineDocumentText size={30} color="black" />, title: 'Agendamos seus pagamentos no Internet Banking.' },
    { icon: <HiOutlineDocumentText size={30} color="black" />, title: 'Enviamos a documentação para o seu contador.' },
    { icon: <HiOutlineDocumentText size={30} color="black" />, title: 'Envio de relatórios gerenciais.' },
  ];


  //Envio de relatórios gerenciais
  const renderCategoryCards = () => {
    return categoryData.map((category, index) => {
      const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });

      const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      };

      return (
        <motion.div
          key={index}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1, ease: 'easeOut' }}
       
          ref={ref}
          className='mb-4 p-1 md:p-2 w-full md:w-[calc(33.3333% - 1rem)]'
        >
          <div className='bg-white p-4 rounded-md shadow-lg hover:shadow-xl flex items-center space-x-2'>
            <div className='flex items-center justify-center w-12 h-12'>
              {category.icon}
            </div>
            <span className='text-lg font-semibold text-[#333] ml-4'>
              {category.title}
            </span>
          </div>
        </motion.div>
      );
    });
  };

  return (
    <div className='w-full bg-[#f7f7f7] py-8'>
      <div className='max-w-6xl mx-auto px-6 md:px-0'>
        <h1 className='text-[#333] text-4xl  mb-8 text-center'>
          Nossos <span className='text-[#A53692]'>Serviços</span>
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {renderCategoryCards()}
        </div>
      </div>
    </div>
  );
};

export default Categories;
