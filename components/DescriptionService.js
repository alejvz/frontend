import { useState } from 'react';
import { FaRegLightbulb, FaQuestionCircle } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { MdDataUsage } from 'react-icons/md';
import { RiCustomerService2Line } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';
import { IoIosAnalytics } from 'react-icons/io';

const DescriptionService = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const nuevaInformacion = [
    {
      titulo: 'Tecnología de Lenguaje Natural Avanzada',
      descripcion: 'Potencia tu negocio con la capacidad de comprender y responder en lenguaje natural gracias a la potencia combinada de LLAMA 2 y GPT-4, dos de las últimas innovaciones en inteligencia artificial.',
      icono: <FaRegLightbulb />,
    },
    {
      titulo: 'Soporte Ininterrumpido las 24/7',
      descripcion: 'Ofrece atención sin interrupciones a tus usuarios en cualquier momento del día. Nuestra IA está diseñada para simular interacciones humanas, brindando respuestas instantáneas y relevantes como si estuvieran hablando con un agente en vivo.',
      icono: <RiCustomerService2Line />,
    },
    {
      titulo: 'Amplia Base de Información',
      descripcion: 'Centraliza toda la información relevante de tu negocio en nuestra plataforma. Sube preguntas frecuentes, detalles de productos y servicios, políticas y más, para que los usuarios obtengan respuestas precisas sin tener que buscar en múltiples lugares.',
      icono: <AiOutlineInfoCircle />,
    },
    {
      titulo: 'Conversaciones Guiadas',
      descripcion: 'Define los límites de las conversaciones. Nuestra IA se centrará en los temas específicos que determines, asegurando que las interacciones sean coherentes y útiles para tus usuarios, sin salirse de los parámetros establecidos.',
      icono: <BsChatDots />,
    },
    {
      titulo: 'Identificación de Intenciones',
      descripcion: 'Utiliza la inteligencia artificial para analizar las intenciones detrás de las conversaciones. Clasifica automáticamente los temas y temas discutidos en los chats para comprender mejor las necesidades y preocupaciones de tus usuarios.',
      icono: <FaQuestionCircle />,
    },
    {
      titulo: 'Respuestas Contextuales',
      descripcion: 'Adapta el comportamiento de la IA según el contexto. Puedes personalizar cómo responde en diferentes situaciones, asegurando que la experiencia sea adecuada para cada usuario y escenario.',
      icono: <TiMessages />,
    },
    {
      titulo: 'Extracción de Datos Precisos',
      descripcion: 'Extrae la información relevante de las conversaciones. Nuestra IA es capaz de identificar y capturar datos importantes de manera precisa, lo que facilita la recopilación de información valiosa para análisis posteriores.',
      icono: <MdDataUsage />,
    },
    {
      titulo: 'Presencia en Diversos Canales',
      descripcion: 'Lleva tu IA a donde están tus usuarios. Con la omnicanalidad, puedes integrar el bot en múltiples plataformas de chat, desde WhatsApp y Messenger hasta Instagram, Telegram y más, para que tus usuarios elijan su canal preferido.',
      icono: <IoIosAnalytics />,
    },
    // ... (agrega las demás características aquí)
  ];
  

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-8" id="DescriptionService">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r bg-gradient-to-r from-[#38B6FF] to-[#ED0690] text-transparent bg-clip-text text-center mb-4">Caracteristicas </h2>
      <div className="grid grid-cols-2 gap-4">
        {nuevaInformacion.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg w-full "
            data-aos="fade-up"
          >
            <div
              className={`flex justify-between items-center cursor-pointer ${
                expandedIndex === index ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center">
                {item.icono}
                <h3 className="text-lg font-semibold ml-2">{item.titulo}</h3>
              </div>
              <span className="text-gray-600">
                {expandedIndex === index ? '-' : '+'}
              </span>
            </div>
            {expandedIndex === index && (
              <div className="mt-4">
                <p className="text-gray-800">{item.descripcion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionService;
