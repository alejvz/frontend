import { FaTruck, FaShoppingBasket, FaRegHandshake } from 'react-icons/fa';

const ProductInformation = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto border border-white rounded-lg p-8">
          <div className="grid gap-8">
            <div
              className="flex items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaTruck className="mr-4 text-4xl sm:text-6xl" />
              <p>
                Productos frescos, de calidad y al mejor precio. ¡Directo desde el campo a tu mesa!
              </p>
            </div>
            <div
              className="flex items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaShoppingBasket className="mr-4 text-4xl sm:text-6xl" />
              <p>
                Más de 20 productos en 4 categorías, seleccionados cuidadosamente. Conoce el origen de cada producto que compras.
              </p>
            </div>
            <div
              className="flex items-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <FaRegHandshake className="mr-4 text-4xl sm:text-6xl" />
              <p>
                Relaciones equitativas entre productores, productos y consumidores. Beneficios justos y experiencias innovadoras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;


