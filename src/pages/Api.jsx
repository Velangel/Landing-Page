import { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      const YOUR_API_KEY = '872af7faa3e032799b3ada88b80ae6c8fde8108f';
      const url = 'https://wger.de/api/v2/exerciseinfo/';
  
      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Token ${YOUR_API_KEY}`
          }
        });
        
        // Con axios, los datos ya vienen en 'response.data'
        // Y la estructura de wger los pone en 'results'
        console.log('Datos recibidos con axios:', response.data);
        setExercises(response.data.results);
  
      } catch (error) {
        console.error("No se pudieron cargar los ejercicios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();

  }, []);

  if (loading) {
    return ( <div>Cargando...</div>);
  }
    return (
      <div className="App">
      <h1>Mi App de Fitness</h1>
      <h2>Lista de Ejercicios</h2>
      <ul>
        {/* Hacemos un "map" (bucle) sobre la lista de ejercicios */}
        {exercises.map((exercise) => (
          // Usamos 'exercise.id' como 'key' (obligatorio en React)
          // Mostramos el nombre del ejercicio
          <li key={exercise.id}>
            {exercise.name}
          </li>
        ))}
      </ul>
    </div>
    ); 
}

export default Api;