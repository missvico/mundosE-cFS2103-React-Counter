import React from "react";

function Button(props){

    return(
        <button onClick={props.handleClick} disabled={props.disabled}>{props.symbol}</button>
    )
}

export default Button;