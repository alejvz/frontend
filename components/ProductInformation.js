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
              <FaTruck className="mr-4 text-3xl" />
              <p>
                Tenemos a tu disposición productos siempre frescos, de la mejor calidad y con el mejor precio.
              </p>
            </div>
            <div
              className="flex items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaShoppingBasket className="mr-4 text-3xl" />
              <p>
                Más de 20 productos en 4 categorías. Con lo mejor del campo colombiano. Donde podrás saber exactamente de dónde viene cada producto que compras.
              </p>
            </div>
            <div
              className="flex items-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <FaRegHandshake className="mr-4 text-3xl" />
              <p>
                Creamos relaciones de valor entre el productor, el producto y el consumidor, basadas en beneficios equitativos y experiencias innovadoras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;

