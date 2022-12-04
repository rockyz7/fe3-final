import React from 'react'
import { NavLink } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav style={{width: "90vw", marginLeft: "50px", display: "flex", justifyContent: "space-between"}}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
      <NavLink to="./home" style={{ fontSize: "1.5rem"}}><span style={{color: "red"}}>D</span>H Odonto</NavLink>
      </div>
      <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/favs">Favs</NavLink>
      <button style={{backgroundColor: "black", borderRadius: "7px"}}>🌙</button>
      </div>
 
    </nav>
  )
}

export default Navbar