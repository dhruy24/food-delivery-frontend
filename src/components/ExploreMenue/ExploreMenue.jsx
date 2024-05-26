import React from 'react'

import styles from './ExploreMenue.module.css';

import { menu_list } from '../../assets/assets';

function ExploreMenue(props) {
  
    const {category , setCategory} = props || {};

    return (
    <div className={styles.explore_menu} id="explore_menu">
        <h1>Explore our menu</h1>
        <p className={styles.explore_menu_text}>Choose from a diverse menu featuring a delectable array of dishes. Our Mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
        <div className={styles.explore_menu_list}>
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} className={styles.explore_menu_list_item}>
                        <img className={category===item.menu_name?styles.active:""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenue