import localesData from '../../../mock/localesData'
//*Styles
import styles from './SucursalesLista.module.css'
const SucursalesLista = () => {
  return (
    <div className={styles.container}>
      {localesData ? (
        localesData.map(item => (
          <div className={styles.itemContainer} key={item.id}>
            <h3>{item.locacion}</h3>
            <p>{item.direccion}</p>
            <p>{item.whatsapp}</p>
          </div>
        ))
      ) : (
        <p>No hay locales</p>
      )}
    </div>
  )
}

export default SucursalesLista
