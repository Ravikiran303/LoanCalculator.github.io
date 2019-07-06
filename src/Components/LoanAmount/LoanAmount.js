import React, { Component } from "react";

export class LoanAmount extends Component {
  state = {
    amountValue: 500
  };
  render() {
    return (
      <div>
        <h4>Loan amount : between $500 and $5000 </h4>
        <input
          type="range"
          min="500"
          max="5000"
          value={this.state.amountValue}
          step="100"
          onChange={e => {
            this.setState({ amountValue: e.target.value });
          }}
        />
        <label>{this.state.amountValue}</label>
      </div>
    );
  }
}

export default LoanAmount;
