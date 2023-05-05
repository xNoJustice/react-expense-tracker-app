import React, { useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from './../context/globalState'

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext)
  return (
    <div className="pt-4">
      <h3 className="border-b-2 border-gray-400 text-center p-4">History</h3>
      <ul className="w-60 md:w-96">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  )
}
