import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'

const whatsappNumber = '+573016000000'

const Footer = () => {
  return (
    <footer className="py-4 bg-black" id="contactComponent">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between px-4">
        <div className="text-center md:text-left">
          <Link href="/politica-de-privacidad">
            <span className="text-white hover:underline mr-4">Política de Privacidad</span>
          </Link>
          <Link href="/terminos-y-condiciones">
            <span className="text-white hover:underline mr-4">Términos y Condiciones</span>
          </Link>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-white">Contacto:</p>
          <p className="text-white">Correo electrónico: help@percibot.com</p>
            <button className="hidden md:flex bg-gradient-to-r bg-gradient-to-r from-[#FFFFFF] to-[#38B6FF] rounded-full text-black items-center gap-2 px-7 py-2"
              href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />{whatsappNumber}
            </button>

        </div>
      </div>
      <div className="container mx-auto mt-4 text-center px-4">
        <p className="text-white">
          © {new Date().getFullYear()} PERCI Technology. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

