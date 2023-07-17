import React from 'react';
import { AiOutlineDatabase, AiOutlineFileText, AiOutlineLineChart, AiOutlinePieChart } from 'react-icons/ai';
import { GrGraphQl } from 'react-icons/gr';
import { useMediaQuery } from 'react-responsive';

const DataAnalysisMap = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  return (
    <div className="py-8">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text" data-aos="fade-up">
      Proceso de Análisis de Datos
    </h2>
    <div className={`grid grid-cols-1 ${isTabletOrMobile ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-8`}>
      <div className="p-6 border pr-9 pl-5 py-10 rounded-lg shadow-md" data-aos="fade-right">
        <AiOutlineDatabase className="text-4xl text-[#7ED957] mb-4 mx-auto" />
        <h3 className="text-xl font-bold mb-4 text-[#7ED957]">Recopilación de Datos</h3>
        <p className="text-white">
          En esta etapa, nuestro algoritmo recopila los datos necesarios para el análisis. Utilizamos una variedad de fuentes de datos, incluyendo bases de datos, encuestas y registros relevantes para la cadena de suministro de alimentos.
        </p>
        
      </div>
      <div className="p-6 border pr-9 pl-5 py-10 rounded-lg shadow-md" data-aos="fade-left">
        <AiOutlineFileText className="text-4xl text-[#7ED957] mb-4 mx-auto" />
        <h3 className="text-xl font-bold mb-4 text-[#7ED957]">Limpieza y Transformación</h3>
        <p className="text-white">
          Una vez recopilados los datos, nuestro algoritmo realiza un proceso de limpieza y transformación para garantizar que estén en el formato correcto y sean consistentes. Esto incluye la eliminación de datos incorrectos, duplicados o faltantes, así como la aplicación de transformaciones necesarias para el análisis eficiente.
        </p>
        
      </div>
      <div className="p-6 border pr-9 pl-5 py-10 rounded-lg shadow-md" data-aos="fade-right">
        <AiOutlineLineChart className="text-4xl text-[#7ED957] mb-4 mx-auto" />
        <h3 className="text-xl font-bold mb-4 text-[#7ED957]">Análisis de Datos</h3>
        <p className="text-white">
          En esta fase, aplicamos técnicas y herramientas estadísticas avanzadas para extraer información valiosa y conocimientos significativos de los datos recopilados en la cadena de suministro de alimentos.
        </p>
        
      </div>
      <div className="p-6 border pr-9 pl-5 py-10 rounded-lg shadow-md" data-aos="fade-left">
        <AiOutlinePieChart className="text-4xl text-[#7ED957] mb-4 mx-auto" />
        <h3 className="text-xl font-bold mb-4 text-[#7ED957]">Visualización y Comunicación</h3>
        <p className="text-white">
          Una vez completado el análisis, es crucial comunicar los resultados de manera clara y efectiva. Nuestra plataforma genera visualizaciones interactivas, gráficos informativos e informes detallados que permiten a los usuarios comprender y tomar decisiones basadas en los datos obtenidos.
        </p>
        
      </div>
    </div>
  </div>
</div>
  );
};

export default DataAnalysisMap;
