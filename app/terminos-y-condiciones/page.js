'use client'
import Link from 'next/link';
import { FaArrowCircleLeft } from 'react-icons/fa';

const TerminosYCondicionesPage = () => {
  return (
    <div className="text-white container mx-auto py-8">
      <Link href="/">
        <span className="flex items-center text-orange-500 mb-4" data-aos="fade-up">
          <FaArrowCircleLeft className=" mr-2" />
          Volver al inicio
        </span>
      </Link>
      <h1 className="text-3xl font-bold mb-4" data-aos="fade-up">Términos y Condiciones</h1>
      <div className="prose" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-2">1. Introducción</h2>
        <p>
          Bienvenido a nuestra startup de foodtech. Estos términos y condiciones
          establecen los lineamientos y responsabilidades para el uso de nuestros
          servicios de logística responsable en la industria de alimentos.
        </p>
        {/* Agrega aquí los demás contenidos de tus términos y condiciones */}
      </div>
    </div>
  );
};

export default TerminosYCondicionesPage;


  
