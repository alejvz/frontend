import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import CountUp from 'react-countup';
import { useMediaQuery } from 'react-responsive';

Chart.register(...registerables);

const DemandComparisonChart = () => {
  const [demandaReal, setDemandaReal] = useState([27, 31, 40, 14, 36, 30, 42, 11, 20, 40, 43, 44]);
  const [demandaPronosticada, setDemandaPronosticada] = useState([25, 29, 39, 15, 37, 29, 39, 12, 27, 39, 47, 47]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDemandaReal = [...demandaReal];
      const newDemandaPronosticada = [...demandaPronosticada];

      for (let i = 0; i < 12; i++) {
        newDemandaReal[i] = Math.floor(Math.random() * (50 - 10 + 1) + 10);
        newDemandaPronosticada[i] = Math.floor(Math.random() * (50 - 10 + 1) + 10);
      }

      setDemandaReal(newDemandaReal);
      setDemandaPronosticada(newDemandaPronosticada);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
      {
        label: 'Demanda Real',
        data: demandaReal,
        fill: false,
        borderColor: '#10B981',
        borderWidth: 5,
        tension: 0.4,
      },
      {
        label: 'Demanda Pronosticada',
        data: demandaPronosticada,
        fill: false,
        borderColor: '#FCD34D',
        borderWidth: 5,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });

  return (
    <div className="px-6 py-6 lg:px-16 w-full lg:h-[500px] z-[10] bg-cover bg-fixed flex flex-col justify-center items-center">
      <div className="text-center border border-gray-300 rounded-lg p-4 mb-4">
        <h1 className="text-3xl lg:text-2xl font-bold text-white mb-4 ">Somos una plataforma inteligente que toma decisiones en función de los datos. </h1>
        <h2 className="text-lg lg:text-xl font-medium text-white mb-4">Buscamos mejorar la cadena de suministro, haciendo más eficiente su distribución, algunos datos de reducción de costos:</h2>
      </div>

      <div className={`z-50 flex flex-col md:flex-row justify-between items-stretch gap-5 w-full text-white ${isMobile ? 'flex-col' : ''} ${isTablet ? 'flex-col' : ''}`}>
        <div className="text-center border rounded-lg flex-1 p-5" data-aos="fade-up-right">

          <p className={`text-3xl ${isMobile ? 'md:text-2xl' : 'md:text-4xl'} font-bold mb-2`}>
            <CountUp start={0} duration={2.75} end={20} />%
          </p>
          <p className={`text-lg ${isMobile ? 'md:text-base' : 'md:text-xl'} font-500 mb-2`}>Energía</p>


          <p className={`text-3xl ${isMobile ? 'md:text-2xl' : 'md:text-4xl'} font-bold mb-2`}>
            <CountUp start={0} duration={2.75} end={40} />%
          </p>
          <p className={`text-lg ${isMobile ? 'md:text-base' : 'md:text-xl'} font-500 mb-2`}>Tiempo</p>


          <p className={`text-3xl ${isMobile ? 'md:text-2xl' : 'md:text-4xl'} font-bold mb-2`}>
            <CountUp start={0} duration={2.75} end={90} />%
          </p>
          <p className={`text-lg ${isMobile ? 'md:text-base' : 'md:text-xl'} font-500 mb-2`}>Inventario óptimo</p>

        </div>

        <div className="border rounded-lg flex-1 p-5" data-aos="fade-up-left">
          <div className={`aspect-w-3 aspect-h-2 ${isMobile ? 'w-full' : ''}`}>
            
              <Line data={data} options={chartOptions} />
            
          </div>
        </div>
      </div>
    </div>

  );
};

export default DemandComparisonChart;




