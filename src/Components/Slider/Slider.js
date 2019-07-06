import React, { Component } from "react";
import "../Slider/Slider.css";
export class Slider extends Component {
  render() {
    return (
      <div className="sliderClass">
        <h4>{this.props.title} </h4>
        <div className="slide-label">
          <input
            className="slider"
            type="range"
            min={this.props.min}
            max={this.props.max}
            value={this.props.value}
            step={this.props.step}
            onChange={e => {
              this.props.changeValue(e.target.value);
            }}
          />
          <label>{this.props.value}</label>
        </div>
      </div>
    );
  }
}

export default Slider;
