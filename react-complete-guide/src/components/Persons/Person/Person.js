import React from 'react';
import Classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';

const person = (props) => {
    return (
        <Aux>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </Aux>
    );
};

export default person;