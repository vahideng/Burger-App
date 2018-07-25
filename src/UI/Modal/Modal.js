import React from "react";
import classes from "./Modal.css";
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary'

const modal = props => (
  <div className={classes.Modal}
  style={{
    transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity : props.show ? '1' : '0'
  }}
  >
    <OrderSummary summary={props.ingredientsSummary} totalPrice={props.price}/>
    {props.children}
  </div>
)

export default modal;



  
