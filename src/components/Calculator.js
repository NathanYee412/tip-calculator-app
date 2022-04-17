import React from 'react';
import { useState } from 'react';
import './Calculator.css';

function Calculator(props) {


    const [ billAmount, setBillAmount ] = useState(0);
    const [ percentTip, setPercentTip ] = useState(1);
    const [ numPeople, setNumPeople ] = useState(1);

    const onSubmit = (e) => {
        e.preventDefault();
    }

    function handleTip(tip) {

        setPercentTip(tip);
    }

    

    return(
        <div className=''>
            <div className='logo'>
                <h1>S P L I<br />T T E R</h1> 
            </div>
            <div className='options'>
                <h2>Bill</h2>
                <form onSubmit={onSubmit}>
                    <label>
                        <input type='text' name='billAmount' onChange={event => setBillAmount(event.target.value) }></input>
                    </label>
                </form>
                <h2>Select Tip %</h2>
                <form onSubmit={onSubmit} className='container'>
                    <div className='col'>
                        <button onClick={() => setPercentTip(0.05)}>5%</button>
                        <button onClick={() => handleTip(0.15)}>15%</button>
                        <button onClick={() => handleTip(0.50)}>50%</button>
                    </div>
                    <div className='col'>
                        <button onClick={() => handleTip(0.1)}>10%</button>
                        <button onClick={() => handleTip(0.25)}>25%</button>
                        <label>
                            <input type='text' name='customPercent'></input>
                        </label>
                    </div>
                </form>
                <h2>Number of People</h2>
                <form onSubmit={onSubmit}>
                    <label>
                        <input type='text' name='numPeople'></input>
                    </label>
                </form>             
            </div>
            <div className='results'>
                <div className='container'>
                    <h3>Tip Amount <br />/ person</h3>
                    <h2>${billAmount * percentTip}</h2>
                </div>
                <div className='container'>
                    <h3>Total <br />/ person</h3>
                    <h2>${billAmount}</h2>
                </div>
                <button>Reset</button>  
            </div>
            
        </div>
    );
}

export default Calculator;