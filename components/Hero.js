import { FaArrowDown } from 'react-icons/fa';
import TractorAnimation from './tractor';
import { motion } from 'framer-motion';

const DemandPredictionSoftware = () => {
  const pulseVariants = {
    initial: {
      y: 0, // Posición inicial del botón
    },
    animate: {
      y: 20, // Posición final del botón
      transition: {
        duration: 1, // Duración de la animación en segundos
        repeat: Infinity, // Repetir la animación indefinidamente
        repeatType: "reverse", // Invertir la animación al repetirse
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <TractorAnimation />
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-yellow-500 text-transparent bg-clip-text" data-aos="zoom-out-left">
        Transformando la distribución de alimentos con tecnología innovadora
      </h1>
      <p className="text-base sm:text-lg text-white mb-8" data-aos="zoom-out-right">
        Saborea el futuro: la solución foodtech que lleva alimentos frescos directamente a tu puerta
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


