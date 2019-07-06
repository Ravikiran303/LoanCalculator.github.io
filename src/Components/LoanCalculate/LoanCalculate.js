import React, { Component } from "react";
import "../LoanCalculate/LoanCalculate.css";
import LoanAmount from "../LoanAmount/LoanAmount";
import LoanDuration from "../LoanDuration/LoanDuration";
import axios from "axios";

export class LoanCalculate extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount = async () => {
    const responce = await axios.get(
      "https://ftl-frontend-test.herokuapp.com/interest?amount=600&numMonths=7"
    );
  };
  getAmount() {
    console.log("amount");
  }
  getYears() {
    console.log("years");
  }
  render() {
    return (
      <div className="Loan">
        <LoanAmount amount={this.getAmount} />
        <LoanDuration years={this.getYears} />
      </div>
    );
  }
}

export default LoanCalculate;
