import React, { useReducer } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'

export const StorageContext = createContext()


const getLocalStorage = () => {
    const localData = localStorage.getItem("dentist")
    return localData ? JSON.parse(localData) : []
  }
  
  const initialState = {
    favs: getLocalStorage()
  }

  const reducer = (state, action) => {
    if (action.type === "ADD_FAV"){
      const {id, name, username} = action.payload;
      const dentist = {
        id,
        name,
        username
      }
      
      return {
        favs: [...state.favs, dentist]
      }
    }

    return state
  }

const StorageProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState)


useEffect(()=> {
    localStorage.setItem("dentist", JSON.stringify(state.favs))
  }, [state.favs])

  

  return (
    <StorageContext.Provider value={{state, dispatch}}>
        <div>
         {children}
        </div>
    </StorageContext.Provider>
   

  )
}

export default StorageProvider