import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { data } = useContext(ContextGlobal)
  
  console.log(data);
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
    {data.map(item => {
      return <Card name={item.name} username={item.username} id={item.id}/>
    })}
  

      
    
     
        {/* Aqui deberias renderizar las cards */}
      </div>
      
    </main>
  )
}

export default Home