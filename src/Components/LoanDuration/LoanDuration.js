import React, { Component } from "react";

export class LoanDuration extends Component {
  state = {
    yearsValue: 6
  };
  render() {
    return (
      <div>
        <h4>Loan Duration : 6 and 24 months</h4>
        <input
          type="range"
          min="6"
          max="24"
          value={this.state.yearsValue}
          step="1"
          onChange={e => {
            this.setState({ yearsValue: e.target.value });
          }}
        />
        <label>{this.state.yearsValue}</label>
      </div>
    );
  }
}

export default LoanDuration;
