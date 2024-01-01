import {Link} from 'react-router-dom'
import {useState} from 'react'
import UseAnimations from 'react-useanimations'
//*Components
import NavBar from '../header/NavBar'
import SaboresLista from '../saboresLista/SaboresLista'
//Assets
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import plusToX from 'react-useanimations/lib/plusToX'
import logoDonado from '../../../assets/iconos/logo-donado.webp'
//Styles
import styles from './HeaderTop.module.css'

const HeaderTop = () => {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState(false)

  return (
    <div className={styles.containerTop}>
      <div className={styles.containerIcon}>
        <MenuIcon onClick={() => setOpen(!open)} />
      </div>
      <Link className={styles.linkLogo} to={'/'}>
        <img
          className={styles.imgLogo}
          src={logoDonado}
          alt='Logo Donado Helados'
        />
      </Link>
      {open && (
        <div className={styles.modalHeader}>
          <CloseIcon color='warning' onClick={() => setOpen(!open)} />
          <div>
            <ul className={styles.list}>
              <li className={styles.items}>
                <div className={styles.optionContainer}>
                  <h5 className={styles.optionTitle}>SABORES</h5>
                  <UseAnimations
                    className={styles.plusToX}
                    animation={plusToX}
                    size={30}
                    strokeColor='#D3D3D3'
                    speed={2}
                    onClick={() => setOptions(!options)}
                  />
                </div>
                {options && <SaboresLista />}
              </li>
              <li className={styles.items}>
                <Link className={styles.link} to={'/nosotros'}>
                  <h5>LA FABRICA</h5>
                </Link>
              </li>
              <li className={styles.items}>
                <Link className={styles.link} to={'/'}>
                  <h5>SUCURSALES</h5>
                </Link>
              </li>
              <li className={styles.items}>
                <Link className={styles.link} to={'/contacto'}>
                  <h5>CONTACTO</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className={styles.containerNav}>
        <NavBar />
      </div>
    </div>
  )
}

export default HeaderTop
