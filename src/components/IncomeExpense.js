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
    <div className="row shadow-sm text-center p-3 rounded">
      <div className="col-6">
        <div className="row">
          <div className="col-12">INCOME</div>
          <div className="col-12 text-success">{income}</div>
        </div>
      </div>
      <div className="col-6 border-start border-dark">
        <div className="row">
          <div className="col-12">EXPENSES</div>
          <div className="col-12 text-success">{expenses}</div>
        </div>
      </div>
    </div>
  );
}
