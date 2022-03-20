import React from 'react'
import styles from './index.module.scss'

export default function Temperature() {
  return (
    <section className={styles.temperature}>
        <h2 className={styles.celsius}>25C°</h2>
        <article>
            <h3 className={styles.fahrenheit}>77F°</h3>
            <h3 className={styles.kelvin}>298K</h3>
        </article>
    </section>
  )
}
