import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowUndoCircleSharp } from "react-icons/io5";
import Background from "../components/Background";

function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        
            <Link to="/" className="ml-8 inline-block">
                <IoArrowUndoCircleSharp size="2em" color="white"/>
            </Link>

            <form
                action="https://formsubmit.co/josevelazque.alt@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="max-w-sm mx-auto"
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
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" 
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
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="linux@deidad.com"
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
                        <option value="NUS">No Estados Unidos</option>
                        <option value="TQ">Turquía</option>
                        <option value="KJ">Kasajistán</option>
                        <option value="MG">Mongolia</option>
                        <option value="GE">Guyana Esequiba</option>
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
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
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
                            : 'bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800'
                    }`}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;