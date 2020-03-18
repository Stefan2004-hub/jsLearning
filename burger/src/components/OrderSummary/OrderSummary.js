import React from 'react';
import Aux from '../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey) => {
        return(
        <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
        </li>
        );
    });
    return (
        <Aux>
            <h1>Your Order</h1>
            <p>A declicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Contiue to checkout?</p>
        </Aux>
    );
};

export default orderSummary;