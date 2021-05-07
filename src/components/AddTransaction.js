import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(text || amount)) {
      alert("Please enter the value");
      return;
    }
    if (!transactionType) {
      alert("Select transaction type");
      return;
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: transactionType === "-" ? Number(-amount) : Number(amount),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setTransactionType("");
  };

  return (
    <div className="row mt-4">
      <div className="col-12 px-0">
        <p className="fw-bold border-bottom">Add new transaction</p>
      </div>

      <div className="col-12  px-0">
        <form onSubmit={onSubmit}>
          <p className="m-0 p-0">Text</p>
          <input
            type="text"
            className="form-control shadow-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={"Enter the transaction name"}
          />
          <p className=" m-0 mt-2 p-0">Amount &nbsp;</p>
          <div className="input-group input-group-sm">
            <div class="input-group-text">
              <select
                className=" form-control-sm"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option disabled={true} value="">
                  Select txn. type
                </option>
                <option value="+">Income</option>
                <option value="-">Expense</option>
              </select>
            </div>
            <input
              type="number"
              className="form-control shadow-none"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              step="1"
            />
          </div>
          <div className="d-grid mt-4">
            <button
              type="submit"
              className="btn btn-primary btn-sm text-center btn-block"
            >
              Add transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}