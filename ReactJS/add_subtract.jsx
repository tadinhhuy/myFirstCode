import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  decrement() {
    this.setState({
      itemCount: this.state.itemCount - 1
    })
  }
  reset() {
    this.setState({
      itemCount: this.state.itemCount = 0
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <br />
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <button onClick={this.reset}>Reset</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
        <MyComponent />
      </div>
    );
  }
};

export default App;

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);

  }

  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility
    })
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
