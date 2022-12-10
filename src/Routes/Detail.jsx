import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const Detail = () => {
 const params = useParams()
 const [ dentist, setDentist ] = useState({})
 const url = `https://jsonplaceholder.typicode.com/users/${params.id}`


  useEffect(() => {
    axios(url)
    .then(response => setDentist(response.data))
    .catch(error => console.log(error))
  }, [url])

  return (

    <div className='details'>
    <h1>Dentist #{dentist.id} details</h1>
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
    </div>

  )
}

export default Detail