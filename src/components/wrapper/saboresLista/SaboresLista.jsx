import {Link} from 'react-router-dom'
//*Styles
import styles from './SaboresLista.module.css'

const SaboresLista = () => {
  const saboresType = [
    {type: 'cremas'},
    {type: 'frutalesCrema'},
    {type: 'dulcesDeLeche'},
    {type: 'frutalesAgua'},
    {type: 'chocolates'},
    {type: 'especiales'}
  ]
  return (
    <ul className={styles.options}>
      {saboresType.map((sabor, index) => (
        <Link className={styles.link} to={`/sabores/${sabor.type}`} key={index}>
          <li className={styles.items}>{sabor.type}</li>
        </Link>
      ))}
    </ul>
  )
}

export default SaboresLista
