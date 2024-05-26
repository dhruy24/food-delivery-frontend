import React,{useContext} from 'react'
import { StoreContext } from '../../context/StoreContext';

import styles from './PlaceOrder.module.css'

function PlaceOrder() {

  const { getTotalCartAmount } = useContext(StoreContext) || {};

  return (

    <form className={styles.place_order}>
      <div className={styles.place_order_left}>
        <p className={styles.title}>Delivery Information</p>
        <div className={styles.multi_feilds}>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className={styles.multi_feilds}>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className={styles.multi_feilds}>
          <input type='text' placeholder='Pincode' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='phone' />
      </div>

      <div className={styles.place_order_right}>
        <div className={styles.cart_total} >
          <h2>Cart Total</h2>
          <div>
            <div className={styles.cart_total_details}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cart_total_details}>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0?0:2}</p>
            </div>
            <hr />
            <div className={styles.cart_total_details}>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0? 0 :getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAY</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder