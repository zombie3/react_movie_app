import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log(`add : ${this.state.count}`)
  };
  
  minus = () => {
    console.log(`minus : ${this.state.count}`)
  };
  
  clear = () => {
    console.log(`clear : ${this.state.count}`)
  };

  render() {
    return <div>
      <h1>The number is {this.state.count}.</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      <button onClick={this.clear}>Clear</button>
    </div>;
  }
}

export default App;
