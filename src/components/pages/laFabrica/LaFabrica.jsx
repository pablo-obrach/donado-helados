//*Components
import Wrapper from '../../wrapper/Wrapper'
//*Assets
import fabricaImg from '../../../assets/fabrica/heladero.webp'
//*Styles
import styles from './LaFabrica.module.css'

const LaFabrica = () => {
  return (
    <>
      <Wrapper
        backgroundImage={'src/assets/banners/video-background.webp'}
        text={'40 AÑOS CREANDO SABORES QUE TE ENAMORAN'}
      >
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>
            ¡Descubre el secreto detrás de las heladerías más prestigiosas!
          </h2>
          <div className={styles.franquisiasInfo}>
            <div className={styles.franquisiasTextContainer}>
              <h3 className={styles.franquisiasTitle}>
                ¿Querés tener tu propio local?
              </h3>
              <p className={styles.franquisiasText}>
                ¡Escribinos a{' '}
                <a
                  href='mailto:franquisias@donadohelados.com.ar'
                  className={styles.franquisiasEmail}
                >
                  franquisias@donadohelados.com.ar
                </a>{' '}
                ó comunicate al{' '}
                <a href='tel:+5491150019913' className={styles.franquisiasTel}>
                  +54 9 11-5001-9913
                </a>{' '}
                y formá parte de nuestra familia!
              </p>
            </div>

            <img
              className={styles.fabricaImage}
              src={fabricaImg}
              alt='La Fabrica Donado'
            />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default LaFabrica
