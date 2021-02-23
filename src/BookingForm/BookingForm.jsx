import React from 'react';
import '..//BookingForm/BookingForm.css'
const BookingForm = () => {
    return (
        <div className="formBody">

            <div className="BookingForm">
                <h3>Сделать заказ</h3>
                <input placeholder="Имя" type="text" />
                <input placeholder="Фамилия" type="text" />
                <input placeholder="Номер телефона" type="number" />
                <input placeholder="E-mail" type="text" />
                <div className="btn">
                    <button>Заказать</button>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;