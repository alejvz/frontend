'use client'
import React, { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { FaSpinner } from 'react-icons/fa';


const farmerForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <a href="/" className="flex items-center text-orange-600 hover:text-white mb-4">
        <IoArrowBack className="mr-2" />
        Volver al menú principal
      </a>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <FaSpinner className="animate-spin text-4xl text-orange-500" />
        </div>
      ) : (
        <div className="w-full max-w-sm md:max-w-lg overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScBhNleqv2O7YEoyJ1bQtT1iQavi8QQho3NMaxwX_gqrmOtuQ/viewform?embedded=true"
            width="100%"
            height="1900"
          >
            Cargando...
          </iframe>
        </div>
      )}
    </div>
  );
};

export default farmerForm ;