import React from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";


const Favs = () => {

  const localData = JSON.parse(localStorage.getItem("dentist"))

 
  if (localData.length === 0){
    return (
      <div className="no-favs">
        <p>You haven't added any favorites</p>
        <Link to="/home"><button>Add</button></Link>
      </div>
    )
  } 

  return (
    <div>
      <h1>Favorites</h1>
      <div className="card-grid">
        {localData.map(item => {
         return <Card key={item.id} name={item.name} username={item.username} id={item.id} />
        })}

      </div>
    </div>
  );
};

export default Favs;
