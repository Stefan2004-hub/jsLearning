import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    outputs:['out1', 'out2', 'out3', 'out4']
  }
  changeState = (event) => {
    this.setState({
      outputs:[event.target.value, 'out2', 'out3', 'out4']
  })
  }
  render() {
    return (
      <div className="App">
        <ol>
          <li> Create two new components: User Inpus and user Output</li>
          <li> User Input should hold an imput element, User Output two paragraphs</li>
          <li> Output multiple UserOutput components in the app component (any paragraph texts of your choice)</li>
          <li> Pass a username (of yur choice) to UserOutput via props and display it there</li>
          <li> Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li> Add a method to manipulate the state (=> an event handler method)</li>
          <li> Pass the eventhandler method reference to the UserInput component and bind it to the input-change event</li>
          <li> Ensure that the new input entered by the user overwrites the old username passed to userOutput</li>
          <li> Add Two-way-binding to your input (in Userinput) to also display the starting username</li>
          <li> Add styling of your choice to your components/elements in the components - both with in-line styles and style-sheets</li>
        </ol>
        <UserInput change={this.changeState} name={this.state.outputs[0]}/>
        <UserOutput output={this.state.outputs[0]} output2={this.state.outputs[1]}/>
        <UserOutput output={this.state.outputs[2]} output2={this.state.outputs[3]}/>
      </div>
    );
  }
}

export default App;
