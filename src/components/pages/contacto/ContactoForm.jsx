import {useForm} from 'react-hook-form'
//Styles
import styles from './contactoForm.module.css'
const ContactoForm = () => {
  const {register, handleSubmit} = useForm()

  return (
    <div className={styles.container}>
      <form className={styles.contactForm}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='nombre'>
            Nombre
          </label>
          <input type='text' />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='email'>
            Email
          </label>
          <input type='email' />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='telefono'>
            Teléfono
          </label>
          <input type='phone' />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='consultas'>
            Tipo de consulta
          </label>
          <select className={styles.select} name='consultas' id='consultas'>
            <option value=''>-Por favor, eligí una opción-</option>
            <option value='franquisias'>Franquisias</option>
            <option value='sugerencias'>Sugerencias</option>
            <option value='quejas'>Quejas</option>
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='mensaje'>
            Mensaje
          </label>
          <textarea
            autoFocus='false'
            placeholder='Escriba su consulta'
            name='mesaje'
            cols='30'
            rows='10'
          ></textarea>
        </div>
        <input className={styles.button} type='submit' />
      </form>
    </div>
  )
}

export default ContactoForm
