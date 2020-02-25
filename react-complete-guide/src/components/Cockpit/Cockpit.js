import React, { useEffect } from 'react';
import Classes from './Cockpit.css';

const cockpit = (props) => {
    // when the persons update
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');
    //     // Http Request
    //     setTimeout(() => {
    //         alert('Saved data to cloud');
    //     }, 1000);
    // }, [props.personList]);

    // the first time that the app runs - uses an empty array
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http Request
        const timer = setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in useEffect');
        };
    });
    
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons){
        btnClass = Classes.Red;
    }

    if (props.personListLength <=2){
        assignedClasses.push(Classes.red);
    }

    if (props.personListLength <=1 ){
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

export default React.memo(cockpit);