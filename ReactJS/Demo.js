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

  const inputStyle = {
    width: 235,
    margin: 5
  }
  
  class Philosophy extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        randomIndex: ''
      }
      this.random = this.random.bind(this);   
    }
    random() {
    this.setState({
        randomIndex: Math.floor(Math.random() * 20),
    });
    }
    render() {
      const possibleAnswers = [
        'Tất cả linh hồn của con người là bất diệt, nhưng linh hồn của người chính trực là bất tử và thần thánh. - "Socrates "',
        'Đức hạnh không đến từ sự giàu có, nhưng… sự giàu có, và tất cả những điều tốt lành mà con người có…đến từ đức hạnh. - "Socrates "',
        'Khi bạn khao khát trí tuệ và sự sáng suốt như hơi thở, bạn sẽ có được nó. - "Socrates"', 
        'People who are crazy enough to think they can change the world, are the ones who do - "Rob Siltanen"',
        'Believe you can and you\'re halfway there - "Theodore Roosevelt" ',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it', 
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
      const answer = possibleAnswers[this.state.randomIndex] // << change code here
      return (
        <div>
          <button onClick={this.random}>
            Give me a sayings
          </button><br />
          <h3>Answer:</h3>
          <p>
            {answer}
          </p>
        </div>
      );
    }
  };
