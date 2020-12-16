/* ustawienie kroku, o ile będzie zwiększał się licznik (np. krok=5, to licznik za każdym kliknięciem przycisku będzie się zwiększał o 5) 
Dodatkowo przycisk "Zwiększ o X" ma pokazywać o ile będzie licznik będzie zwiększany (X to oczywiście wartość kroku). Minimalna wartość kroku to 1.

- wartość kroku przechowuj w obiekcie stanu komponentu "Counter"
- do ustalania wartości kroku użyj pola <input type="number" />, które będzie w komponencie "Step"
- do pola input odwołuj się przez jego referencję np. <input ref={(data) => { this._inputStep = data} } type="number" /> - następnie odwołaj się do tego pola w kodzie np. let step = this._inputStep.value;
- dodatkowo będziesz musiał się podpiąć pod zdarzenie onChange tego inputa <input ref={(data) => { this._inputStep = data} } onChange{this.updateStep} type="number" /> i gdy jego wartość została zmieniona, to aktualizuj state :) np. this.setState(....);*/

import React from 'react';

const Step = props => {
    return <div>
        <input type="number" onChange={props.stepsMethod}/>
    </div>
}
export default Step;