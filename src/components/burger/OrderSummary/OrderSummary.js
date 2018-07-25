import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from '../../../UI/Button/Button';


const orderSummary = props => {
  const ingredients = Object.keys(props.summary).map(igKey => {
    return <li key={igKey}><span style={{textTransform: 'capitalize'}}> {igKey} </span> :{props.summary[igKey]} </li>;
  });

  return (
    <Aux>
      <div> Total Price:{props.totalPrice} </div>
      <h3> your Order : </h3>
      <p> with following ingredients : </p>
      <ul>{ingredients}</ul>
      <Button/>
    </Aux>
  );
};

export default orderSummary;
