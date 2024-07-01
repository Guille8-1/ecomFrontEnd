import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'

import Inicio from './components/mainLayout/inicio/inicioPage.tsx'
import Inventario from './components/mainLayout/inventario/initialView/inventario.tsx'
import Ventas from './components/mainLayout/ventas/ventas.tsx'
import Configuracion from './components/mainLayout/configuracion/configuracion.tsx'
import Reportes from './components/mainLayout/reportes/reportes.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio/>} />
          <Route path='ventas' element={<Ventas/>} />
          <Route path='inventario' element={<Inventario/>} />
          <Route path='reportes' element={<Reportes/>} />
          <Route path='configuracion' element={<Configuracion/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
