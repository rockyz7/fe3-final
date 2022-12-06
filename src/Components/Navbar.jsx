import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  const handleThemeChange = () => {
    dispatch({type: "TOGGLE_THEME", payload: state.theme})
  }

  return (
    
    <nav className={state.theme} style={{ display: "flex", justifyContent: "space-between"}}>
    
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
      <NavLink to="/home" style={{ fontSize: "1.5rem"}}><span style={{color: "red"}}>D</span>H Odonto</NavLink>
      </div>
      <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/favs">Favs</NavLink>
      <button className='dark' style={{ borderRadius: "7px"}} onClick={handleThemeChange}> {state.theme === "dark" ? "🌞" : "🌙"}</button>
      </div>
      
    </nav>
  )
}

export default Navbar