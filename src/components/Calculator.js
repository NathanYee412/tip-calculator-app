import React from 'react';
import './Calculator.css';

function Calculator(props) {

    return(
        <div className=''>
            <div className='logo'>
                <h1>S P L I<br />T T E R</h1> 
            </div>
            <div className='options'>
                <h2>Bill</h2>
                <form>
                    <label>$</label>
                    <input type='text' name='billAmount'></input>
                </form>
                <h2>Select Tip %</h2>
                <form className='container'>
                    <div className='col'>
                        <button>5%</button>
                        <button>15%</button>
                        <button>50%</button>
                    </div>
                    <div className='col'>
                        <button>10%</button>
                        <button>25%</button>
                        <label>Custom</label>
                        <input type='text' name='customPercent'></input>
                    </div>
                </form>
                <h2>Number of People</h2>
                <form>
                    <label>People</label>
                    <input type='text' name='numPeople'></input>
                </form>             
            </div>
            <div className='results'>
                <div className='container'>
                    <h3>Tip Amount <br />/ person</h3>
                    <h2>$20.20</h2>
                </div>
                <div className='container'>
                    <h3>Tip Amount <br />/ person</h3>
                    <h2>$20.20</h2>
                </div>
                <button>Reset</button>  
            </div>
            
        </div>
    );
}

export default Calculator;