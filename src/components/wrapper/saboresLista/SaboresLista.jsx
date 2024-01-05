import {Link} from 'react-router-dom'
import {saboresTitle} from '../../../mock/saboresTitles'
//*Styles
import styles from './SaboresLista.module.css'

const SaboresLista = () => {
  return (
    <ul className={styles.options}>
      {saboresTitle.map((sabor, index) => (
        <Link className={styles.link} to={`/sabores/${sabor.type}`} key={index}>
          <li className={styles.items}>{sabor.name}</li>
        </Link>
      ))}
    </ul>
  )
}

export default SaboresLista
