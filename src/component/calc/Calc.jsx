import React, { useState } from 'react';
import '../calc/Calc.css';

const Calc = () => {
    const [displayValue, setDisplayValue] = useState('');
    

    const handleClick = (value) => {
        setDisplayValue(displayValue + value);
    };

    const handleClear = () => {
        setDisplayValue('');
    };

    const handleEquals = () => {
        try {
            setDisplayValue(eval(displayValue).toString());
        } catch {
            setDisplayValue('Error');

        }
    };

    return (
        <div className='container'>
            <div className="calculator">
                <div className="buttons">
                    <h2 id="value">{displayValue}</h2>
                    <button id="clear" onClick={handleClear}>Clear</button>
                    <button onClick={() => handleClick('/')}>/</button>
                    <button onClick={() => handleClick('*')}>*</button>
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('-')}>-</button>
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button id="plus" onClick={() => handleClick('==')}>+</button>
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={() => handleClick('00')}>00</button>
                    <button onClick={() => handleClick('.')}>.</button>
                    <button id="equal" onClick={handleEquals}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calc;
