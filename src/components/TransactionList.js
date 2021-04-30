import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="row">
      <div className="col-12 m-0 p-0">
        {transactions.map(transaction=><Transaction key={transaction['id']} transaction={transaction} />)}
        <p className="fw-bold border-bottom">History</p>
      </div>
    </div>
  );
}
