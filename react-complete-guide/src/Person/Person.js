// function person(){
//     return <h1>blabla</h1>
// }

// var person = function(){}
import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    // return <p>I'm {props.name} and I am {Math.floor(Math.random() * 30)} years old</p>
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
};

export default Radium(person);