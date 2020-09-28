import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  addOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <br />
        <button onClick={this.addOne}>Add One</button>
      </div>
    );
  }
}

export default Counter;
