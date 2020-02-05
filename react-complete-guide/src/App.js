// import React, { Component } from 'react';
import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// import { useState } from 'react';

// class App extends Component {
  const app = (props) => {
  // render() {
    const [personState, setPersonsState] = useState({
        persons:[
          {name:'Max', age:28},
          {name:'Manu', age:29},
          {name:'Bunicu', age:56}
        ]
      });
    const [otherState] = useState(
      {
        otherState: "In plus"
      }
    );
      console.log(personState, otherState);
    const switchNameHandler = () => {
      setPersonsState({
        persons:[
          {name:'Maximilian', age:29},
          {name:'Manu', age:29},
          {name:'Bunicu', age:60}
        ]
    });
  }

    return (
      <div className="App">
        <h1>Hi, I am a Robot</h1>
        <p>This is working</p>
        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
        <button onClick={switchNameHandler}>Switch Name</button>
        {/* <Person name = "Yo" age="44"/>
        <Person name="Bogdan" age="15">My Hobbies are: Racing</Person>
        <Person name="Bingo" age="32"/> */}
        
        {/* <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies are: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
        
        <Person name = {personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies are: Racing</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>

      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m a Robott'));
  }
// }
export default app;

// state = {
//   persons:[
//     {name:'Max', age:28},
//     {name:'Manu', age:29},
//     {name:'Bunicu', age:56}
//   ]
// };

// switchNameHandler = () => {
//   // console.log("Was Clicked");
//   // don't do this this.state.persons[0].name = "Maximilian";
//   this.setState({
//     persons:[
//       {name:'Maximilian', age:29},
//       {name:'Manu', age:29},
//       {name:'Bunicu', age:60}
//     ]
//   })
// };
// }