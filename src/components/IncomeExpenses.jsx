import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => transaction.amount)

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2)

  return (
    <div className="flex justify-between items-center">
      <div className="shadow-lg p-5 rounded-md">
        <h4 className="text-center text-xl uppercase">Income</h4>
        <p className="text-center text-green-500">${income}</p>
      </div>
      <div className="shadow-lg p-5 rounded-md">
        <h4 className="text-center text-xl uppercase">Expenses</h4>
        <p className="text-center text-red-500">${expense}</p>
      </div>
    </div>
  )
}
