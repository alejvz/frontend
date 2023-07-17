
import { motion } from 'framer-motion';
import { FaTruck} from 'react-icons/fa';

const TractorAnimation = () => {
  const initialPosition = 0; // Posición inicial fuera de la pantalla en el lado izquierdo
  const tractorWidth = 1000; // Ancho del tractor
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0; // Ancho de la pantalla

  return (
    <div>
      <motion.div
        initial={{ x: initialPosition }}
        animate={{ x: screenWidth }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'loop' }}
        className="text-orange-500"
        style={{ width: tractorWidth }}
      >
        <FaTruck className="text-6xl" />
      </motion.div>
    </div>
  );
};

export default TractorAnimation;
