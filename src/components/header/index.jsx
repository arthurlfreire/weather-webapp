import React from 'react'
import styles from './index.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.location}>Salvador, Bahia, Brazil</h1>
        <h3 className={styles.date}>March 19, 2022</h3>
    </header>
  )
}
