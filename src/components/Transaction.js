import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
  const font_color = transaction['amount'] < 0 ? "#F07167" : "#00AFB9";
  const border_color = transaction['amount'] < 0 ? "2px solid #F07167" : "2px solid #00AFB9";
  const symbol = transaction['amount'] < 0 ? "-" : "+";


  const { deleteTransaction } = useContext(GlobalContext);
  // deleteTransaction
  return (
    <div className="row shadow-sm m-0 mt-2">
      <div className="col-12 m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col-md-9 col-8" style={{"color":font_color,"borderLeft":border_color,"fontFamily":"Open Sans","fontSize":"17px"}}>{transaction["text"]}</div>
          <div className="col-md-2 col-3 text-right text-nowrap" style={{"fontFamily":"Open Sans","fontSize":"17px"}}>{symbol} &#8377;{ Math.abs(transaction["amount"])}</div>
          <div className="col-md-1 col-1 text-right" style={{"borderRight":border_color }}>
              <i className="fas fa-minus-circle text-danger"  style={{"cursor":"pointer"}} onClick={()=>deleteTransaction(transaction['id'])}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
