import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowUndoCircleSharp } from "react-icons/io5";
import { MdMail, MdCode } from "react-icons/md";
import Background from "../components/Background";
import ThemeToggle from "../components/ThemeToggle";
import { motion } from "framer-motion";

function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSubmit = (e) => {
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <div className="relative min-h-screen overflow-hidden py-8">

            <Background />
                
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg max-w-sm mx-auto mt-8">
                    <div className="flex items-center">
                        <div className="py-1">
                            <svg className="h-6 w-6 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold">¡Mensaje enviado!</p>
                            <p className="text-sm">Te responderé pronto. Gracias por contactarme.</p>
                        </div>
                    </div>
                </div>
                
                <Link 
                    to="/" 
                    className="mt-6 text-orange-400 hover:text-orange-300 font-medium"
                >
                    Volver al inicio
                </Link>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden py-8">

        <Background />
        <ThemeToggle />

        <nav className="bg-neutral-primary/80 backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-gray-400 dark:border-zinc-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> 
            
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
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
                  <a href="/" className="block py-2 px-3 text-zinc-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-zinc-800 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 bg-transparent md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-orange-500 rounded md:p-0">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

            <motion.form
                style={{ overflow: "hidden", whiteSpace: "nowrap"}}
                initial={{ width: 0 }}
                animate={{ width:"100%" }}
                transition={{ duration: 2, ease: "easeInOut"}}                        
                action="https://formsubmit.co/josevelazque.alt@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="mt-12 max-w-sm mx-auto"
            >
                {/* Campo oculto para el asunto */}
                <input type="hidden" name="_subject" value="Nuevo mensaje desde tu portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.origin + "/contact/success"} />
   
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nombre y apellido
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        className="shadow-2xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" 
                        placeholder="Camilo Sesto" 
                        required 
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Correo
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <MdMail size={20} className="text-gray-800 dark:text-gray-500"/>
                        </div>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="nombre@mail.com"
                            required
                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Selecciona tu país
                    </label>
                    <select 
                        id="country" 
                        name="country"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    >
                        <option value="">Selecciona un país</option>
                        <option value="NUS">Estados Unidos</option>
                        <option value="TQ">Venezuela</option>
                        <option value="KJ">España</option>
                        <option value="MG">Mongolia</option>
                        <option value="GE">Otro</option>
                    </select>
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Mensaje
                    </label>
                    <textarea 
                        id="message" 
                        name="message"
                        rows="4" 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Háblame de tu idea"
                        required
                    ></textarea>
                </div>

                <div className="flex items-center mb-4">
                    <input 
                        id="terms" 
                        name="terms"
                        type="checkbox" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xs focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                        required
                    />
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Acepto los <a href="/terms" className="text-orange-600 hover:underline dark:text-orange-500">términos y condiciones</a> y doy veracidad de mis datos.
                    </label>    
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full ${
                        isSubmitting 
                            ? 'bg-orange-300 cursor-not-allowed' 
                            : 'bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-hidden focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800'
                    }`}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </motion.form>
        </div>
    );
}

export default ContactForm;