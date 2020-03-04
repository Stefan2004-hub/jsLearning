import React, {useRef, useEffect} from 'react';
import Classes from './Person.css';
import withClas from '../../../hoc/WithClass';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

const person = (props) => {
    const mainRef = useRef(null);

    useEffect(() => {
        mainRef.current.focus();
    }, []);

    return (
        <Aux>
            <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
            </AuthContext.Consumer>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input 
            type="text" 
            onChange={props.change} 
            value={props.name} 
            ref={mainRef}
            />
        </Aux>
    );
};

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClas(person, Classes.Person);