//*Components
import {useParams} from 'react-router-dom'
import Wrapper from '../../wrapper/Wrapper'
//*Styles
import styles from './Sabores.module.css'

const Sabores = () => {
  const {sabor} = useParams()
  return (
    <>
      <Wrapper>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>{sabor.title}</h1>
          <div className={styles.compentsContacto}></div>
        </div>
      </Wrapper>
    </>
  )
}

export default Sabores
