import React from 'react';
import './Display.css';


function Display(props) {
    return(
        /* zamiast stringa jako klasę wpiszemy kod js <span className="value"> */

        <span className={`value ${(props.displayValue <= 5) ? 'blue' : 'red'}`}>
            {props.displayValue}
        </span>
    );
}

export default Display;