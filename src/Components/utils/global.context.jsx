import { createContext, useReducer, useEffect } from "react";
import axios from "axios"

export const initialState = {theme: "", data: []}

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

    default:
        return state
}
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)

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
    <ContextGlobal.Provider value={state}>
      {children}
    </ContextGlobal.Provider>
  );
};






