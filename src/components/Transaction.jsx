import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <li
      className={`group/item border-r-8 text-xl bg-white p-2 shadow-lg rounded-lg min-w-full mb-2 ${
        transaction.amount < 0 ? 'border-red-500' : 'border-green-500'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="text-right text-lg break-all">{transaction.text}</div>
        <div className="text-right text-lg flex">
          {sign}${Math.abs(transaction.amount)}
          <span
            className="group/delete invisible group-hover/item:visible"
            onClick={() => deleteTransaction(transaction.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 after:bg-red-500"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </span>
        </div>
      </div>
    </li>
  )
}
