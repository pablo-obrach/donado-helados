import {Link} from 'react-router-dom'
import {useState} from 'react'
//Assets
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import logoDonado from '../../../assets/iconos/logo-donado.webp'
//Styles
import styles from './HeaderTop.module.css'

const HeaderTop = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.containerTop}>
      <MenuIcon onClick={() => setOpen(!open)} />
      <Link to={'/'}>
        <img
          className={styles.imgLogo}
          src={logoDonado}
          alt='Logo Donado Helados'
        />
      </Link>
      {open && (
        <div className={styles.modalHeader}>
          <CloseIcon onClick={() => setOpen(!open)} />
          <div>
            <ul className={styles.list}>
              <li className={styles.items}>
                <Link className={styles.link} to={'/'}>
                  Inicio
                </Link>
              </li>
              <li className={styles.items}>
                <Link className={styles.link} to={'/nosotros'}>
                  La Fabrica
                </Link>
              </li>
              <li className={styles.items}>
                <Link className={styles.link} to={'/tienda'}>
                  Sabores
                </Link>
              </li>
              <li className={styles.items}>
                <Link className={styles.link} to={'/contacto'}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderTop
