import React from 'react'
import '../css/Currency.css'
import { FaArrowRight } from "react-icons/fa6";


function Currency() {
    return (
        <div className='currency-div'>
            <div style={{ fontFamily: 'arial', backgroundColor: 'black', color: 'white', width: '100%', textAlign: 'center' }}>
                <h3>CURRENCY APP</h3>
            </div>

            <div style={{ marginTop: '25px' }}>
                <input type="number" className='amount' />

                <select className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>
                </select>

                <FaArrowRight style={{ fontSize: '25px', marginRight: '10px' }} />

                <select className='to-currency-option'>
                    <option>TL</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input type="number" className='result' />
            </div>

            <div>
                <button className='exchange-button'>Convert</button>
            </div>

        </div>
    )
}

export default Currency