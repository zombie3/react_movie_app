import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello'); 
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count : current.count + 1 }));
    console.log(`add : ${this.state.count}`);
  };
  
  minus = () => {
    this.setState(current => ({ count : current.count - 1 }));
    console.log(`minus : ${this.state.count}`);
  };
  
  clear = () => {
    this.setState({ count : 0 });
    console.log(`clear : ${this.state.count}`);
  };

  render() {
    console.log('render');

    return <div>
      <h1>The number is {this.state.count}.</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      <button onClick={this.clear}>Clear</button>
    </div>;
  }
}

export default App;
