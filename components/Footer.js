import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between">
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
                    <p className="text-white">Teléfono: +57 000 0000000</p>
                </div>
            </div>
            <div className="container mx-auto mt-4 text-center">
                <p className="text-white">
                    © {new Date().getFullYear()} lulai foodtech. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

