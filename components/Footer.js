import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-4 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between px-4">
        <div className="text-center md:text-left">
          <Link href="/politica-de-privacidad">
            <span className="text-white hover:underline mr-4">Política de Privacidad</span>
          </Link>
          <Link href="/terminos-y-condiciones">
            <span className="text-white hover:underline">Términos y Condiciones</span>
          </Link>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-white">Contacto:</p>
          <p className="text-white">Correo electrónico: contacto@lulai.co</p>
          <p className="text-white">Whatsapp: +57 322 7391062 - +57 321 2497460</p>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center px-4">
        <p className="text-white">
          © {new Date().getFullYear()} lulai foodtech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

