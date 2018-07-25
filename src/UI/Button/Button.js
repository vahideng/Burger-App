import  React  from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Button.css'

const button = props =>(
<Aux className={classes.Button}>
<button className={classes.Button}> Continue </button>
<button> Cancel </button>
</Aux>
);



export default button;
