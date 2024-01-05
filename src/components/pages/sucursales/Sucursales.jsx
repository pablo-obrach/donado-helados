import {useForm} from 'react-hook-form'
//*Components
import Wrapper from '../../wrapper/Wrapper'
import SucursalesLista from './SucursalesLista'
//*Assets
import mockMap from '../../../assets/miscelanios/mapa-mock.webp'
//*Styles
import styles from './Sucursales.module.css'
import {useState} from 'react'

const Sucursales = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  const [ubicacion, setUbicacion] = useState(null)
  console.log(ubicacion)

  const onSubmit = data => {
    setUbicacion(data)
    console.log(data)
  }
  return (
    <>
      <Wrapper>
        <article className={styles.mainContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>SUCURSALES</h1>
            <p className={styles.subTitle}>
              BUSCÁ EL TELÉFONO DE TU LOCAL MÁS CERCANO Y HACÉ TU PEDIDO
            </p>
          </div>

          <div className={styles.searchMapListContainer}>
            <div className={styles.formContainer}>
              <form
                className={styles.searchForm}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={styles.searchBarContainer}>
                  <label htmlFor='search'>Tu ubicación</label>
                  <input
                    type='text'
                    placeholder='Ej: Buenos Aires'
                    className={styles.searchBar}
                    {...register('search', {
                      required: {value: true, message: 'Ingrese su Ubicación'}
                    })}
                  />

                  {errors.search && (
                    <p className={styles.error}>{errors.search.message}</p>
                  )}
                </div>

                <button className={styles.searchButton} type='submit'>
                  Buscar
                </button>
              </form>
            </div>
            <div className={styles.mapContainer}>
              <img src={mockMap} alt='mapa' />
              <SucursalesLista />
            </div>
          </div>
        </article>
      </Wrapper>
    </>
  )
}

export default Sucursales
