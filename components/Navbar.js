"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineUser, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaTractor, FaStore } from 'react-icons/fa'
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [menu, setMenu] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typeof window === 'object') {
      window.addEventListener('scroll', () => {
        if (window.scrollY < 50) {
          setToggle(true);
        } else {
          setToggle(false);
        }
      });
    }
  }, [toggle]);

  return (
    <>
      <nav
        className={
          toggle
            ? 'fixed top-0 right-0 left-0 ease-linear duration-300 px-8 md:px-16 py-5 text-white flex justify-between items-center'
            : 'fixed top-0 right-0 left-0 bg-gradient-to-r from-red-500 to-yellow-500 shadow-sm z-50 ease-linear duration-300 text-black px-8 md:px-16 py-5 flex justify-between items-center'
        }
      >
        <div className="flex items-center mr-auto"> {/* Agrega esta línea para mover el logo al extremo izquierdo */}
          <Image className="" src={toggle ? '/assets/5.png' : '/assets/7.png'} alt="logo" width={178} height={90} />
        </div>
        <div> {/* Deja este contenedor sin clase para mantener los botones de Comercio y Productor alineados al centro */}
          {isMobile ? (
            <button
              className={toggle ? 'block md:hidden text-[30px] z-[20]  text-white' : 'block md:hidden text-[30px] z-[20]  text-black'}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <AiOutlineClose className="text-neutral-700" /> : <AiOutlineMenu />}
            </button>
          ) : (
            <ul className="md:flex space-x-7 hidden pr-8">
              <li>
                <button className="font-[500] hover:text-yellow-500  duration-75 ease-in" onClick={() => scrollToComponent('heroComponent')}>
                  Inicio
                </button>
              </li>
              <li>
                <button className="font-[500] hover:text-yellow-500 duration-75 ease-in" onClick={() => scrollToComponent('servicesComponent')}>
                  Servicios
                </button>
              </li>
              <li>
                <button className="font-[500] hover:text-yellow-500  duration-75 ease-in" onClick={() => scrollToComponent('howWeWorkComponent')}>
                  ¿Cómo trabajamos?
                </button>
              </li>
              <li>
                <button className="font-[500] hover:text-yellow-500  duration-75 ease-in" onClick={() => scrollToComponent('Q&A')}>
                  Q&A
                </button>
              </li>
              <li>
                <button className="font-[500] hover:text-yellow-500  duration-75 ease-in" onClick={() => scrollToComponent('contactComponent')}>
                  Contacto
                </button>
              </li>
            </ul>
          )}
        </div>
        <ul className="md:flex space-x-5 hidden">
        <Link href="/suplier" passHref>
          <button className={toggle ? 'hidden md:flex bg-gradient-to-r from-red-500 to-yellow-500 rounded-full text-black items-center gap-2 px-7 py-2' : 'hidden md:flex items-center gap-2 bg-black text-white rounded-full px-7 py-2'}>
            <FaStore />Comercio
          </button>
        </Link>
        <Link href="/farmer" passHref>
          <button className={toggle ? 'hidden md:flex bg-gradient-to-r from-green-500 to-yellow-500 rounded-full text-black items-center gap-2 px-7 py-2' : 'hidden md:flex items-center gap-2 bg-black text-white rounded-full px-7 py-2'}>
            <FaTractor />Productor
          </button>
        </Link>
        </ul>
      </nav>
      {isMobile && (
        <div className={menu ? 'shadow-md py-6 space-y-4 z-[50] bg-gray-100 text-neutral-900 px-5 text-lg font-semibold fixed top-[89px] duration-500 ease-in w-full' : 'w-full duration-500 ease-in-out bg-gray-100 text-neutral-600 px-2 text-lg font-semibold absolute -top-[400px]'}>
          <div className="flex justify-center space-x-4"> {/* Agrega esta línea para centrar los botones */}
            <Link href="/suplier" passHref>
              <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-yellow-500 text-black rounded-full px-7 py-2">
                <FaStore />Comercio
              </button>
            </Link>
            <Link href="/farmer" passHref>
              <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-yellow-500 text-black rounded-full px-7 py-2">
                <FaTractor />Productor
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

