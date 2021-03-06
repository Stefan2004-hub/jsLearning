import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad:0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.3
}
class BurgerBuilder extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {...};
    // }
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrince:4,
        purchaseable: false,
        purchasing:false
    };

    updatePurchaseState = (ingredients) => {
        // const ingredients = {...this.state.ingredients};
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum+el;
        }, 0);

        this.setState({purchaseable:sum>0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrince;
        const newPrince = oldPrice+priceAddition;
        this.setState({totalPrince:newPrince, ingredients:updateIngredients});
        this.updatePurchaseState(updateIngredients);
    };
    
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount<=0) return;

        const updatedCount = oldCount-1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrince;
        const newPrince = oldPrice-priceDeduction;
        this.setState({totalPrince:newPrince, ingredients:updateIngredients});
        this.updatePurchaseState(updateIngredients);
    };

    purchaseHandler = () => {
        this.setState({purchasing:true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    };

    purchaseContinueHandler =() => {
        alert('You continue!');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.state.totalPrince}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                price={this.state.totalPrince}
                purchaseable={this.state.purchaseable}
                ordered={this.purchaseHandler}/>
            </Aux>
        )

    }
}

export default BurgerBuilder;