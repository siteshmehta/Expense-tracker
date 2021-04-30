import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  var amounts = transactions.map((transaction) => transaction["amount"]);

  var total = amounts.reduce((acc, value) => {
    return (acc += value);
  },0).toFixed(2);
  
  
  
  return (
    <div className="row shadow-sm">
      <div className="col-12">
        <p>YOUR BALANCE</p>
        <p style={{ fontSize: "20px" }}>{total}</p>
      </div>
    </div>
  );
}
