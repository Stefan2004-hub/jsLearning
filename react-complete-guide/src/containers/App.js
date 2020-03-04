import React, { Component } from 'react';
import Classes from './App.css';
// import Classes from '../components/Persons/Person/Person.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
    state = {
      persons:[
          {id: 'id1', name:'Max', age:28},
          {id: 'id2',name:'Manu', age:29},
          {id: 'id3',name:'Bunicu', age:56}
        ],
        otherObject: "Other Value",
        showDiv:false,
        Hobbies:['film', 'muzica', 'teatru'],
        showCockpit:true,
        changeCounter:0,
        authenticated:false
    };

    deletePersonHandler = (personIndex) =>{
     
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

      this.setState((prevState, props) => {
        return{
          persons:newPersons,
          changeCounter:prevState.changeCounter+1
        };
      });
    }

    loginHandler = () => {
      this.setState({authenticated:true});
    }

  render() {
    let persons;

    if(this.state.showDiv){
      persons = <Persons 
      personList={this.state.persons} 
      clicked={this.deletePersonHandler} 
      changed={this.changeNameValue}
      isAuthenticated={this.state.authenticated}/>;
    };

    console.log(this.state);
    
    return (
        <Aux>
          <button onClick={() => {this.setState({showCockpit:  false});}}>Remove Cockpit</button>
          <AuthContext.Provider value={{authenticated:this.state.authenticated,login:this.loginHandler}}>
            {this.state.showCockpit ? (<Cockpit 
            title={this.props.appTitle}
            personListLength = {this.state.persons.length}
            showPersons = {this.state.showDiv}
            divHandler={this.divHandler}/>) : null}
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, Classes.App);