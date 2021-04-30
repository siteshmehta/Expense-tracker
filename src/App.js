import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import GlobalProvider from "./context/GlobalState";


function App() {
  return (
    <div className="container-fluid">
      <GlobalProvider>

      <div className="row">
        <div className="col-md-3 "></div>
        <div className="col-md-6">
          <Header />
          <Balance />
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
        </div>
        <div className="col-md-3"></div>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
