import React from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from './Layer.css'

const layer = props => (
  <Aux>
    <div> toolbar ..... </div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layer;
