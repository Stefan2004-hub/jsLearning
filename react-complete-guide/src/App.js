import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a Robot</h1>
        <p>This is working</p>
        <Person name = "Yo" age="44"/>
        <Person name="Bogdan" age="15">My Hobbies: Racing</Person>
        <Person name="Bingo" age="32"/>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m a Robott'));
  }
}

export default App;
