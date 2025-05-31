import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import GaleriaProductos from './pages/GaleriaProductos'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'


function App() {

  const [cart, setCart] = useState ([])
  const [productos, setProductos] = useState ([])
  const [loading, setLoading] = useState (true)
  const [fail, setFail] = useState (false)

useEffect(()=>{
  fetch('/data/data.json')
  .then(respuesta => respuesta.json())
  .then(datos => {setTimeout(() => {
    setProductos(datos)
    setLoading(false)
  },2000)})
  .catch(fail => {
    console.log('Error',fail);
    setLoading(false)
    setFail(true)
    
  })
  
},[])


  return (
   <Router>

      <Routes>

          <Route path='/'element={<Home productos={productos} loading={loading} />}/>

          <Route path='/acercade'element={<AcercaDe/>}/>

          <Route path='/productos'element={<GaleriaProductos/>}/>

          <Route path='/contacto'element={<Contacto/>}/>

          <Route path='*'element={<NotFound/>}/>

      </Routes>

   </Router>
  )
}

export default App
