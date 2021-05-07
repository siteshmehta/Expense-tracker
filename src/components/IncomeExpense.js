import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  var amounts = transactions.map((transaction) => transaction["amount"]);

  const income = amounts
    .filter((amount) => {
      return amount > 0;
    })
    .reduce((acc, item) => {
      return (acc += item);
    },0)
    .toFixed(2);

  const expenses = amounts
    .filter((amount) => {
      return amount < 0;
    })
    .reduce((acc, item) => {
      return (acc += item) * -1;
    },0)
    .toFixed(2);

  return (
    <div className="row shadow-sm text-center p-3 border-top border-bottom border-secondary border-1">
      <div className="col-6">
        <div className="row">
          <div className="col-12" style={{"fontFamily":"Nunito Sans","fontSize":"17px"}}>INCOME</div>
          <div className="col-12" style={{color:"#00AFB9"}}>{income}</div>
        </div>
      </div>
      <div className="col-6 border-start border-dark">
        <div className="row">
          <div className="col-12" style={{"fontFamily":"Nunito Sans","fontSize":"17px"}}>EXPENSE</div>
          <div className="col-12" style={{color:"#F07167"}}>{expenses}</div>
        </div>
      </div>
    </div>
  );
}
