import React, { useContext, useEffect, useState } from 'react'

import styles from './FoodItem.module.css';

import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

function FoodItem(props) {

    const {_id, name, price, description, image} = props.item || {};
    // const [ itemCount, setItemCount ]= useState(0);
    const { addToCart, removeFromCart, cartItems,} = useContext(StoreContext);
    
  return (
    <div className={styles.food_item}>
        <div className={styles.food_item_img_container}>
            <img className={styles.food_item_image} src={image} alt="" />
            {
                !cartItems[_id]
                ?<img className={styles.add} onClick={()=>addToCart(_id)} src={assets.add_icon_white} alt=""/>
                :<div className={styles.food_item_counter}>
                    <img onClick={()=>removeFromCart(_id)} src={assets.remove_icon_red} alt=''/>
                    <p>{cartItems[_id]}</p>
                    <img onClick={()=>addToCart(_id)} src={assets.add_icon_green} alt=''></img>
                </div>
            }
        </div>
        <div className={styles.food_item_info}>
            <div className={styles.food_item_name_rating}>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className={styles.food_item_desc}>
                {description}
            </p>
            <p className={styles.food_item_price}>
                ${price}
            </p>
        </div>

    </div>
  )
}

export default FoodItem