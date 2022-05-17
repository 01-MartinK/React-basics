import React, {useState} from 'react';

import './CalculateButtons.css';

const CalculateButtons = (props) => {

    const CalculateInputHandler = (event) => {
        console.log(props.data.weight)
        console.log(props.data.height)
        var b = props.data.weight / (Math.pow(props.data.height / 100,2))
        props.onCalculateKmi(Math.round(b * 100) / 100)
    }

    const ClearInputHandler = (event) => {

    }

    return (
        <div class="CalculateButtons">
            <button onClick={CalculateInputHandler} >calculate KMI</button>
            <button onClick={ClearInputHandler}>clear</button>
        </div>
    )
}

export default CalculateButtons;