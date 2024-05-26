import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'
import {assets} from '../../assets/assets.js'

import { StoreContext } from '../../context/StoreContext.jsx';

function Navbar(props) {

    const {setLogin} = props || {};
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className={styles.navbar}>
       <Link to="/"><img src={assets.twiggy_header} alt='logo' className={styles.logo} /></Link>
        <ul className={styles.navbar_menu}>
            <Link to="/" className={menu==="home"?styles.active:""} onClick={()=>{setMenu("home")}}>Home</Link>
            <a  href="#explore_menu" className={menu==="menu"?styles.active:""} onClick={()=>{setMenu("menu")}}>Menu</a>
            <a  href="#app_download" className={menu==="mobile"?styles.active:""} onClick={()=>{setMenu("mobile")}}>Mobile App</a>
            <a  href="#footer" className={menu==="contact"?styles.active:""} onClick={()=>{setMenu("contact")}}>Contact us</a>
        </ul>
        <div className={styles.navbar_right}>
            <img src={assets.search_icon} alt='search icon'/>
            <div className={styles.navbar_search_icon}>
               <Link to="/cart"><img src={assets.basket_icon} alt=""></img></Link>
                {/* this dot is for the item count */}
                <div className={getTotalCartAmount() === 0 ?"":styles.dot}></div>
            </div>
            <button onClick={()=>setLogin(true)} >Sign In</button>
        </div>
    </div>
  )
}

export default Navbar