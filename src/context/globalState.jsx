import { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'

const initalState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || [],
}

export const GlobalContext = createContext(initalState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState)

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions))
  }, [state])

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
