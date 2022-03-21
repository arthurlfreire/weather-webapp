import React, { useContext } from 'react'
import { GlobalContext } from '../../context/globalContext'
import styles from './index.module.scss'

export default function Precipitation() {
  const { weather, humidity } = useContext(GlobalContext)
  return (
    <main className={styles.precipitation}>
        <div>
            <span>Weather: </span>
            <h3 className={styles.rainProbaibility}>{weather}</h3>
        </div>
        <div>
            <span>Air humidity: </span>
            <h3 className={styles.airHumidity}>{humidity}%</h3>
        </div>
    </main>
  )
}
