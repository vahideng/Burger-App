import React from "react";
import classes from "./BurgerControls.css";
import BurgerControl from "../../burger/BurgerControls/BurgerControl/BurgerControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const burgerControls = props => {
  const control = controls.map(ctrl => {
    return (
      <BurgerControl
        key={ctrl.label}
        label={ctrl.label}
        more={() => props.added(ctrl.type)}
        less={() => props.delete(ctrl.type)}
        disable={props.disableInfo[ctrl.type]}
      />
    );
  });

  return (
    <div className={classes.BuildControls}>
      <div>
      Total Price :<strong>{props.totalPrice}  RM </strong>
      </div>
      {control}
      <button className={classes.OrderButton} onClick={props.showModal} disabled={!props.purchasable}> Order </button>
    </div>
  );
};

export default burgerControls;
