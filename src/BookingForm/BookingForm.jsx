import React, { useContext, useState, } from 'react';
import '..//BookingForm/BookingForm.css'
import { cartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';


const BookingForm = () => {
    const { handleSendInfo } = useContext(cartContext)
    const [ordName, setOrdName] = useState('')
    const [ordSurname, setOrdSurname] = useState('')
    const [ordPhone, setOrdPhone] = useState('')
    const [ordEmail, setOrdEmail] = useState('')
    const [order, setOrder] = useState()

    function handleInputValue(e) {
        let newObj = {
            name: ordName,
            surname: ordSurname,
            phone: ordPhone,
            email: ordEmail,
            // [e.target.name]: e.target.value
        }
        // setOrder(newObj)
        handleSendInfo(newObj)
        setOrdName('')
        setOrdSurname('')
        setOrdPhone('')
        setOrdEmail('')

    }


    // function handleSend(){
    //     handleSendInfo(order)
    // }
    return (
        <div className="formBody">

            <div className="BookingForm">
                <h3>Сделать заказ</h3>
                <input onChange={(e) => setOrdName(e.target.value)} value={ordName} name='name' placeholder="Имя" type="text" />
                <input onChange={(e) => setOrdSurname(e.target.value)} value={ordSurname} name='surname' placeholder="Фамилия" type="text" />
                <input onChange={(e) => setOrdPhone(e.target.value)} value={ordPhone} name='phone' placeholder="Номер телефона" type="number" />
                <input onChange={(e) => setOrdEmail(e.target.value)} value={ordEmail} name='email' placeholder="E-mail" type="text" />
                <Link to="/payment">
                    <div className="btn">
                        <button onClick={handleInputValue} >Заказать</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BookingForm;