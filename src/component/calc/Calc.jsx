


import React, { useState } from 'react';

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
        <div className='flex items-center justify-center h-screen bg-gray-200'>
            <div className="w-80 p-6 bg-white rounded-3xl shadow-lg">
                <div className="grid grid-cols-4 gap-2">
                    <h2 id="value" className="col-span-4 text-right p-4 bg-gray-100 rounded-lg text-2xl shadow-inner">{displayValue}</h2>
                    <button className="col-span-2 bg-red-500 text-white p-4 rounded-lg shadow hover:bg-red-600" onClick={handleClear}>Clear</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('/')}>/</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('*')}>*</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('7')}>7</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('8')}>8</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('9')}>9</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('-')}>-</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('4')}>4</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('5')}>5</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('6')}>6</button>
                    <button className="p-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600" onClick={() => handleClick('+')}>+</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('1')}>1</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('2')}>2</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('3')}>3</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('0')}>0</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('00')}>00</button>
                    <button className="p-4 bg-white rounded-lg shadow hover:bg-gray-200" onClick={() => handleClick('.')}>.</button>
                    <button className="row-span-2 bg-blue-500 text-white p-4 rounded-lg shadow hover:bg-blue-600" onClick={handleEquals}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calc;


