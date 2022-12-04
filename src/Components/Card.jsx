import React from "react";



const Card = ({ name, username, id }) => {

  const addFav = () =>{
    // Aqui iria la logica para agregar la Card en el localStorage
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
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
