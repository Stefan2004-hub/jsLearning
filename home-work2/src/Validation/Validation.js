import React from 'react';

const validation = (props) => {
    // let validationMessage = (<p>Text too short</p>);

    // if (props.validationCheck<=5) {
    //     validationMessage = (<p>Text too long</p>);
    // }

    const checklength = () => {

        let validationMessage = 'Text too short';
        if (props.validationCheck>5) {
            validationMessage = 'Text long enough';
        }
        return (<p>{validationMessage}</p>);
    }

    // let validationText = 'Text long enough';

    // if(props.validationCheck<5){
    //     validationText = 'Text too short';
    // }

    return (
        <div>
            {/* {
                props.validationCheck <5 ?
                <p>Text to short</p>:
                <p>Text long enough</p>
            } */}
            {checklength()}
            {/* <p>{validationText}</p> */}
        </div>
    )
}

export default validation;