'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';
import { FaSpinner } from 'react-icons/fa';

//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdLhMrMwBuybky9HjRKnaioeF_Jyo9-pEeGmCV3JvMTywhCuQ/viewform?embedded=true" width="640" height="4069" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>

const TrucksForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <Link href="/" className="flex items-center text-orange-600 hover:text-white mb-4">
        <IoArrowBack className="mr-2" />
        Volver al menú principal
      </Link>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <FaSpinner className="animate-spin text-4xl text-orange-500" />
        </div>
      ) : (
        <div className="w-full max-w-sm md:max-w-lg overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdLhMrMwBuybky9HjRKnaioeF_Jyo9-pEeGmCV3JvMTywhCuQ/viewform?embedded=true"
            width="100%"
            height="4800"
          >
            Cargando...
          </iframe>
        </div>
      )}
    </div>
  );
};

export default TrucksForm;