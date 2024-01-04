import {useState} from 'react'
import FormContext from './FormContext'

const FormProvider = ({children}) => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    consultas: '',
    mensaje: ''
  })

  console.log(form)

  return (
    <FormContext.Provider value={{form, setForm}}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
