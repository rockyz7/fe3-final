import { createContext, useReducer, useEffect, useMemo } from "react";
import axios from "axios"

export const initialState = {
  theme: "light", 
  data: [], 
}

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_SUCCESS':
    return {
        data: action.payload,  
    }

    case 'FETCH_ERROR':
    return {
        data: [],
    }

    case 'TOGGLE_THEME':
      return {
        ...state, 
        theme: action.payload === "dark" ? "light" : "dark"
      }

    default:
        return state
}
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = {
    state, 
    dispatch
  }
 
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
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};






