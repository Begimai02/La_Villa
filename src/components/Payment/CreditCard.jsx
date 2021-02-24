import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import '../Payment/CreditCard.css';
import 'react-credit-cards/es/styles-compiled.css'
import { Link } from 'react-router-dom';

function CreditCard() {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');


    return (
        <div className="CreditCard">
            <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            />
            <form>
                <input
                    maxLength="16"
                    type='tel'
                    name='number'
                    placeholder='Card Number'
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input
                    maxLength="16"
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />

                <input
                    maxLength="4"
                    type='tel'
                    name='expiry'
                    placeholder='MM/YY Expiry'
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />

                <input
                    maxLength="3"
                    type='tel'
                    name='cvc'
                    placeholder=''
                    placeholder='CVC'
                    value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />

                <Link to="/order">
                    <div className="form-actions">
                        <button className="btn btn-primary btn-block">PAY</button>
                    </div>
                </Link>

            </form>
        </div>
    );
};

export default CreditCard;