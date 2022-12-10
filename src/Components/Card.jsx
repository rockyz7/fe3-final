import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StorageContext } from "./utils/localStorage.context";
import Swal from 'sweetalert2';


const Card = ({ name, username, id }) => {
const {state, dispatch} = useContext(StorageContext)

const array = state.favs;


  const addFav = (id, name, username) => {
  
    // Aqui iria la logica para agregar la Card en el localStorage
      const found = array.find(obj => obj.id === id)
      if (found === undefined){
        dispatch({type: "ADD_FAV", payload: {id, name, username}})

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          width: '350px',
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Added to favs'
        })
      }
      else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          width: '350px',
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'That dentist has already been added!'
        })
      }
  }

  return (
  
  <div className="card">
    
      <img src="./images/doctor.jpg" alt="" />
      <h3><Link to={`/dentista/${id}`}>{name}</Link></h3>
      <p>{username}</p>
      {/* <p>{id}</p> */}
      
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => addFav(id, name, username)} className="favButton">Add to fav</button>
    </div>
    
  );
};

export default Card;
