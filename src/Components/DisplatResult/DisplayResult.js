import React, { Component } from "react";
import "../DisplatResult/DisplayResult.css";

export class DisplatResult extends Component {
  render() {
    const {
      monthlyPayment: { amount = 0 } = {},
      interestRate = 0
    } = this.props.result;
    console.log(this.props.result);

    return (
      <div>
        <div>
          <h3>Monthly Result</h3>
          <div className="month">
            <div className="item">MonthlyIntrestRate : {interestRate}</div>
            <div className="item">Amount : {amount}</div>
          </div>
        </div>
        <div>
          <h3>Yearly Result</h3>

          <div className="item">Amount : {amount * 12}</div>
        </div>
      </div>
    );
  }
}

export default DisplatResult;
