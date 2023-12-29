//*Assets
import logo from '../../assets/iconos/instaIcon.png'
//*Styles
import styles from './SocialsInfo.module.css'

const SocialsInfo = () => {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logo} src={logo} alt='Instagram Logo' />
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>donado.fabrica</h3>
        <p className={styles.info}>
          ICE CREAM FACTORY💎 somos el secreto mejor guardado de las grandes
          heladerías.Más de 100 gustos de helado y postres.👉🏼 Ingredientes de 1º
          calidad.
        </p>
      </div>
    </div>
  )
}

export default SocialsInfo
