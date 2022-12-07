import axios from 'axios'
import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 const params = useParams()
 const [ dentist, setDentist ] = useState({})
 const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { state } = useContext(ContextGlobal)
  useEffect(() => {
    axios(url)
    .then(response => setDentist(response.data))
    .catch(error => console.log(error))
  }, [params])

  return (
    <div className={state.theme}>
    <h1>Detail Dentist {dentist.id}</h1>
    <table>
     <tbody>
     <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
      <tr>
        <td>{dentist.name}</td>
        <td>{dentist.email}</td>
        <td>{dentist.phone}</td>
        <td>{dentist.website}</td>
      </tr>
      </tbody>
    </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
  
    </div>
   
  )
}

export default Detail