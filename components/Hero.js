import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import TractorAnimation from './tractor';
import { motion } from 'framer-motion';

const DemandPredictionSoftware = () => {
  const pulseVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: 20,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen p-4"
      id="heroComponent"
      style={{
        backgroundImage: `url("/assets/026.jpg")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover', // You can adjust this as needed
      }}
    >
      <TractorAnimation />
      <h1
        className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-yellow-500 text-transparent bg-clip-text"
        data-aos="zoom-out-left"
      >
        Transformando la distribución de alimentos con tecnología innovadora
      </h1>
      <p className="text-base font-bold sm:text-lg text-white  mb-8" data-aos="zoom-out-right">
        Envíos eficientes y pronóstico preciso de demanda con IA. Optimización logística basada en algoritmos avanzados. Revoluciona tu logística con nuestra tecnología vanguardista.
      </p>
      <div data-aos="zoom-in">
        <motion.button
          variants={pulseVariants}
          animate="animate"
          className="bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        >
          Más información <FaArrowDown className="ml-2" />
        </motion.button>
      </div>
    </div>
  );
};

export default DemandPredictionSoftware;




