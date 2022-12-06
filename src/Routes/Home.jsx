import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContext(ContextGlobal)

  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
    {state.data.map(item => {
      return <Link to={`/dentista/${item.id}`}> 
      <Card key={item.id} name={item.name} username={item.username} id={item.id}/>
      </Link> 
    })}

        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home