import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/globalState'

export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext)
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const handleClick = () => {
    if (text === '' || amount === '') {
      return
    }
    const newTransaction = {
      id: new Date().toString(),
      text: text,
      amount: +amount,
    }

    addTransaction(newTransaction)
    setText('')
    setAmount('')
  }

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <h3 className="text-xl border-b-2 border-gray-400 mb-2 uppercase">
        Add new transaction
      </h3>
      <label htmlFor="text" className="text-lg text-left mr-auto text-gray-700">
        Text
      </label>
      <input
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="text"
        className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <label
        htmlFor="amount"
        className="text-lg text-left mr-auto text-gray-700"
      >
        Amount
        <div className="text-xs mb-1">
          (negative - expense, positive - income)
        </div>
      </label>
      <input
        type="number"
        placeholder="Enter amount..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        id="amount"
        className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <button
        type="button"
        className="py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
        onClick={() => handleClick()}
      >
        Add Transaction
      </button>
    </div>
  )
}
