import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
  const font_color = transaction['amount'] < 0 ? "#F07167" : "#00AFB9";
  const border_color = transaction['amount'] < 0 ? "10px solid #F07167" : "10px solid #00AFB9";
  const symbol = transaction['amount'] < 0 ? "-" : "+";


  const { deleteTransaction } = useContext(GlobalContext);
  // deleteTransaction
  return (
    <div className="row shadow-sm m-0 mt-2">
      <div className="col-12 m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col-sm-5 col-md-9" style={{"color":font_color,"borderLeft":border_color,"fontFamily":"Open Sans","fontSize":"17px"}}>{transaction["text"]}</div>
          <div className=" col-sm-2  col-md-2 text-right" style={{"fontFamily":"Open Sans","fontSize":"17px"}}>{symbol} &#8377;{ Math.abs(transaction["amount"])}</div>
          <div className=" col-sm-2 col-md-1 text-right" style={{"borderRight":border_color }}>
          <i className="fas fa-minus-circle text-danger"  style={{"cursor":"pointer"}} onClick={()=>deleteTransaction(transaction['id'])}></i>
          {/* <button type="button" className="btn btn-sm btn-danger ">DELETE</button>   */}
          </div>
        </div>
      </div>
    </div>
  );
}
