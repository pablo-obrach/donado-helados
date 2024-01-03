import {Link} from 'react-router-dom'
import {useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
//*Components
import SaboresLista from '../saboresLista/SaboresLista'
//*Styles
import styles from './NavBar.module.css'
const NavBar = () => {
  const [showLista, setShowLista] = useState(false)

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li className={styles.saboresDropDown}>
          <div
            className={styles.saboresDropDown}
            onMouseEnter={() => setShowLista(true)}
          >
            <p>SABORES</p>
            <ArrowDropDownIcon sx={{paddingBottom: '5px'}} />
          </div>
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
