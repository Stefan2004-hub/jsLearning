import React, { Component } from 'react';
// import styled from 'styled-components';
// import React, {useState} from 'react';
// import logo from './logo.svg';
import Classes from './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
// import { useState } from 'react';

// const StyledButton = styled.button`
// background-color:${props => props.alt ? 'red' : 'green'};
// color:white;
// font:inherit;
// border:px solid blue;
// padding: 8px;
// cursor: pointer;

// &:hover {
//   background-color:${props => props.alt ? 'salmon' : 'lightgreen'};
//   color:black;
// }
// `;
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
    // const style = {
    //   backgroundColor:'green',
    //   color:'white',
    //   font:'inherit',
    //   border:'1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover':{
    //     backgroundColor:'lightgreen',
    //     color:'black'
    //   }
    // };

    const assignedClasses = [];

    if (this.state.persons.length <=2){
      assignedClasses.push(Classes.red);
    }

    if (this.state.persons.length <=1 ){
      assignedClasses.push(Classes.bold);
    }

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
      // style.backgroundColor = 'red';

      // style[':hover'] = {
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
    }

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
      // <StyleRoot>
        <div className={Classes.App}>
          <h1>Hi, I am a Robot</h1>
          <p className = {assignedClasses.join(' ')}>This is working</p>
          {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')} style={style}>Switch Name</button> */}
          {/* <button onClick={this.divHandler} style={style}>Switch Name</button> */}
          {/* <StyledButton onClick={this.divHandler} alt={this.state.showDiv}>Switch Name</StyledButton> */}
          <button onClick={this.divHandler} className={Classes.Button}>Switch Name</button>
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
      // </StyleRoot>
    );
    // console.log(personState, otherState);
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I\'m a Robott'));
  }
}
// console.log(state);
// export default Radium(App);
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