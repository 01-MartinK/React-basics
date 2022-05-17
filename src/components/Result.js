import React, {useState} from 'react';
import { useImperativeHandle } from 'react';
import { forwardRef } from 'react';

import './Result.css';

let test_feedback = "normal mate"

const Result = forwardRef((props, ref) => {
    const [feedback, setFeedback] = useState(test_feedback)
    const healthy_adult_average = 22.3

    useImperativeHandle(ref, () => ({
        showAlert() {
            updateFeedback()
        },
    }))

    const updateFeedback = () => {
        console.log("changed")
            if (props.kmi < 16) {
                setFeedback("u know u need to eat to live right?")
            }
            else if (props.kmi < 18.5) {
                setFeedback("Not thin and not normal")
            }
            else if (props.kmi > 18.5 && props.kmi < 25) {
                setFeedback("Normal weight")
            }
            else if (props.kmi > 26 && props.kmi < 33) {
                setFeedback("a bit thick if I say so myself")
            }
            else if (props.kmi > 34 && props.kmi < 39) {
                setFeedback("you have crossed the line for thick and fat")
            }
            else if (props.kmi > 40) {
                setFeedback("lay of the sandwitches")
            }
    }

    return (
        <div class="card result">
            <h3>Keha Massi Index</h3>
            <h1 class="kmi">{props.kmi}</h1>
            <p></p>
            <img></img>
            <p class="result__comment">{feedback}</p>
        </div>
    )
})

export default Result;