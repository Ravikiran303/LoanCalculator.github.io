import React, { Component } from "react";
import "../LoanCalculate/LoanCalculate.css";

export class LoanCalculate extends Component {
  state = {
    amountValue: 5000,
    yearsValue: 1
  };
  render() {
    return (
      <div className="Loan">
        <h4>Loan amount : between $500 and $5000 </h4>
        <input type="range" min="1" max="100" value="50" />
        <h4>Loan Duration : 6 and 24 months</h4>
        <input type="range" min="1" max="100" value="50" />
      </div>
    );
  }
}

export default LoanCalculate;
