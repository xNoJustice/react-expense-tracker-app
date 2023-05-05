import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpenses,
  TransactionList,
} from './components'
import { GlobalProvider } from './context/globalState'

function App() {
  return (
    <GlobalProvider>
      <div className="w-full min-h-screen h-auto flex flex-col justify-center items-center mx-auto p-6 text-2xl font-bold">
        <Header />
        <div className="flex flex-col justify-start items-center bg-white rounded-lg p-3">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
