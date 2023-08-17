import { AiOutlineDatabase, AiOutlineFileText, AiOutlineLineChart, AiOutlinePieChart } from 'react-icons/ai';
import { AiOutlineQuestionCircle, AiOutlineForm} from 'react-icons/ai';
import { BiSolidMap } from 'react-icons/bi';
const ComponentServices = () => {
  return (
    <div className="py-8" id="howWeWorkComponent">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r bg-gradient-to-r from-[#38B6FF] to-[#ED0690] text-transparent bg-clip-text text-center" data-aos="fade-up">
        ¿Cómo trabajamos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md" data-aos="fade-right">
            <AiOutlineFileText className="text-3xl md:text-4xl text-[#38B6FF] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#38B6FF]">Explicación de Contratos Complejos a Asegurados:</h3>
            <p className="text-white text-sm md:text-base">
            Perci puede analizar y comprender los contratos de seguros, identificar los términos clave y las cláusulas importantes. Cuando los asegurados tengan preguntas sobre sus contratos, podrán hacer preguntas en lenguaje natural y la IA proporcionará respuestas basadas en la información contenida en los contratos. Esto facilitaría la comprensión de los asegurados y les permitiría tomar decisiones informadas sobre su cobertura.
           </p>
          </div>
          <div className="p-4 border pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md" data-aos="fade-left">
            <AiOutlineQuestionCircle className="text-3xl md:text-4xl text-[#38B6FF] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#38B6FF]">Preguntas Frecuentes:</h3>
            <p className="text-white text-sm md:text-base">
            Con un banco de datos de respuestas para preguntas frecuentes, la IA puede responder automáticamente a las consultas repetitivas de los clientes. A medida que los usuarios hagan preguntas, la IA comparará las preguntas con las respuestas almacenadas y proporcionará la información relevante. Si se necesita un detalle adicional, la IA podría canalizar la consulta al equipo humano correspondiente.
            </p>
          </div>
          <div className="p-4 border pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md" data-aos="fade-right">
            <BiSolidMap className="text-3xl md:text-4xl text-[#38B6FF] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#38B6FF]">Ecommerce y Estados de Pedidos:</h3>
            <p className="text-white text-sm md:text-base">
            Perci puede integrarse con sistemas de seguimiento de pedidos y bases de datos de pedidos. Cuando los clientes pregunten sobre el estado de sus pedidos, la IA podrá acceder a la información actualizada y responder en lenguaje natural. Esto ahorra tiempo y recursos, al tiempo que brinda una experiencia más rápida y satisfactoria a los clientes.
            </p>
          </div>
          <div className="p-4 border pr-4 md:pr-9 pl-4 md:pl-5 py-8 md:py-10 rounded-lg shadow-md" data-aos="fade-left">
            <AiOutlineForm className="text-3xl md:text-4xl text-[#38B6FF] mb-2 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-[#38B6FF]">Captura de Lead:</h3>
            <p className="text-white text-sm md:text-base">
            En lugar de usar formularios tradicionales, la IA puede interactuar con los clientes en lenguaje natural para recopilar la información necesaria. Por ejemplo, en lugar de rellenar un formulario, un cliente podría responder preguntas como si estuviera interactuando con un agente en vivo. La IA puede extraer y organizar los datos relevantes y agregarlos a una base de datos para su posterior uso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentServices;
