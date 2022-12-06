import React, { useContext, useReducer, useEffect, createContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { StorageContext } from "./utils/localStorage.context";


const Card = ({ name, username, id }) => {
const {state, dispatch} = useContext(StorageContext)

  const addFav = (event, id, name, username) => {
    event.preventDefault()
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: "ADD_FAV", payload: {id, name, username}})
    alert("Se agregó a favoritos")
  }

  return (
    
  <div className="card">
      
      <img src="./images/doctor.jpg" alt="" />
      <h3>{name}</h3>
      <p>{username}</p>
      <p>{id}</p>
     
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={(event) => addFav(event, id, name, username)} className="favButton">⭐</button>

    </div>
    
  );
};

export default Card;
