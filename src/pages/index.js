import styles from '../../styles/home.module.scss'
import Header from '../components/header/index'
import Temperature from '../components/temperature/index'

export default function Home() {
  return (
    
    <div className={styles.home}>
      <section>
        <Header />
        <Temperature />
      </section>

    </div>  
  )
}
