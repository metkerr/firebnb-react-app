import React, { Component } from "react";
import InputNumber from "elements/Form/InputNumber/index";
export default class Testing extends Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputNumber
              max={30}
              onChange={this.handleChange}
              name="value"
              suffix=" night"
              isSuffixPlural
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
