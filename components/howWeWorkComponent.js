import { AiOutlineDatabase, AiOutlineFileText, AiOutlineLineChart, AiOutlinePieChart } from 'react-icons/ai';

const DataAnalysisMap = () => {
  return (
    <div className="py-8" id="howWeWorkComponent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text" data-aos="fade-up">
        ¿Cómo trabajamos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md" data-aos="fade-right">
            <AiOutlineDatabase className="text-3xl md:text-4xl text-[#7ED957] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#7ED957]">Distribución eficiente:</h3>
            <p className="text-white text-sm md:text-base">
            Gestionamos la logística de la cadena de suministro desde los proveedores hasta los clientes finales. Nos aseguramos de que los alimentos lleguen en condiciones óptimas y en el tiempo acordado. Nuestro objetivo es proporcionar una entrega rápida y confiable, optimizando los procesos logísticos para garantizar la satisfacción del cliente.
            </p>
          </div>
          <div className="p-4 border pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md" data-aos="fade-left">
            <AiOutlineFileText className="text-3xl md:text-4xl text-[#7ED957] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#7ED957]">Gestión de inventario:</h3>
            <p className="text-white text-sm md:text-base">
            Proporcionamos a nuestros clientes un sistema de gestión de inventario eficiente. Utilizamos herramientas o software que les permiten realizar un seguimiento en tiempo real de sus productos, controlar las existencias y recibir notificaciones sobre la disponibilidad y la necesidad de reabastecimiento. Esto facilita la planificación y el control de inventario, optimizando los procesos de almacenamiento y reabastecimiento de alimentos.
            </p>
          </div>
          <div className="p-4 border pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md" data-aos="fade-right">
            <AiOutlineLineChart className="text-3xl md:text-4xl text-[#7ED957] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#7ED957]">Embalaje y etiquetado especializado:</h3>
            <p className="text-white text-sm md:text-base">
            Ofrecemos servicios de embalaje y etiquetado especializados para garantizar la seguridad y frescura de los alimentos durante el transporte. Utilizamos materiales de embalaje adecuados y opciones de etiquetado personalizado para proteger y facilitar la identificación de los productos.
             </p>
          </div>
          <div className="p-4 border pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md" data-aos="fade-left">
            <AiOutlinePieChart className="text-3xl md:text-4xl text-[#7ED957] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#7ED957]">Seguimiento y rastreo:</h3>
            <p className="text-white text-sm md:text-base">
            Implementamos un sistema de seguimiento y rastreo en tiempo real. Utilizamos tecnologías como GPS y códigos de barras para proporcionar a nuestros clientes visibilidad sobre la ubicación y el estado de sus envíos. Nuestro objetivo es brindar tranquilidad y confianza, permitiendo a los clientes monitorear el progreso de sus entregas y estar informados en todo momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisMap;
