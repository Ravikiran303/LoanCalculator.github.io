import React, { Component } from "react";
import "../LoanCalculate/LoanCalculate.css";
import Slider from "../Slider/Slider";
import axios from "axios";
import DisplatResult from "../DisplatResult/DisplayResult";

export class LoanCalculate extends Component {
  state = {
    amount: 500,
    years: 6,
    res: {}
  };
  componentDidMount = async () => {
    this.fetchData();
  };
  fetchData = async () => {
    const responce = await axios.get(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${
        this.state.amount
      }&numMonths=${this.state.years}`
    );
    this.setState({ res: responce.data });
  };
  setAmount = amount => {
    this.setState(
      {
        amount
      },
      () => {
        this.fetchData();
      }
    );
  };
  setYears(years) {
    this.setState(
      {
        years
      },
      () => {
        this.fetchData();
      }
    );
  }
  render() {
    return (
      <div className="Loan">
        <div className="slide">
          <Slider
            title="Loan amount : between $500 and $5000 "
            min="500"
            max="5000"
            step="100"
            value={this.state.amount}
            changeValue={value => this.setAmount(value)}
          />
          <Slider
            title="Loan Duration : 6 and 24 Months"
            min="6"
            max="24"
            step="1"
            value={this.state.years}
            changeValue={value => this.setYears(value)}
          />
        </div>
        <div className="result">
          <DisplatResult result={this.state.res} />
        </div>
      </div>
    );
  }
}

export default LoanCalculate;
