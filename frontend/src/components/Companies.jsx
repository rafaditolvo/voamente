import React from 'react';
import { motion } from 'framer-motion';
import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from '../assets';
import bradesco from '../assets/bancos-ico/bradesco.svg'
import santander from '../assets/bancos-ico/santander.svg'
import sicob from '/Users/rafael/Documents/Desenvolvimento/finon-landing-page/src/assets/bancos-ico/sicoob.svg'
import bb from '../assets/bancos-ico/bb.svg'
import inter from '../assets/bancos-ico/inter.svg'
import caixa from '../assets/bancos-ico/caixa.svg'
import sicredi from '../assets/bancos-ico/sicredi.svg'
import itau from '../assets/bancos-ico/itau.svg'
import banrisul from '../assets/bancos-ico/banrisul.svg'
import cora from '../assets/bancos-ico/icone-cora.svg'
import { useInView } from 'react-intersection-observer';

const Companies = () => {

  const banks = [
    { name: 'Bradesco', logo: bradesco },
    { name: 'Banrisul', logo: banrisul },
    { name: 'Banco do Brasil', logo: bb },
    { name: 'Santander', logo: santander },
    { name: 'Inter', logo: inter },
    { name: 'Itaú', logo: itau },
    { name: 'Caixa', logo: caixa },
    { name: 'Sicob', logo: sicob },
    { name: 'Sicredi', logo: sicredi },
    { name: 'Cora', logo: cora },
  ];
  const [ref, inView] = useInView({
    triggerOnce: false, // Permitir animar toda vez que você rolar até o conteúdo
    threshold: 0.1, // Porcentagem visível no viewport para acionar a animação (ajuste conforme necessário)
  });

  const logoVariants = {
    hidden: { x: '10%' }, // Comece fora da tela à direita
    visible: { x: 0, transition: { duration: 5, ease: 'linear' } }, // Mova-se para a esquerda com animação
  };

  const legendVariants = {
    hidden: { x: '10%', opacity: 0 }, // Comece fora da tela à direita e invisível
    visible: { x: 0, opacity: 1, transition: { duration: 5, ease: 'linear' } }, // Mova-se para a esquerda e torne-se visível
  };


  return (
    <div className='w-full bg-white py-12'>
      <div className='md:max-w-5xl m-auto px-4 md:px-2'>
        <h1 className='text-center text-4xl mt-5 mb-10 font-bold text-[#536E96]'>
          Trabalhamos com os principais bancos.
        </h1>
        <p className='text-center text-[#536E96] text-lg mb-10'>
          Efetuamos a conciliação bancária e a emissão de boletos para os seguintes bancos.
        </p>
        <div className='flex flex-wrap justify-center'>
          <motion.div className='grid grid-cols-2 md:grid-cols-10 gap-10' ref={ref}>
            {banks.map((bank, index) => (
              <div key={index} className='text-center'>
                <motion.img
                  src={bank.logo}
                  alt={bank.name}
                  variants={logoVariants}
                  initial='hidden'
                  animate={inView ? 'visible' : 'hidden'}
                  style={{ height: '100px' }}
                />
              <motion.p
  className={`text-bold text-sm mt-2 ${bank.shouldBeBold ? 'bold-text' : ''}`}
  variants={legendVariants}
  initial='hidden'
  animate={inView ? 'visible' : 'hidden'}
>
  {bank.name}
</motion.p>

              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Companies;