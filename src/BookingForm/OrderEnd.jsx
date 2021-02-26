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
        <div>
                <h1  style={{display: "flex", justifyContent: "center",}}>Ваши Покупки</h1>
        {cart ? 

            <div className="order-form" style={{ display: "flex", justifyContent: "center",}}>
                <div style={{ border:"1px solid black", marginRight: "1px"}} >
                <h4>Name:{obj.name}</h4>
                <h4>Surname:{obj.surname}</h4>
                <h4>Phone:{obj.phone}</h4>
                <h4>Email:{obj.email}</h4>
                </div>

                <div>
                <ol style={{border: '1px solid black',width:'100%',maxWidth: "450px", margin: '0 auto'}} >
                {cart.map((item, index) => (
                    <li  style={{margin: '10px'}} key={index + "oplata"}>
                            <h4>Товар:{item.title} Цена:{item.price} </h4>
                            <h4></h4>
                    </li>
                ))}
                </ol>
                {/* <h4>{obj.email}</h4>
                <h4>{obj.email}</h4>
                <h4>{obj.email}</h4> */}
                </div>  
            </div>
        : <h1>loading...</h1>
        }
        </div>
    );
};

export default OrderEnd;