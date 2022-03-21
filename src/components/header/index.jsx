import React,{ useContext } from 'react'
import { GlobalContext } from '../../context/globalContext'
import styles from './index.module.scss'

export default function Header() {
  const { city } = useContext(GlobalContext)
  
  let today = new Date()

  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()

  today = mm + '/' + dd + '/' + yyyy

  return (
    <header className={styles.header}>
        <h1 className={styles.location}>{city}</h1>
        <h3 className={styles.date}>{today}</h3>
    </header>
  )
}
