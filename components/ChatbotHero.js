import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, useCycle } from 'framer-motion';


const predefinedQuestions = [
  "¿Cuál es tu horario de atención?",
  "¿Cómo puedo contactarte?",
  "¿Qué servicios ofrecen?",
  "¿Cuál es el costo de sus servicios?",
  "¿Cuál es el costo de sus servicios?",
  "¿Cuál es el costo de sus servicios?",
  // Agrega más preguntas preestablecidas aquí
];


const words = ['opciones', 'productos', 'artículos'];

const ChatbotHero = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    // Agregar un mensaje de bienvenida del bot al cargar el componente
    const welcomeMessage = "¡Hola! Soy Perci. ¿En qué puedo ayudarte?";
    const services = "inventario inteligente";
    setMessages([{ text: welcomeMessage, type: 'bot' }, { text: services, type: 'bot' }]);
  }, []);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessage = { message: inputMessage };
    setMessages([...messages, { text: inputMessage, type: 'user' }]);
    setInputMessage('');
    setIsBotTyping(true);

    try {
      const response = await axios.post('http://localhost:8000/api/send-message', newMessage);
      const botResponse = response.data.response;
      setIsBotTyping(false);

      setMessages(prevMessages => [...prevMessages, { text: botResponse, type: 'bot' }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsBotTyping(false);
    }
  };

  const handleQuestionClick = (question) => {
    setInputMessage(question);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <h1
        className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r bg-gradient-to-r from-[#38B6FF] to-[#ED0690] text-transparent bg-clip-text text-center"
        data-aos="zoom-out-left"
      >
        Tu Copiloto de {currentWord}
      </h1>
      </motion.div>
      <div className="flex flex-col sm:flex-row max-w-3xl mx-auto h-96 justify-center">
        <div className="flex sm:w-1/3 justify-center" data-aos="fade-right">
          <div className="flex flex-col p-4 overflow-y-scroll rounded-md bg-gradient-to-t bg-gradient-to-r from-black to-[#ED0690] justify-center sm:justify-start">
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                className="mb-2 bg-black text-white px-4 py-2 rounded-md"
                onClick={() => handleQuestionClick(question)} // Call handleQuestionClick with the question
                data-aos="fade-up"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:w-2/3 rounded-md bg-gradient-to-t bg-gradient-to-r from-black to-[#ED0980]  ml-4 justify-center" data-aos="fade-left">
          <div className="flex-grow p-4 overflow-y-scroll">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 ${msg.type === 'user' ? 'bg-blue-200 self-start' : msg.type === 'bot' ? 'bg-gray-200 self-end' : ''
                  } rounded-md max-w-2/3 mx-auto`}
              >
                {msg.text}
              </div>
            ))}
            {isBotTyping && (
              <div className="bg-gray-200 self-end rounded-md max-w-2/3 p-2 animate-pulse mx-auto">
                Escribiendo...
              </div>
            )}
          </div>
          <div className="flex items-center p-4">
            <input
              type="text"
              className="flex-grow border rounded-l-md p-2"
              placeholder="Escribe un mensaje..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button
              className="bg-[#ED0980] text-white px-4 py-2 rounded-r-md"
              onClick={handleSendMessage}
            >
              Enviar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatbotHero;
