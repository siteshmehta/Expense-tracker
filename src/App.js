import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import GlobalProvider from "./context/GlobalState";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container-fluid user-select-none">
      <GlobalProvider>

      <div className="row">
        <div className="col-md-3 "></div>
        <div className="col-md-6 main_app border border-5  rounded shadow p-5">
          <Header />
          <Balance />
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
          <Footer/>
        </div>
        <div className="col-md-3"></div>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
