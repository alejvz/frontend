import React from "react";

const ServicesComponent = () => {
  return (
    <div className="flex flex-wrap justify-center items-center py-8">
      <div className="w-full">
        <h2 className="text-white text-2xl font-bold text-center mb-8">
          Nuestros Servicios
        </h2>
      </div>
      <div
        className="w-full md:w-1/2 lg:w-1/3 p-4"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 shadow-md p-4 rounded-md">
          <h3 className="text-xl font-bold mb-2">Servicio 1</h3>
          <p className="text-gray-700">
            Descripción del servicio 1. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed mattis ex eget nibh dictum
            efficitur.
          </p>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 lg:w-1/3 p-4"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 shadow-md p-4 rounded-md">
          <h3 className="text-xl font-bold mb-2">Servicio 2</h3>
          <p className="text-gray-700">
            Descripción del servicio 2. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed mattis ex eget nibh dictum
            efficitur.
          </p>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 lg:w-1/3 p-4"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 shadow-md p-4 rounded-md">
          <h3 className="text-xl font-bold mb-2">Servicio 3</h3>
          <p className="text-gray-700">
            Descripción del servicio 3. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed mattis ex eget nibh dictum
            efficitur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;


