import React, { Component } from 'react';
// import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// import { useState } from 'react';

class App extends Component {
  // const app = (props) => {
    state = {
      persons:[
          {id: 'id1', name:'Max', age:28},
          {id: 'id2',name:'Manu', age:29},
          {id: 'id3',name:'Bunicu', age:56}
        ],
        otherObject: "Other Value",
        showDiv:true,
        Hobbies:['film', 'muzica', 'teatru']
    };
    // switchNameHandler = (newName) => {
    //   // console.log("Was Clicked");
    //   // don't do this this.state.persons[0].name = "Maximilian";
    //     this.setState({
    //       persons:[
    //         {name:newName, age:29},
    //         {name:'Manu', age:29},
    //         {name:'Bunicu', age:60}
    //       ]
    //     });
    //   };
    deletePersonHandler = (personIndex) =>{
      // const newPersons = this.state.persons;
      // const newHobies = this.state.Hobbies;
      // const newPersons = this.state.persons.slice();
      // const newHobies = this.state.Hobbies.slice();
      
      const newPersons = [...this.state.persons];
      const newHobies = [...this.state.Hobbies];

      newPersons.splice(personIndex, 1);
      newHobies.splice(personIndex, 1);
      this.setState({persons:newPersons, Hobbies:newHobies});

    }
    divHandler = () => {
      const showDivCond = this.state.showDiv;
      this.setState({
        showDiv:!showDivCond
      })
    }
    changeNameValue = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const newPersons = [...this.state.persons];
      newPersons[personIndex] = person;

      this.setState({
        persons:newPersons
      });
    }

  render() {
    let persons;

    if(this.state.showDiv){
      persons = (
          <div>
            {this.state.persons.map((persons, index) => {
              return <Person 
              name={persons.name} 
              age = {persons.age} 
              key={persons.id}
              click = {() => this.deletePersonHandler(index)}
              change={(event) => this.changeNameValue(event, persons.id)}>
                {this.state.Hobbies[index]}
              </Person>
            })}
            {/* <Person name = {this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Bogdan')}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.changeNameValue}>My Hobbies are: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
          </div>
      );
    }
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    console.log(this.state);
    // const [personState, setPersonsState] = useState({
    //     persons:[
    //       {name:'Max', age:28},
    //       {name:'Manu', age:29},
    //       {name:'Bunicu', age:56}
    //     ]
    //   });
    // const [otherState] = useState(
    //   {
    //     otherState: "In plus"
    //   }
    // );

  //   const switchNameHandler = () => {
  //     setPersonsState({
  //       persons:[
  //         {name:'Maximilian', age:29},
  //         {name:'Manu', age:29},
  //         {name:'Bunicu', age:60}
  //       ]
  //   });
  // }

    return (
      <div className="App">
        <h1>Hi, I am a Robot</h1>
        <p>This is working</p>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')} style={style}>Switch Name</button> */}
        <button onClick={this.divHandler} style={style}>Switch Name</button>
        {/* <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button> */}
        {/* <button onClick={switchNameHandler}>Switch Name</button> */}
        {/* <Person name = "Yo" age="44"/>
        <Person name="Bogdan" age="15">My Hobbies are: Racing</Person>
        <Person name="Bingo" age="32"/> */}
        {/* {this.state.showDiv ? */}
          {persons}
          {/* :null */}
        {/* } */}
      </div>
    );
    // console.log(personState, otherState);
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m a Robott'));
  }
}
// console.log(state);
export default App;

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