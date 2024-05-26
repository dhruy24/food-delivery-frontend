import React,{useContext} from 'react'

import {StoreContext} from '../../context/StoreContext';

import styles from "./FoodDisplayList.module.css"
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplayList(props) {

    const { category } = props || {};
    const { food_list } = useContext(StoreContext);

  return (
    <div className={styles.food_display} id="food_display">
        <h2>Top dishes near you</h2>
        <div className={styles.food_display_list}>
            {food_list.map((item,index)=>{
                if(category === "All" || category === item.category){
                   return <FoodItem key={index} item={item}/>
                }else{
                    return false
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplayList