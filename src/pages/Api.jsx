import { useState, useEffect } from 'react';
import { IoPlayCircleSharp, IoArrowUndoCircleSharp } from "react-icons/io5";
import { FaSpotify } from "react-icons/fa";

function Api() {
  const [ song, setSong ] = useState('');
  const [ songs, setSongs ] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch(e){
    e.preventDefault();
    setErrorMessage(null);

    if (song.trim() === '') {
      setErrorMessage('¡El buscador no está de adorno, busca algo!');
      return;
    }

    getSong(song);
    setSong('');
  }

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '8414a567d8msh914c10057f6f7a3p1016d9jsn01f02e3f00f8', //process.env.REACT_APP_SPOTIFY_API_KEY,
      'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    }
  };

  async function getSong(query){
    setIsLoading(true);
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(query)}&type=multi&offset=0&limit=10&numberOfTopResults=5`
      let data = await fetch(url, options)

      if (!data.ok) {
        throw new Error(`API returned status: ${data.status}`);
      }
      
      let res = await data.json();

      if (res.tracks && res.tracks.items) {
        setSongs(res.tracks.items);
      } else {
        setSongs([]);
        setErrorMessage('No se encontraron canciones para tu búsqueda.');
     }

    } catch (error) {
      console.error(`Error al buscar canciones: ${error.message}`);
      setErrorMessage(`Error de conexión o de API: ${error.message}. Verifica tu clave.`);
      setSongs([]);
    } finally {
      setIsLoading(false);
    }
  }

    return (
      
      <div className="w-screen min-h-screen bg-linear-to-r from-zinc-800 to-zinc-950 py-2"> 
        <a href="/" className="ml-8 inline-block">
          <IoArrowUndoCircleSharp size="2em" color="white"/>
        </a>
      
      <div className="w-screen min-h-screen bg-linear-to-r from-zinc-800 to-zinc-950 py-8 flex flex-col items-center justify-center">
        
        <div className="bg-zinc-800 p-8 rounded-xl shadow-2xl w-full max-w-lg mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Spotify Search</h2>        
        
        {errorMessage && (
          <div className="bg-red-500/10 border border-red-500 text-red-300 p-3 rounded-lg mb-4 text-sm text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSearch} className="flex gap-2">
          <input
          type="text"
          value={song}
          onChange={e => setSong(e.target.value)}
          placeholder="¿Qué quieres escuchar?"
          className="grow p-3 rounded-lg border border-zinc-50 bg-zinc-50 font-bold text-black placeholder-zinc-600 focus:outline-hidden focus:ring-2 focus:ring-green-500 transition duration-150"
          />
          <button
          type="submit"
          disabled={isLoading}
          className="text-black bg-green-500 hover:bg-green-700 disabled:opacity-50 transition duration-150 font-medium rounded-lg text-sm px-5 py-3 shadow-lg"
          >
            {isLoading ? 'Buscando...' : 'Buscar'}
          </button>
        </form>
        </div>

       {/* --- Results Section --- */}
      <div className="w-full max-w-2xl">
        {songs.length > 0 && (
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Resultados encontrados ({songs.length})
            </h3>
        )}

        {songs.map((song, index) => (
          
          <div 
            className="flex items-center bg-zinc-800/80 p-4 rounded-xl shadow-lg mb-4 hover:bg-zinc-700/80 transition duration-200"
            key={song?.data?.id || index} 
          >
            
            {/* Album Cover */}
            <img
              src={song?.data?.albumOfTrack?.coverArt?.sources?.[0]?.url || 'https://placehold.co/60x60/3f3f46/ffffff?text=No+Cover'}
              alt={`Cover de ${song?.data?.name || 'Álbum'}`}
              className="w-32 h-32 rounded-lg object-cover mr-4 shadow-md"
            />
            
            <div className="grow min-w-0">
              {/* Song Title */}
              <h3 className="text-lg font-semibold text-white truncate">
                {song?.data?.name || 'Título Desconocido'}
              </h3>
              

            </div>
            
            {/* Play Button/Link */}
            <a 
              href={song?.data?.uri} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4"
            >
                <IoPlayCircleSharp size="3em" color="#1DB954"/>
            </a>
          </div>
        ))}

        {songs.length === 0 && !isLoading && !errorMessage && (
             <p className="text-center text-zinc-500 mt-8">
                ¡Busca tu canción favorita para ver los resultados!
             </p>
        )}
      </div>

      <footer class="bg-neutral-primary-soft rounded-base shadow-2xs border border-zinc-600 m-4">
    <div class="w-full mx-auto max-w-(--breakpoint-xl) p-4 md:flex md:items-center md:justify-between">
    <FaSpotify size="2em" color="#1DB954"/>
      <span class="text-sm text-white text-body sm:text-center">© 2025 <a href="https://rapidapi.com/Glavier/api/spotify23/" class="hover:underline font-bold">Spotify API™</a>. Buscador personalizado por Angel Velazque en React.
      </span>
      </div>
      </footer>

      </div>
      </div>
    )
}

export default Api