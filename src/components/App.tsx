import MainLayout from './mainLayout/headerComponent/header.tsx'
import SidePanel from './mainLayout/sidePanelCompoenent/sidePanel.tsx'

import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <>
      <div className="headerContent">
        <MainLayout />
      </div>
      <section className="sidepanel-styles">
        <SidePanel />
      </section>
      <div className='outlet-style'>
        <Outlet />
      </div>
    </>
  )
}

export default App
