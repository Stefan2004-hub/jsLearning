import React from 'react';
import Classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons){
        btnClass = Classes.Red;
    }

    if (props.personList.length <=2){
        assignedClasses.push(Classes.red);
    }

    if (props.personList.length <=1 ){
      assignedClasses.push(Classes.bold);
    }

    return(
        <div className={Classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className = {assignedClasses.join(' ')}>This is working</p>
            <button onClick={props.divHandler} className={btnClass}>Switch Name</button>
        </div>
    );
};

export default cockpit;