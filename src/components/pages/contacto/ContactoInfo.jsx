//*Assets
import imgInfo from '../../../assets/banners/banner-fabrica.webp'
//*Styles
import styles from './ContactoInfo.module.css'

const ContactoInfo = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>Contactate con Nosotros</h2>
      <p className={styles.info}>
        Completa el formulario ó escribinos a {''}
        <a className={styles.link} href='mailto:info@donadohelados.com.ar'>
          info@donadohelados.com.ar
        </a>{' '}
        y te responderemos a la brevedad!
      </p>
      <img
        className={styles.imageInfo}
        src={imgInfo}
        alt='Donado Helados Contacto'
      />
    </div>
  )
}

export default ContactoInfo
