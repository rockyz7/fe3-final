import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 const params = useParams()
 const [ dentist, setDentist ] = useState({})
 const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    axios(url)
    .then(response => setDentist(response.data))
    .catch(error => console.log(error))
  }, [params])

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h3>{dentist.name}</h3>
      <p>{dentist.email}</p>
      <p>{dentist.phone}</p>
      <p>{dentist.website}</p>
    </>
  )
}

export default Detail