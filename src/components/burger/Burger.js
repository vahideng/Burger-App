import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder";

const burger = props => {
  let ingredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
    })
    .reduce((acc, cur) => {
      
      return acc.concat(cur);
    }, []);

   
   

  if (ingredients.length === 0) {
   
    
    ingredients = <p > start adding ingredients </p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
