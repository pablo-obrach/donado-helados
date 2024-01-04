import {Link} from 'react-router-dom'
//*Assets
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import logoDonado from '../../../assets/iconos/logo-donado.webp'
//*Components
import NavBarFooter from './NavBarFooter'
//*Styles
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.mainContainer}>
      <Link className={styles.link} to={'/'}>
        <img
          className={styles.logoContainer}
          src={logoDonado}
          alt='Logo Donado Helados'
        />
      </Link>

      <NavBarFooter />

      <div className={styles.socialContainer}>
        <Link
          className={styles.link}
          to={'https://www.instagram.com/donado.fabrica/'}
          target='_blank'
        >
          <InstagramIcon
            sx={{
              width: {lg: 50},
              height: {lg: 50},
              '&:hover': {color: '#f48536'}
            }}
          />
        </Link>
        <Link
          className={styles.link}
          to={'https://www.instagram.com/donado.fabrica/'}
          target='_blank'
        >
          <FacebookIcon
            sx={{
              width: {lg: 50},
              height: {lg: 50},
              '&:hover': {color: '#f48536'}
            }}
          />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
