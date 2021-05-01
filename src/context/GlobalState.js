import React, { createContext, useReducer,useEffect } from "react";
import AddReducer from './AddReducer';


const initialState = {
  transactions: []
};


//create context
export const GlobalContext = createContext(initialState);

//Provider component
export default function GlobalProvider  ({ children }) {
  
  const [state, dispatch] = useReducer(AddReducer, initialState, () =>{
    if(!localStorage.getItem("transactions")) return initialState;
    return JSON.parse(localStorage.getItem("transactions"))
  });

  
  useEffect( function(){
    if(state){
      localStorage.setItem('transactions',JSON.stringify(state))
    }
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