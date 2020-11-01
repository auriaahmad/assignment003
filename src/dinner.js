import React from 'react';

function Dinner(props){
    return(
    <div>
        <h1>we are serving chicken {props.dishName} </h1>
        <h1>today we are serving {props.sweetDish}</h1>
    </div>
    );
}
export default Dinner;