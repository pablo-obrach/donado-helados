import {useForm} from 'react-hook-form'
import {useContext} from 'react'
import FormContex from '../../../context/FormContext'
//Styles
import styles from './contactoForm.module.css'
const ContactoForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  console.log(errors)
  const {setForm} = useContext(FormContex)

  const onSubmit = handleSubmit(data => {
    setForm(data)
  })

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.contactForm}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='nombre'>
            Nombre
          </label>
          <input
            {...register('nombre', {
              required: {value: true, message: 'El campo es obligatorio'},
              minLength: {
                value: 3,
                message: 'El campo debe tener al menos 3 caracteres'
              }
            })}
            type='text'
          />
          {errors.nombre && (
            <p className={styles.error}>{errors.nombre.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='email'>
            Email
          </label>
          <input
            {...register('email', {
              required: {value: true, message: 'El campo es obligatorio'},
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                message: 'El email debe contener un @ y un . al menos'
              }
            })}
            type='email'
          />
          {errors && errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='telefono'>
            Teléfono
          </label>
          <input
            {...register('telefono', {
              required: {value: true, message: 'Debe proporcionar un teléfono'},
              minLength: {
                value: 10,
                message: 'El teléfono debe tener al menos 10 caracteres'
              }
            })}
            type='phone'
          />
          {errors && errors.telefono && (
            <p className={styles.error}>{errors.telefono.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='consultas'>
            Tipo de consulta
          </label>
          <select
            {...register('consultas', {
              required: {value: true, message: 'Debe seleccionar una consulta'}
            })}
            className={styles.select}
            name='consultas'
            id='consultas'
          >
            <option value=''>-Por favor, eligí una opción-</option>
            <option value='franquisias'>Franquisias</option>
            <option value='sugerencias'>Sugerencias</option>
            <option value='quejas'>Quejas</option>
          </select>
          {errors && errors.consultas && (
            <p className={styles.error}>{errors.consultas.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='mensaje'>
            Mensaje
          </label>
          <textarea
            className={styles.textarea}
            autoFocus='false'
            placeholder='Escriba su consulta'
            name='mesaje'
            cols='30'
            rows='10'
            {...register('mensaje', {
              required: {
                value: true,
                message: ' Debe proporcionar un mensaje ante de enviar'
              },
              minLength: {
                value: 10,
                message: 'El mensaje debe contener al menos 10 caracteres'
              }
            })}
          ></textarea>
          {errors && errors.mensaje && (
            <p className={styles.error}>{errors.mensaje.message}</p>
          )}
        </div>
        <input className={styles.button} type='submit' />
      </form>
    </div>
  )
}

export default ContactoForm
