import React, { useContext } from 'react'
import { GlobalContext } from '../../context/globalContext'
import styles from './index.module.scss'

export default function Temperature() {
  const { temperature } = useContext(GlobalContext)

  function celsiusToFahrenheit(temperature){
    return (temperature * 9)/5 + 32
  }
  function celsiusToKelvin(temperature){
    return temperature + 273
  }

  return (
    <section className={styles.temperature}>
        <h2 className={styles.celsius}>{Math.round(temperature)}°C</h2>
        <article>
            <h3 className={styles.fahrenheit}>{Math.round(celsiusToFahrenheit(temperature))}°F</h3>
            <h3 className={styles.kelvin}>{Math.round(celsiusToKelvin(temperature))}K</h3>
        </article>
    </section>
  )
}
