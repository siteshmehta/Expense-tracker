import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
  const font_color = transaction['amount'] < 0 ? "red" : "skyblue";
  const { deleteTransaction } = useContext(GlobalContext);
  // deleteTransaction
  return (
    <div className="row shadow-sm m-0 mt-2 rounded border">
      <div className="col-12 m-0">
        <div className="row m-0">
          <div className="col-9" style={{"color":font_color }}>{transaction["text"]}</div>
          <div className="col-2 text-right">{transaction["amount"]}</div>
          <div className="col-1 text-right">
          <i className="fas fa-minus-circle text-danger"  style={{"cursor":"pointer"}} onClick={()=>deleteTransaction(transaction['id'])}></i>
          {/* <button type="button" className="btn btn-sm btn-danger ">DELETE</button>   */}
          </div>
        </div>
      </div>
    </div>
  );
}
