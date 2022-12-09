import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import axios from "axios"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state, dispatch } = useContext(ContextGlobal)

  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data})

    })
    .catch(error => {
        dispatch({type: 'FETCH_ERROR'})
    })
   }, [])

  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
    {state.data.map(item => {
      return <Card key={item.id} name={item.name} username={item.username} id={item.id}/>
     
    })}

        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home