import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

export const Layout = () => {

  const { state } = useContext(ContextGlobal)

  return (
    <div>
        <Navbar/>
        <main className={state.theme}>
        <Outlet/>
        </main>
        
        <Footer/>
    </div>
  )
}

