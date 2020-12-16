import React, {Component} from 'react';
import './Counter.css';

import Display from './Display.js';

import Step from './Step.js';

/* **KOMPONENT KLASOWY** */

class Counter extends Component {
/* KONSTRUKTOR w klasie Component: */

    constructor(props) {
        /* wywołanie metody 'super' i przekazanie propsów */
        super(props);
        /* zainicjowanie STATE czyli stanu Componentu
        counterValue: nazwa pola w obiekcie stanu, w którym przechowujemy obecną wartość stanu */
        this.state = {
            counterValue: this.props.initValue,
            numberInputValue: 1
        }

    }

    /* metoda, która jest dodana do buttona 1*/
    changeValue = () => {        
    
         this.setState((prevState) => {
             return ({
                 counterValue: prevState.counterValue + 1
             })

         });

    }

/* 2 metoda, która jest dodana do buttona "Zwiększ nr"*/
stepsValue = () => {        

    this.setState((prevState) => {
        return ({ 
            counterValue: prevState.counterValue + this.state.numberInputValue
        })
    });
}

setNumberInputValue = event => {
    this.setState({numberInputValue: Number(event.target.value)});
}

    render() {

        return (
            <div className="counter">
            Counter:


            <Display displayValue={this.state.counterValue} />
            {/* w onClick podajemy metodę, która uruchomi się podczas kliknięcia */}
            <button onClick={this.changeValue}>Add 1</button>
            
            <Step stepsMethod={this.setNumberInputValue} />
            <button onClick={this.stepsValue}>Zwiększ nr</button>
            
        </div>
        );
    }
}
export default Counter;