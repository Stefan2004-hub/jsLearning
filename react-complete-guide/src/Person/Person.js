// function person(){
//     return <h1>blabla</h1>
// }

// var person = function(){}
import React from 'react';

const person = (props) => {
    // return <p>I'm {props.name} and I am {Math.floor(Math.random() * 30)} years old</p>
    return <p>I'm {props.name} and I am {props.age} years old</p>
};

export default person;