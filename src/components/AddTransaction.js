import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setamount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(text || amount)) {
      alert("Please enter the value");
      return;
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setamount(0);
  };

  return (
    <div className="row mt-4">
      <div className="col-12 px-0">
        <p className="fw-bold border-bottom">Add new transaction</p>
      </div>

      <div className="col-12  px-0">
        <form onSubmit={onSubmit}>
          <p class="m-0 p-0">Text</p>
          <input
            type="text"
            className="form-control shadow-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={"Enter the transaction name"}
          />
          <p class=" m-0 mt-2 p-0">
            Amount &nbsp;
            <span className="text-secondary m-0 p-0">
              (Negative- expenses, positive - income )
            </span>
          </p>
          <input
            type="number"
            className="form-control shadow-none"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />
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
