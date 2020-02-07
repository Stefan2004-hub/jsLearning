import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>User {props.output}</p>
            <p>User {props.output2}</p>
        </div>
    )
};

export default UserOutput;