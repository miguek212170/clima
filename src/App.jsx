import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import axios from 'axios';
import ClimaCard from './components/ClimaCard';

function App() {

  const [coodenadas, setcoordenadas] = useState();
  const [clima, setclima] = useState()
  const [temperatura, setTemperatura] = useState();
  const [estaCargando, setestaCargando] = useState();

  const success = (posicion) => {
    console.log(posicion);
    const objeto = {
      latitud: posicion.coords.latitude,
      longitud: posicion.coords.longitude
    }
    setcoordenadas(objeto)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  
  console.log(coodenadas)

  useEffect(() => {
    
  }, [])
  

  useEffect(()=>{
  
  if(coodenadas){
    const apiKey = "4c08074ba8d8b7fb363bb6da5938805d";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coodenadas.latitud}&lon=${coodenadas.longitud}&appid=${apiKey}`
    axios.get(url)
      .then(resultado => {
        const celcius = (resultado.data.main.temp - 273.15).toFixed(2);
        const fahrenheit = (celcius * 9/5 + 32).toFixed(2);
        setTemperatura({celcius, fahrenheit})
        setclima(resultado.data);
      })
      .catch(fallo => console.log(fallo))
      .finally(()=>{
        setestaCargando(false)
      });
  }

  }, [coodenadas])
  return (
    <>{
      <div className='app'>
       {/*  estaCargando

        <h2>Cargando</h2>
        */}
        <ClimaCard
          clima={clima}
          temperatura={temperatura}
        
        />
       
      </div>} 
    </>
  )
}

export default App;
