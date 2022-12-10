import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  const handleThemeChange = () => {
    dispatch({type: "TOGGLE_THEME", payload: state.theme})
  }

  return (
    
    <nav className={state.theme}>
      
      <div>
      <NavLink className="logo" to="/home"><span>D</span>H Odonto</NavLink>
      </div>
      <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/favs">Favs</NavLink>
      <button className={!state.theme} onClick={handleThemeChange}> {state.theme === "dark" ? "💡" : "🌙"}</button>
      </div>
      
    </nav>
  )
}

export default Navbar