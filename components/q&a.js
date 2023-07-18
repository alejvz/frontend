import { useState } from 'react';

const PreguntasRespuestas = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const preguntasRespuestas = [
    {
      pregunta: '¿Cuál es el objetivo de Lulai foodtech?',
      respuesta:
        'Nuestro objetivo es revolucionar la industria de alimentos proporcionando soluciones logísticas responsables y eficientes para garantizar una entrega segura y fresca de los productos a nuestros clientes.',
    },
    {
      pregunta: '¿Qué tipo de alimentos entregamos?',
      respuesta:
        'Entregamos una amplia variedad de alimentos, desde productos frescos como frutas, verduras y productos lácteos, hasta productos procesados ​​y envasados, como snacks saludables y platos preparados.',
    },
    {
      pregunta: '¿Cómo garantizamos la calidad de los alimentos entregados?',
      respuesta:
        'Nos asociamos con proveedores de alimentos confiables que cumplen con estrictos estándares de calidad y seguridad alimentaria. Además, seguimos prácticas de manipulación y transporte adecuadas para preservar la frescura y la calidad de los alimentos durante la entrega.',
    },
  ];

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-8" id="Q&A"> {/* Agrega px-4 md:px-8 para agregar márgenes laterales */}
      <h2 className="text-white text-2xl text-center font-bold mb-4">Preguntas y Respuestas</h2>
      <div className="grid gap-4">
        {preguntasRespuestas.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg"
            data-aos="fade-up"
          >
            <div
              className={`flex justify-between items-center cursor-pointer ${
                expandedIndex === index ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg font-semibold">{item.pregunta}</h3>
              <span className="text-gray-600">
                {expandedIndex === index ? '-' : '+'}
              </span>
            </div>
            {expandedIndex === index && (
              <div className="mt-4">
                <p className="text-gray-800">{item.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasRespuestas;


