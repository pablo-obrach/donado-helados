import {BrowserRouter, Routes, Route} from 'react-router-dom'
//*Components
import Home from './components/home/Home'
import Lafabrica from './components/pages/laFabrica/LaFabrica'
import Contacto from './components/pages/contacto/Contacto'
import Sabores from './components/pages/sabores/Sabores'
import Sucursales from './components/pages/sucursales/Sucursales'
import FormProvider from './context/FormProvider'
//*Styles
import './App.css'
function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lafabrica' element={<Lafabrica />} />
          <Route path='/sabores/:sabor' element={<Sabores />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/sucursales' element={<Sucursales />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  )
}

export default App
