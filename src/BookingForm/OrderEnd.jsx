import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../contexts/CartContext';
import classes from './BookingEnd.module.css'
import { Link } from 'react-router-dom'

const OrderEnd = () => {
  const { cart, orderInfo, getDiamondsInCart } = useContext(cartContext)
  const [obj, setObj] = useState(orderInfo)
  const [totalCount1, setTotalCount1] = useState(0)

  useEffect(() => {
    let price1 = totalCount1;
    cart?.map(item => {
      price1 += parseInt(item.price1)
    })
    setTotalCount1(price1)
    setObj(orderInfo)
    getDiamondsInCart(cart)
  }, [orderInfo])


  return (
    <div>
      {cart ?
        <div className={classes.container}>
          <h1>Checkout</h1>
          <div className={classes.summary}>
            <h3 >Order summary</h3>

            {cart.map((item, index) => (

              <div className={classes.products} key={index + 'ord'}>
                <div className={classes.title}>
                  Title of Product: {item.title}
                </div>
                <div>
                  Price: ${item.price}
                </div>
              </div>
            ))}


            <div className={classes.info}>
              <div>
                <h3> Shipping </h3>
              </div>
              <div className={classes.infoItem}>
                Name:{obj?.name}
              </div>
              <div className={classes.infoItem}>
                Surname:{obj?.surname}
              </div>
              <div className={classes.infoItem}>
                Phone:{obj?.phone}
              </div>
              <div className={classes.infoItem}>
                Email:{obj?.email}
              </div>

            </div>

          </div>
          <Link to="/">
            <button className={classes.btn} >Download</button>

          </Link>
        </div>





        : <h1>loading...</h1>
      }
    </div>
  );
};

export default OrderEnd;


