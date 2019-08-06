import React from 'react';

function Food({ name }) {
  console.log(name);
  return <h2>{name} juice</h2>
}

function App() {
  return (
    <div>
      <h1>Hello World -</h1>
      <Food name="Tomato"/>
      <Food name="Potato"/>
      <Food name="Broccoli"/>
    </div>
  );
}

export default App;
