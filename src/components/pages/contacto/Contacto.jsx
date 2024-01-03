//*Components
import Wrapper from '../../wrapper/Wrapper'
import ContactoInfo from './ContactoInfo'
import ContactoForm from './contactoForm'
//*Styles
import styles from './Contacto.module.css'

const Contacto = () => {
  return (
    <>
      <Wrapper>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>CONTACTO</h1>
          <div className={styles.compentsContacto}>
            <ContactoInfo />
            <ContactoForm />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Contacto
