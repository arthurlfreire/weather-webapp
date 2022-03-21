import styles from '../../styles/home.module.scss'
import Header from '../components/header/index'
import Temperature from '../components/temperature/index'
import Precipitation from '../components/precipitation/index'
import GlobalContextProvider from '../context/globalContext'

export default function Home() {
  
  return(
    <GlobalContextProvider>
      <div className={styles.home}>
        <section>
          <Header />
          <Temperature />
        </section>
        <Precipitation />
      </div>  
    </GlobalContextProvider>


  )
}
