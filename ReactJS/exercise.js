import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Philosophy/>
            </div>
        );
    }
};

export default App;


class Add_Remove_Reset extends React.Component {
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
            </div>
        );
    }
};



class Turn_On_Off extends React.Component {
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

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return (
            <div>

                <input
                    value={this.state.input}
                    onChange={this.handleChange} />

                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      
      event.preventDefault();
      this.setState({
        input:'',
        submit: this.state.input
      })
      
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
         
            <input value={this.state.input} onChange={this.handleChange}/>
            
         
            <button type='submit'>Submit!</button>
          </form>
     
          <h1>{this.state.submit}</h1>
          
        </div>
      );
    }
  };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
       <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
  
