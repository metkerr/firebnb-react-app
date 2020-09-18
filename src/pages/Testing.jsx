import { InputDate } from "elements/Form";
import React, { Component } from "react";
export default class Testing extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputDate
              onChange={this.handleChange}
              name={this.state.value}
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
