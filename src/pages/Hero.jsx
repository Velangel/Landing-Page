import { Route, Routes } from "react-router-dom"
import { LiaSchoolSolid } from "react-icons/lia"
import { MdCode, MdLaptopChromebook, MdWork } from "react-icons/md"
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa"
import LanguagesTable from '../components/LanguagesTable'

function Hero() {
  return(
  <div className="w-screen min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-950 py-8">
    <img src=" /images/mi-foto.png" alt="Foto" class=" mt-9 w-64 h-64 rounded-full object-cover border-x-4 border-orange-400 ml-auto mr-auto transition-colors ease out hover:border hover:border-orange-800"/>

    <div class="flex items-center place-content-center">
    <MdCode size="5em" color="orange"/>
    <div class="flex flex-col">
    <h2 style={{fontSize: '1.5rem', fontWeight: 'semibold', textAlign: 'center', color: "white"}}>
      Buen día, te saluda
    </h2>
    <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center', color: "white"}}>
      Angel Velazque
    </h1>
    </div>
    </div>

    {/* Cards */}
    <div class="flex place-content-center flex-wrap gap-4">
    
    <div class="block basis-1/4 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700">
      <LiaSchoolSolid size="2em" color="white"/>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Formación</h5>
      <ul class="list-disc px-3 py-2 font-normal text-gray-700 dark:text-gray-400">
        <li>Estudiante de Ingeniería de Sistemas en la <b>UNEFA</b>.</li>
        <li>B2 <i>(Upper Intermediate)</i> en Inglés, certificado.</li>
        </ul>
    </div>

    <div class="block basis-1/4 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700">
      <MdLaptopChromebook size="2em" color="white"/>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aspiraciones</h5>
      <ul class="list-disc px-3 py-2 font-normal text-gray-700 dark:text-gray-400">
      <li>Diseñador Web.</li>
      <li>Diseñador de aplicaciones móviles.</li>
      <li>Full Stack.</li>
      </ul>
    </div>

    <a href="https://www.bufferring.org/" class="block basis-1/2 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700">
      <MdWork size="2em" color="white"/>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Trabajos importantes</h5>
      <div className="flex place-content-center items-center">
      <img src="/images/logo.png" alt="Logo" class="mt-9 w-32 h-32"></img>
      <div className="flex flex-col p-2">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">BufferRing</h5>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
        Developer
        </p>
      </div>
        </div>  
    </a>

    <a href="/api" class="block basis-1/2 p-4 flex items-center bg-white border border-zinc-200 rounded-lg shadow-sm hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700">
      <FaSpotify size="4em" color="#1DB954"/>
      <div className="flex flex-col p-2">
      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Buscador de Spotify</h5>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
        Presiona para hacer la prueba gratuita
        </p>
      </div>
    </a>
    
    </div>

      {/* Tabla */}

      <div class="p-6">
        <LanguagesTable />
      </div>

          {/* Enlaces */}
          <div class="max-w-sm p-6 bg-white border border-zinc-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 ml-auto mr-auto">
        <div class="flex place-content-center gap-4 ">
        <a href="https://github.com/Velangel" class="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-zinc-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:focus:ring-zinc-700">
            <FaGithub size="2em" color="white"/>
            <div class="text-left rtl:text-right">
                <div class="-mt-1 font-sans text-sm font-semibold">GitHub</div>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/angel-velazque-4b469935b" class="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-zinc-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:focus:ring-zinc-700">
            <FaLinkedin size="2em" color="white"/>
            <div class="text-left rtl:text-right">
                <div class="-mt-1 font-sans text-sm font-semibold">Linkedin</div>
            </div>
        </a>
        </div>
        <div class="p-2">
    <p class="flex place-content-center font-normal text-gray-500 dark:text-gray-400">¿Tienes ideas para un proyecto? </p>
    <a href="/contact" class="flex place-content-center font-medium items-center text-orange-500 hover:underline">
        Contáctame.
        </a>
        </div>
      </div>
  </div>
  )
}

export default Hero