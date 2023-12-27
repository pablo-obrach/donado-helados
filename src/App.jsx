import {BrowserRouter, Routes, Route} from 'react-router-dom'
//*Components
import Home from './components/home/Home'
//*Styles
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
