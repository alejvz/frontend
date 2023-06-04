import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import CountUp from 'react-countup';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

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
    <div className="px-6 py-6 lg:px-16 w-full lg:h-[500px] z-[10] bg-cover bg-fixed flex justify-center items-center">
      <div className={`z-50 flex flex-col md:flex-row justify-between items-center gap-5 w-full text-white ${isMobile ? 'flex-col' : ''} ${isTablet ? 'flex-col' : ''}`}>
        <div className="border pr-9 pl-5 py-10 rounded-lg w-full md:w-1/4" data-aos="fade-up-right">
          <div className="flex flex-col items-center mb-4">
            <p className='text-[40px] font-bold '>{<CountUp start={0} duration={2.75} end={34000} />}MB</p>
            <p className='text-[20px] font-500'>Volumen procesados</p>
          </div>
          <div className="flex flex-col items-center mb-4">
            <p className='text-[40px] font-bold '>{<CountUp start={0} duration={2.75} end={1200} />}GB</p>
            <p className='text-[20px] font-500'>Almacenamiento utilizado</p>
          </div>
          <div className="flex flex-col items-center">
            <p className='text-[40px] font-bold '>{<CountUp start={0} duration={2.75} end={50} />}%</p>
            <p className='text-[20px] font-500'>Uso de capacidad</p>
          </div>
        </div>

        <div className="border pr-9 pl-5 py-10 rounded-lg w-full md:w-3/4" data-aos="fade-up-left">
          <div>
            <Line data={data} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandComparisonChart;




