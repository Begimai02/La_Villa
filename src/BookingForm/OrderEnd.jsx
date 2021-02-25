import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../contexts/CartContext';

const OrderEnd = () => {
    const { cart, orderInfo, getVillasInCart } = useContext(cartContext)
    const [obj, setObj] = useState(orderInfo)

    useEffect(() => {
        setObj(orderInfo)
        getVillasInCart()
    }, [orderInfo])
    // console.log(obj);
    console.log(orderInfo);
    return (
        <>
        {cart ? 
            <div>
                <h1>Ваши Покупки</h1>
                <h4>{obj.name}</h4>
                <h4>{obj.surname}</h4>
                <h4>{obj.phone}</h4>
                <h4>{obj.email}</h4>
                {cart.map((item, index) => (
                    <div key={index + "oplata"}>
                <h4>{item.title}</h4>
                <h4>{item.price}</h4>
                </div>
                ))}
                {/* <h4>{obj.email}</h4>
                <h4>{obj.email}</h4>
                <h4>{obj.email}</h4> */}
                
            </div>
        : <h1>loading...</h1>
        }
        </>
    );
};

export default OrderEnd;