(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(7),a=c.n(r),o=(c(13),c(14),c(3)),i=c(8),l=c(4),d=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!=t.payload}))});case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},j=c(0),b={transactions:[]},u=Object(n.createContext)(b);function m(e){var t=e.children,c=Object(n.useReducer)(d,b,(function(){var e=localStorage.getItem("transactions");return localStorage?JSON.parse(e):[]})),s=Object(o.a)(c,2),r=s[0],a=s[1];return Object(n.useEffect)((function(){localStorage.setItem("transactions",JSON.stringify(r))}),[r]),Object(j.jsx)(u.Provider,{value:{transactions:r.transactions,deleteTransaction:function(e){a({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){a({type:"ADD_TRANSACTION",payload:e})}},children:t})}function x(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(0),a=Object(o.a)(r,2),i=a[0],l=a[1],d=Object(n.useContext)(u).addTransaction;return Object(j.jsxs)("div",{className:"row mt-2",children:[Object(j.jsx)("div",{className:"col-12 px-0",children:Object(j.jsx)("p",{className:"fw-bold border-bottom",children:"Add new transaction"})}),Object(j.jsx)("div",{className:"col-12  px-0",children:Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),c||i){var t={id:Math.floor(1e4*Math.random()),text:c,amount:+i};d(t),s(""),l(0)}else alert("Please enter the value")},children:[Object(j.jsx)("p",{children:"Text"}),Object(j.jsx)("input",{type:"text",className:"form-control shadow-none",value:c,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("p",{children:"Amount"}),Object(j.jsx)("span",{className:"text-secondary",children:"(Negative- expenses, positive - income )"}),Object(j.jsx)("input",{type:"number",className:"form-control shadow-none",value:i,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("div",{className:"d-grid mt-4",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary btn-sm text-center btn-block",children:"Add transaction"})})]})})]})}function O(){var e=Object(n.useContext)(u).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(j.jsx)("div",{className:"row shadow-sm",children:Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("p",{children:"YOUR BALANCE"}),Object(j.jsxs)("p",{style:{fontSize:"20px"},children:["\u20b9 ",e]})]})})}function h(){var e=Object(n.useContext)(u).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),c=e.filter((function(e){return e<0})).reduce((function(e,t){return-1*(e+=t)}),0).toFixed(2);return Object(j.jsxs)("div",{className:"row shadow-sm text-center p-3 border-top border-bottom border-secondary border-1",children:[Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12",style:{fontFamily:"Nunito Sans",fontSize:"17px"},children:"INCOME"}),Object(j.jsx)("div",{className:"col-12",style:{color:"#00AFB9"},children:t})]})}),Object(j.jsx)("div",{className:"col-6 border-start border-dark",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12",style:{fontFamily:"Nunito Sans",fontSize:"17px"},children:"EXPENSES"}),Object(j.jsx)("div",{className:"col-12",style:{color:"#F07167"},children:c})]})})]})}function f(){return Object(j.jsx)("div",{className:"row border-bottom text-center  text-light rounded-top",style:{backgroundColor:"#4B4453"},children:Object(j.jsx)("div",{className:"col-12",style:{fontFamily:"Lato"},children:Object(j.jsx)("h5",{className:"my-auto p-2",children:"Expense Tracker"})})})}function p(e){var t=e.transaction,c=t.amount<0?"#F07167":"#00AFB9",s=t.amount<0?"10px solid #F07167":"10px solid #00AFB9",r=t.amount<0?"-":"+",a=Object(n.useContext)(u).deleteTransaction;return Object(j.jsx)("div",{className:"row shadow-sm m-0 mt-2",children:Object(j.jsx)("div",{className:"col-12 m-0 p-0",children:Object(j.jsxs)("div",{className:"row m-0 p-0",children:[Object(j.jsx)("div",{className:"col-sm-5 col-md-9",style:{color:c,borderLeft:s,fontFamily:"Open Sans",fontSize:"17px"},children:t.text}),Object(j.jsxs)("div",{className:" col-sm-2  col-md-2 text-right",style:{fontFamily:"Open Sans",fontSize:"17px"},children:[r," \u20b9",Math.abs(t.amount)]}),Object(j.jsx)("div",{className:" col-sm-2 col-md-1 text-right",style:{borderRight:s},children:Object(j.jsx)("i",{className:"fas fa-minus-circle text-danger",style:{cursor:"pointer"},onClick:function(){return a(t.id)}})})]})})})}function N(){var e=Object(n.useContext)(u).transactions;return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-12 m-0 p-0",children:[Object(j.jsx)("p",{className:"fw-bold border-bottom mt-3",children:"Transactions"}),e.length<=0?Object(j.jsx)("p",{className:"text-muted text-center my-3",children:"No transaction yet."}):e.map((function(e){return Object(j.jsx)(p,{transaction:e},e.id)}))]})})}function v(){return Object(j.jsx)("div",{className:"row border-bottom text-center mt-5  text-light rounded-bottom",style:{backgroundColor:"#4B4453"},children:Object(j.jsx)("div",{className:"col-12",children:"-"})})}var y=function(){return Object(j.jsx)("div",{className:"container-fluid user-select-none",children:Object(j.jsx)(m,{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-3 "}),Object(j.jsxs)("div",{className:"col-md-6 main_app border border-5  rounded shadow p-5",children:[Object(j.jsx)(f,{}),Object(j.jsx)(O,{}),Object(j.jsx)(h,{}),Object(j.jsx)(N,{}),Object(j.jsx)(x,{}),Object(j.jsx)(v,{})]}),Object(j.jsx)("div",{className:"col-md-3"})]})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.54313bcd.chunk.js.map