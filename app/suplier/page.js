'use client'
import React, { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <a href="/" className="flex items-center text-orange-600 hover:text-gray-800 mb-4">
        <IoArrowBack className="mr-2" />
        Volver al menú principal
      </a>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <FaSpinner className="animate-spin text-4xl text-gray-500" />
        </div>
      ) : (
        <div className="w-full max-w-sm md:max-w-lg overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe2wE879coesYb3hUnv2CFBFurQJBLdIe4ytOLP8PAXyAYHDw/viewform?embedded=true"
            width="100%"
            height="1800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Cargando...
          </iframe>
        </div>
      )}
    </div>
  );
};

export default Contact;
