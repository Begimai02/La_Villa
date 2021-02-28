import React from 'react';
import classes from './BookingEnd.module.css'

const testEnd = () => {
  return (
    <div className={classes.container}>
      <h1>Checkout</h1>
      <div className={classes.summary}>
        <h3 >Order summary</h3>
        <div className={classes.products}>
          <div className={classes.title}>
            Title of Product
          </div>
          <div>
            Price
          </div>
        </div>
        <div className={classes.info}>
          <div>
          <h3> Shipping </h3>
          </div>
          <div className={classes.infoItem}>
            John
          </div>
          <div className={classes.infoItem}>
            Bishkek
          </div>
          <div className={classes.infoItem}>
            somebody@gmail.com
          </div>

        </div>


      </div>
      <button className={classes.btn} >Save</button>
    </div>
  );
};

export default testEnd;