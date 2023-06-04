import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

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

  // Utilizar useMediaQuery para detectar el tamaño de la pantalla
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${isMobile ? 'p-4' : ''} ${isTablet ? 'p-8' : ''}`}>
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text" data-aos="zoom-out-left">Software de Predicción de Demanda</h1>
      <p className="text-lg text-white mb-8" data-aos="zoom-out-right">
        El software de predicción de demanda te ayuda a anticipar las necesidades de tus clientes y optimizar tu inventario.
      </p>
      <div ata-aos="zoom-in">
        <motion.button
          variants={pulseVariants}
          animate="animate"
          className="bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Comenzar ahora
        </motion.button>
      </div>
    </div>
  );
};

export default DemandPredictionSoftware;

