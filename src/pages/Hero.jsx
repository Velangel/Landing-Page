import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import { LiaSchoolSolid } from "react-icons/lia"
import { MdCode, MdLaptopChromebook, MdWork } from "react-icons/md"
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa"
import LanguagesTable from '../components/LanguagesTable'
import ThemeToggle from '../components/ThemeToggle'
import { motion } from 'framer-motion'
import Background from '../components/Background'

function Hero() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const combinedBoxVariants = {
    // Animación de entrada
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    
    // Efecto hover
    hover: {
      scale: [null, 1, 1.1],
      transition: {
        duration: 0.3,
        times: [0, 0.6, 1],
        ease: ["easeInOut", "easeOut"],
      }
    }
  };

  const logos = {
    bufferring: {
      light: "/images/bufferring_black.png",
      dark: "/images/bufferring_white.png"
    },
    carfix: {
      light: "/images/carfix_black.png",
      dark: "/images/carfix_white.png"
    }
  };

  return(
  <div className="relative min-h-screen overflow-hidden py-8">

    <Background />

    <ThemeToggle />

    
<nav className="bg-neutral-primary/80 backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-gray-400 dark:border-zinc-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> 
    
    {/* Logo */}
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <MdCode size="2em" className="text-orange-500"/>
        <span className="self-center text-xl text-zinc-900 dark:text-white hover:text-orange-500 font-semibold whitespace-nowrap">Velangel</span>
    </a>

    {/* Botón Hamburguesa */}
    <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)} // <--- AGREGADO
      type="button" 
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 dark:text-white rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500" 
      aria-controls="navbar-default" 
      aria-expanded={isMenuOpen}
    >
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
    </button>

    {/* Menú Desplegable */}
    <div 
      className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} // <--- DINÁMICO
      id="navbar-default"
    >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-lg bg-white dark:bg-zinc-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent">
        <li>
          <a href="#" className="block py-2 px-3 text-orange-500 bg-transparent md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#SobreMi" className="block py-2 px-3 text-zinc-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-zinc-800 md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Sobre mí</a>
        </li>
        <li>
          <a href="#Trabajos" className="block py-2 px-3 text-zinc-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-zinc-800 md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Trabajos</a>
        </li>
        <li>
          <a href="#Habilidades" className="block py-2 px-3 text-zinc-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-zinc-800 md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Habilidades</a>
        </li>
        <li>
          <a href="/contact" className="block py-2 px-3 text-zinc-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-zinc-800 md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <motion.img
      initial={{
        scale: 0.1,
        opacity: 0
      }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        type: 'spring'
      }}
      animate={{
        scale: 1,
        opacity: 1
      }} 
    src=" /images/mi-foto-2.png" alt="Foto"
    className="dark:hidden object-contain mt-19 w-64 h-64 rounded-full object-cover
    border-x-4 border-orange-400 ml-auto mr-auto transition-colors ease out
    hover:border-x-4 hover:border-orange-600"/>

        <motion.img
      initial={{
        scale: 0.1,
        opacity: 0
      }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        type: 'spring'
      }}
      animate={{
        scale: 1,
        opacity: 1
      }} 
    src=" /images/mi-foto.png" alt="Foto"
    className="hidden dark:block object-contain mt-19 w-64 h-64 rounded-full object-cover
    border-x-4 border-orange-400 ml-auto mr-auto transition-colors ease out
    hover:border-x-4 hover:border-orange-600"/>

    


    <div className="flex items-center place-content-center mt-5">
    {/*<MdCode size="5em" color="orange"/>*/}
    <div className="flex flex-col">
    <motion.h2
    style={{ overflow: "hidden", whiteSpace: "nowrap"}}
    initial={{ width: 0 }}
    animate={{ width:"100%" }}
    transition={{ duration: 2, ease: "easeInOut"}}
    className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex place-content-center mt-4"
    >
      Buen día, te saluda
    </motion.h2>

    <motion.h1
    style={{ overflow: "hidden", whiteSpace: "nowrap"}}
    initial={{ width: 0 }}
    animate={{ width:"100%" }}
    transition={{ duration: 2, ease: "easeInOut"}}
    className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white py-2 mb-4"
    >
      Angel Velazque
    </motion.h1>
    </div>
    </div>

    {/* Cards */}

    <div className="flex place-content-center flex-wrap gap-4 py-8">
    
    <motion.div
      variants={combinedBoxVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      
      className="card-style basis-1/4">
      
      <div className="flex flex-row">
      <LiaSchoolSolid size="2em" className="text-orange-500"/>
      <h5 className="px-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Formación</h5>
      </div>
      <ul className="list-disc px-3 py-2 font-normal text-zinc-700 dark:text-gray-400">
        <li>Estudiante de Ingeniería de Sistemas en la <b>UNEFA</b>.</li>
        <li>B2 <i>(Upper Intermediate)</i> en Inglés, certificado.</li>
        </ul>

    </motion.div>

    <motion.div
    variants={combinedBoxVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="card-style basis-1/4">

      <div className="flex flex-row">
      <MdLaptopChromebook size="2em" className="text-orange-500"/>
      <h5 className="px-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aspiraciones</h5>
      </div>
      <ul className="list-disc px-3 py-2 font-normal text-gray-700 dark:text-gray-400">
      <li>Diseñador Web.</li>
      <li>Diseñador de aplicaciones móviles.</li>
      <li>Full Stack.</li>
      </ul>
    </motion.div>

    </div>

<div className="flex place-content-center flex-wrap flex-col gap-4 py-8">
      
      <motion.h3
        variants={combinedBoxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      id="Trabajos"
      className="flex place-content-center scroll-mt-26 mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Trabajos importantes
      </motion.h3>

    {/*<MdWork size="2em" className="text-orange-500"/>*/}

    {/*CarFix*/}
    
        <motion.a
      variants={combinedBoxVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    href="https://carfixve.app"
    className="card-style basis-1/4">

      <div className="flex flex-row">
      <img src={logos.carfix.light} alt="CarFix" className="dark:hidden size-16 object-contain"/>
      <img src={logos.carfix.dark} alt="CarFix" className="hidden dark:block size-16 object-contain"/>
      <div className="flex flex-col p-2">
      <h5 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">CarFix</h5>
        <p className="font-normal text-zinc-700 dark:text-gray-400">Colaborador</p>
      </div>  
      </div>
    </motion.a>

    {/*Spotify*/}

    <motion.a
      variants={combinedBoxVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}    
    href="/api"
    className="card-style basis-1/4">
      
      <div className="flex flex-row">
      <FaSpotify size="4em" color="#1DB954"/>
      <div className="flex flex-col p-2">
      <h5 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Buscador de Spotify</h5>
        <p className="font-normal text-zinc-700 dark:text-gray-400">Desarrollador</p>
      </div>
      </div>
    </motion.a>
    </div>

    <div className="flex place-content-center flex-wrap flex-col gap-4 py-8">
          <motion.h3
        variants={combinedBoxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      id="Trabajos"
      className="flex place-content-center mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Organizaciones
      </motion.h3>

    {/*BufferRing*/}

    <motion.a
      variants={combinedBoxVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    href="https://www.bufferring.org/"
    className="card-style basis-1/4">

      <div className="flex flex-row">      
      <img src={logos.bufferring.light} alt="BufferRing" className="dark:hidden size-18"/>
      <img src={logos.bufferring.dark} alt="BufferRing" className="hidden dark:block size-18"/>
      <div className="flex flex-col p-2">
      <h5 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">BufferRing</h5>
        <p className="font-normal text-zinc-700 dark:text-gray-400">Desarrollador de Frontend</p>
      </div>  
      </div>
    </motion.a>
    
    </div>

      {/* Tabla */}

      <motion.div
      variants={combinedBoxVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="p-6">

      <h3 id="Habilidades" className="flex place-content-center scroll-mt-26 mt-2 mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Habilidades
      </h3>

        <LanguagesTable />
      </motion.div>

      {/* Enlaces */}

        <motion.div
        variants={combinedBoxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="max-w-sm mt-10 p-6 border ml-auto mr-auto rounded-lg shadow-xs
        bg-radial from-zinc-50 to-zinc-200 border-zinc-200 
        dark:bg-radial dark:from-zinc-800 dark:to-zinc-900 dark:border-zinc-800">
        
        <div className="flex place-content-center gap-4 ">
        
        <motion.a
      whileHover={{
          scale: [null, 1, 1.1],
          transition: {
              duration: 0.3,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
          },
      }}
      transition={{
          duration: 0.3,
          ease: "easeOut",
      }}        
        href="https://github.com/Velangel"
        className="w-full sm:w-auto rounded-lg px-4 py-2.5
        bg-zinc-400 hover:bg-zinc-500 text-white
        focus:ring-4 focus:outline-hidden focus:ring-zinc-300 
        inline-flex items-center justify-center
        dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">
            <FaGithub size="2em" color="white"/>
            <div className="text-left rtl:text-right">
                <div className="px-2 font-sans text-sm font-semibold">GitHub</div>
            </div>
        </motion.a>

        <motion.a
      whileHover={{
          scale: [null, 1, 1.1],
          transition: {
              duration: 0.3,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
          },
      }}
      transition={{
          duration: 0.3,
          ease: "easeOut",
      }}        
        href="https://www.linkedin.com/in/angel-velazque-4b469935b"
        className="w-full sm:w-auto rounded-lg px-4 py-2.5
        bg-zinc-400 hover:bg-zinc-500 text-white
        focus:ring-4 focus:outline-hidden focus:ring-zinc-300 
        inline-flex items-center justify-center
        dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">
            <FaLinkedin size="2em" color="white"/>
            <div className="text-left rtl:text-right">
                <div className="px-2 font-sans text-sm font-semibold">Linkedin</div>
            </div>
        </motion.a>
        </div>
        <div className="p-2">
    <p className="flex place-content-center font-normal text-gray-700 dark:text-gray-400">¿Tienes ideas para un proyecto? </p>
    <a href="/contact" className="flex place-content-center font-medium items-center text-orange-500 hover:underline">
        Contáctame.
        </a>
        </div>
      </motion.div>
  </div>
  )
}

export default Hero