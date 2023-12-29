import {Link} from 'react-router-dom'
//*Styles
import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
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
          <Link className={styles.link} to={'/sabores'}>
            <p>SABORES</p>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={'/contacto'}>
            <p>CONTACTO</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
