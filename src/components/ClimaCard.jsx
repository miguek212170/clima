import React, { useState } from 'react';
import "./style/climaCard.css";

const ClimaCard = ({ clima, temperatura }) => {

  const [esCelcius, setEsCelcius] = useState()
  const handleTemp = () => {
    setEsCelcius(!esCelcius)
  }

  return (
    <div className='clima__card'>
      <h1 className='weather__litle'>Clima</h1>
      <h2 className='weather__place'>{clima?.name}, {clima?.sys.country}</h2>
      <div className='clima__contenedor'>

        <figure>
          <img src={`https://openweathermap.org/img/wn/${clima?.weather[0].icon}@4x.png`} alt="clima imagen" />
        </figure>
        <h3 className='weather__descripcion'>{`"${clima?.weather[0].description}"`}</h3>
        <ul className='weather__list'>
          <li className='weather__item'><span>Velocidad de viento: </span><span>{clima?.wind.speed}</span></li>
          <li className='weather__item'><span>Clouds: </span><span>{clima?.clouds.all}</span></li>
          <li className='weather__item'><span>Presión: </span><span>{clima?.main.pressure}</span></li>
        </ul>
      </div>
      <h3>{
        esCelcius ?
          temperatura?.celcius + "ºC"
          :
          temperatura?.fahrenheit + "ºF"

      }</h3>
      <button onClick={handleTemp}>
        Cambiar a {esCelcius ? "ºF" : "ºC"}
      </button>
    </div>
  )
}

export default ClimaCard