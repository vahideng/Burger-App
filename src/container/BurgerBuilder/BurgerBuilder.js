import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/burger/Burger";
import BurgerControls from "../../components/burger/BurgerControls/BurgerControls";
import Modal from '../../UI/Modal/Modal';



const INGREDIENT_PRICE = {
  salad: 2,
  meat: 4,
  bacon: 2,
  cheese: 2
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 10,
    purchasing : false,
    purchasable :false
  };

  addIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = { ...this.state.ingredients };
    const newCount = oldCount + 1;
    updatedIngredients[type] = newCount;
    const oldPrice = this.state.totalPrice;
    const addedPrice = oldPrice + INGREDIENT_PRICE[type];

    this.updatePurchasableHandler(updatedIngredients);

    this.setState({ totalPrice: addedPrice, ingredients: updatedIngredients });
  };

  deleteIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = { ...this.state.ingredients };
    if (oldCount <= 0) return;
    const newCount = oldCount - 1;
    updatedIngredients[type] = newCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICE[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };
  
  updatePurchasableHandler(ingredients) {

  const sum = Object.keys(ingredients).map(igKey =>{
   
    return ingredients[igKey]
  }).reduce((acc , curr) =>{
    return   acc + curr
  } ,0)
 if(sum >= 0){

  this.setState({purchasable : true})
 }
}
  purchasingHandler= () =>{
    
    this.setState({purchasing: true})

  }

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    
    return (
      <Aux>
          <Modal  show={this.state.purchasing} ingredientsSummary={this.state.ingredients} price={this.state.totalPrice}/> 
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          added={this.addIngredientsHandler}
          totalPrice={this.state.totalPrice}
          delete={this.deleteIngredientsHandler}
          disableInfo={disableInfo}
          showModal= {this.purchasingHandler}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
