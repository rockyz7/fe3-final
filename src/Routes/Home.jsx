import React, { useContext, useEffect } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import axios from "axios"


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

    <main>
      <h1>Home</h1>
      <div className='card-grid'>
    {state.data.map(item => {
      return <Card key={item.id} name={item.name} username={item.username} id={item.id}/>
    })}
      </div>
    </main>

  )
}

export default Home