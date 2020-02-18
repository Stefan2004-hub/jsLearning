// function person(){
//     return <h1>blabla</h1>
// }

// var person = function(){}
import React from 'react';
// import Radium from 'radium';
// import './Person.css';
import styled from 'styled-components';

const StyleDiv = styled.div`

    width: 60%;
    margin: 18px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 5px black;
    padding: 16px;
    text-align: center;

  
    @media (min-width: 500px){
      width: 450px;
    }
  
`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // }
    // return <p>I'm {props.name} and I am {Math.floor(Math.random() * 30)} years old</p>
    return (
        // <div className="Person" style={style}>
        //     <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
        //     <p>{props.children}</p>
        //     <input type="text" onChange={props.change} value={props.name}/>
        // </div>
        <StyleDiv>
        {/* <div className="Person"> */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        {/* </div> */}
        </StyleDiv>

    )
};

// export default Radium(person);
export default person;