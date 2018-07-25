import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import classes from "./BurgerControl.css";

const burgerControls = props => (
  <Aux>
    <div className={classes.BuildControl}>
      <p className={classes.Label}> {props.label} </p>
      <button className={classes.More} onClick={props.more}>
        More
      </button>
      <button
        className={classes.Less}
        onClick={props.less}
        disabled={props.disable}
      >
        Less
      </button>
    </div>
  </Aux>
);
export default burgerControls;
