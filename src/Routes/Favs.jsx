import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal)
  const localData = JSON.parse(localStorage.getItem("dentist"))
 
  return (
    <div className={state.theme}>
    
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {localData.map(item => {
          
         return <Card key={item.id} name={item.name} username={item.username} id={item.id}/>
        })}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
