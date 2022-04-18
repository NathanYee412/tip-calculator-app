import React from 'react';
import { useState } from 'react';
import './Calculator.css';

function Calculator(props) {


    const [ billAmount, setBillAmount ] = useState(0);
    const [ percentTip, setPercentTip ] = useState(1);
    const [ numPeople, setNumPeople ] = useState(1);
    const [ totalPerPerson, setTotalPerPerson ] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
    }

    
    function handleBillAmount(bill) {
        setBillAmount(bill);
        setTotalPerPerson(bill);
    }

    function handleTip(tip) {
        setPercentTip(Number(tip));

        let total = billAmount * tip;
        total = Number(total) + Number(billAmount);

        setTotalPerPerson(total);

    }

    function handleCustomTip(tip) {
        // Check if tip is in decimal or whole number
        tip = Number(tip);

        if(tip > 1) {
            setPercentTip(tip * 0.01);
        }
        else {
            setPercentTip(tip);
        }
    }

    function handleNumPeople(people) {
        setNumPeople(Number(people));

        let total = Number(billAmount) * Number(percentTip);
        total = Number(total) + Number(billAmount);
        total = total / Number(people);

        setTotalPerPerson(total);

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
                        <input type='text' name='billAmount' onChange={event => handleBillAmount(event.target.value) }></input>
                    </label>
                </form>
                <h2>Select Tip %</h2>
                <form onSubmit={onSubmit} className='container'>
                    <div className='col'>
                        <button onClick={() => handleTip(0.05)}>5%</button>
                        <button onClick={() => handleTip(0.15)}>15%</button>
                        <button onClick={() => handleTip(0.50)}>50%</button>
                    </div>
                    <div className='col'>
                        <button onClick={() => handleTip(0.1)}>10%</button>
                        <button onClick={() => handleTip(0.25)}>25%</button>
                        <label>
                            <input type='text' name='customPercent' onChange={event => handleCustomTip(event.target.value)}></input>
                        </label>
                    </div>
                </form>
                <h2>Number of People</h2>
                <form onSubmit={onSubmit}>
                    <label>
                        <input type='text' name='numPeople' onChange={event => handleNumPeople(event.target.value)}></input>
                    </label>
                </form>             
            </div>
            <div className='results'>
                <div className='container'>
                    <h3>Tip Amount <br />/ person</h3>
                    <h2>${billAmount * percentTip / numPeople}</h2>
                </div>
                <div className='container'>
                    <h3>Total <br />/ person</h3>
                    <h2>${totalPerPerson}</h2>
                </div>
                <button>Reset</button>  
            </div>
            
        </div>
    );
}

export default Calculator;