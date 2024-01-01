import {Link} from 'react-router-dom'
//*Styles
import styles from './SaboresLista.module.css'

const SaboresLista = ({showLista}) => {
  const saboresOptions = [
    {type: 'cremas', name: 'cremas'},
    {type: 'frutalesCrema', name: 'Frutales a la crema'},
    {type: 'dulcesDeLeche', name: 'Dulces de leche'},
    {type: 'frutalesAgua', name: 'Frutales al agua'},
    {type: 'chocolates', name: 'chocolates'},
    {type: 'especiales', name: 'especiales'}
  ]
  return (
    <ul onMouseLeave={showLista} className={styles.options}>
      {saboresOptions.map((sabor, index) => (
        <Link className={styles.link} to={`/sabores/${sabor.type}`} key={index}>
          <li className={styles.items}>{sabor.name}</li>
        </Link>
      ))}
    </ul>
  )
}

export default SaboresLista
