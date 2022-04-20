import React from 'react';
import { useState } from 'react';
import './Calculator.css';
import dollarIcon from '../img/icon-dollar.svg';
import personIcon from '../img/icon-person.svg';

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

    function reset() {
        setBillAmount(0);
        setPercentTip(1);
        setNumPeople(1);
        setTotalPerPerson(0);
        window.location.reload(false);
    }


    return(
        <div className=''>
            <div className='logo'>
                <h1>S P L I<br />T T E R</h1> 
            </div>
            <div className='options'>
                <div className='bill'>
                    <h2>Bill</h2>
                    <form onSubmit={onSubmit}>
                        <div className='billInput'>
                            <input type='text' name='billAmount' onChange={event => handleBillAmount(event.target.value) }></input>
                            <img src={dollarIcon} alt='dollar icon' className='dollar'></img>
                        </div>
                    </form>
                </div>
                <div className='tip'>
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
                                <input className='customTip' type='text' name='customPercent' placeholder='Custom' onChange={event => handleCustomTip(event.target.value)}></input>
                            </label>
                        </div>
                    </form>
                </div>
                <div className='people'>
                    <h2>Number of People</h2>
                    <form onSubmit={onSubmit}>
                        <div className='billInput'>
                            <input type='text' name='numPeople' onChange={event => handleNumPeople(event.target.value)}></input>
                            <img src={personIcon} alt='person' className='dollar'></img>
                        </div>
                    </form>    
                </div>         
                <div className='container'>
                    <div className='results'>
                        <div className='output'>
                            <h3>Tip Amount <br />/ person</h3>
                            <h3>${billAmount * percentTip / numPeople}</h3>
                        </div>
                        <div className='output'>
                            <h3>Total <br />/ person</h3>
                            <h3>${totalPerPerson}</h3>
                        </div>
                        <button className='reset' onClick={() => reset()}>Reset</button>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;