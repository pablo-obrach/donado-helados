import {Link} from 'react-router-dom'
//*Assets
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import logoDonado from '../../../assets/iconos/logo-donado.webp'
//*Components
import NavBar from '../header/NavBar'
//*Styles
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <Link className={styles.link} to={'/'}>
        <img
          className={styles.logoContainer}
          src={logoDonado}
          alt='Logo Donado Helados'
        />
      </Link>

      <NavBar />
      <div className={styles.socialContainer}>
        <Link
          className={styles.link}
          to={'https://www.instagram.com/donado.fabrica/'}
          target='_blank'
        >
          <InstagramIcon />
        </Link>
        <Link
          className={styles.link}
          to={'https://www.instagram.com/donado.fabrica/'}
          target='_blank'
        >
          <FacebookIcon />
        </Link>
      </div>
    </div>
  )
}

export default Footer
