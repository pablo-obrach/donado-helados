import {Link} from 'react-router-dom'
import {useState} from 'react'
//*Components
import SaboresLista from '../saboresLista/SaboresLista'
//*Styles
import styles from './NavBar.module.css'
const NavBar = () => {
  const [showLista, setShowLista] = useState(false)

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.link} to={'/sabores'}>
            <p onMouseEnter={() => setShowLista(true)}>SABORES</p>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={'/lafabrica'}>
            <p>LA FABRICA</p>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={'/sucursales'}>
            <p>SUCURSALES</p>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={'/contacto'}>
            <p>CONTACTO</p>
          </Link>
        </li>
      </ul>
      {showLista ? (
        <div className={styles.saboresContainer}>
          <SaboresLista showLista={() => setShowLista(false)} />
        </div>
      ) : null}
    </div>
  )
}

export default NavBar
