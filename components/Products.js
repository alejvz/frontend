import React, { useEffect } from 'react';
import Image from 'next/image';

const ProductDistribution = () => {
    useEffect(() => {
        // Initialize AOS when the component mounts
        if (typeof window !== 'undefined') {
            const AOS = require('aos');
            AOS.init({
                duration: 800, // Adjust the animation duration as needed
            });
        }
    }, []);

    return (
        <div className="bg-black p-8 text-white mb-8 mx-auto text-center"> {/* Agregamos las clases mx-auto y text-center */}
            <h1 className="text-4xl font-bold mb-4">Frutas y Verduras</h1>
            <p className="text-lg mb-8">
                Contamos con una variedad de productos de frutas y verduras.
                Algunos ejemplos de estos productos podrían incluir:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Frutas frescas */}
                <div data-aos="fade-up">
                    <Image src="/assets/P-1.jpg" alt="Frutas frescas" width={400} height={300} className="mx-auto" />
                    <h2 className="text-2xl font-bold mt-4">Frutas frescas</h2>
                    <p>Manzanas, plátanos, naranjas, uvas, fresas, piñas, mangos, aguacates, entre otros.</p>
                </div>

                {/* Verduras frescas */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <Image src="/assets/P-2.jpg" alt="Verduras frescas" width={400} height={300} className="mx-auto" />
                    <h2 className="text-2xl font-bold mt-4">Verduras frescas</h2>
                    <p>Tomates, lechugas, zanahorias, cebollas, pimientos, espinacas, brócoli, calabacines, entre otros.</p>
                </div>

                {/* Jugos y zumos naturales */}

                {/* Productos procesados */}
                <div data-aos="fade-up" data-aos-delay="600">
                    <Image src="/assets/P-3.jpg" alt="Productos procesados" width={400} height={300} className="mx-auto" />
                    <h2 className="text-2xl font-bold mt-4">Productos procesados</h2>
                    <p>También distribuimos productos procesados como mermeladas, conservas, salsas y productos deshidratados a base de frutas y verduras.</p>
                </div>

                {/* Productos orgánicos */}
                <div data-aos="fade-up" data-aos-delay="800">
                    <Image src="/assets/P-4.jpg" alt="Productos orgánicos" width={400} height={300} className="mx-auto" />
                    <h2 className="text-2xl font-bold mt-4">Productos orgánicos</h2>
                    <p>En respuesta a la creciente demanda de productos orgánicos, distribuimos frutas y verduras cultivadas de manera orgánica.</p>
                </div>

                {/* Otros productos relacionados */}
                
            </div>
        </div>
    );
};

export default ProductDistribution;
