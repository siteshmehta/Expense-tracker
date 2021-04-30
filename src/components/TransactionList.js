import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

 

  return (
    <div className="row">
      <div className="col-12 m-0 p-0">
        <p className="fw-bold border-bottom mt-3">Transactions</p>
        {transactions.length <= 0 ? <p className="text-muted text-center my-3">No transaction yet.</p> : transactions.map(transaction=><Transaction key={transaction['id']} transaction={transaction} />)}
      </div>
    </div>
  );
}
