import React, { Component } from "react";
import Layer from "./components/Layer/Layer";
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <Layer>
         <BurgerBuilder/>
      </Layer>
    );
  }
}

export default App;
