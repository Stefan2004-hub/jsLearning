import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.personList.map((person, index) => {
    return <Person 
    name={person.name} 
    age = {person.age} 
    key={person.id}
    click = {() => props.clicked(index)}
    change={(event) => props.changed(event, person.id)}>
    </Person>
  });

export default persons;