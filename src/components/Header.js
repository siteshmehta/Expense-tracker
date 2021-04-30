import React from "react";

export default function Header() {
  return (
    <div className="row border-bottom text-center  text-light rounded-top" style={{backgroundColor:"#4B4453"}}>
      <div className="col-12" style={{"fontFamily":"Lato"}}><h5 className="my-auto p-2">Expense Tracker</h5></div>
    </div>
  );
}
// style={{"fontFamily":"Nunito Sans","fontSize":"17px"}}