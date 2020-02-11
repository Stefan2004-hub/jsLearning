import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {userinput:''}
  onChangeHandler = (event) => {
    this.setState({userinput:event.target.value});
  }

  deleteHandler = (index) =>{
    const text = this.state.userinput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userinput:updatedText});
  }
  render() {

    const charArray = this.state.userinput.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteHandler(index)}/>;
    });
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the 
            entered text below it (e.g. in a paragraph).
          </li>
          <li>Create a new component (=> validationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text to short" or "Text Long enough"
            depending on the text length (e.g. take 5 as minimum length)
          </li>
          <li>Create another component (=> CharComponent) and style-it as an inline box
            (=> display:inline-block, padding:16px, text-align:center, margin:16px, border:1px solid black).
          </li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the etered text
            (in the initial input field) as a prop.
          </li>
          <li>When you click a CharComponent, it should be removed from the entered text</li>
        </ol>
        <p className="App-Paragraph">Hint: Keep in mind that JavaScript strings are basically arrays</p>
        <hr/>
        <input type="text" onChange={this.onChangeHandler} value={this.state.userinput}/>
        <p>{this.state.userinput}</p>
        <Validation validationCheck={this.state.userinput.length}/>
        {charArray}
      </div>
    );
  }
}

export default App;
