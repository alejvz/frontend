import React from 'react';
import { IoArrowBack } from 'react-icons/io5';

const Contact = () => (
  <div className="flex flex-col items-center justify-center">
    <h1 className="text-2xl font-bold mb-4">Contacto</h1>
    <a href="/" className="flex items-center text-orange-600 hover:text-gray-800 mb-4">
      <IoArrowBack className="mr-2" />
      Volver al menú principal
    </a>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSe2wE879coesYb3hUnv2CFBFurQJBLdIe4ytOLP8PAXyAYHDw/viewform?embedded=true"
      width="740"
      height="1824"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      Cargando...
    </iframe>
  </div>
);

export default Contact;
