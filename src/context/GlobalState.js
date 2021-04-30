import React, { createContext, useReducer,useEffect } from "react";
import AddReducer from './AddReducer';


const initialState = {
  transactions: [],
};


//create context
export const GlobalContext = createContext(initialState);

//Provider component
export default function GlobalProvider  ({ children }) {
  const [state, dispatch] = useReducer(AddReducer, initialState , () => {
    const localData = localStorage.getItem("transactions")
    return localStorage ? JSON.parse(localData) : [];
  } );

  useEffect( function(){
    localStorage.setItem('transactions',JSON.stringify(state))
  },[state])


  //actions
  function deleteTransaction(id){
    dispatch({
      type : 'DELETE_TRANSACTION',
      payload:id
    })
  }

  function addTransaction(transaction){
    dispatch({
      type : 'ADD_TRANSACTION',
      payload:transaction
    })
  }

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions,deleteTransaction,addTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
}