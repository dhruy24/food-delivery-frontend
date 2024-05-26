import React from 'react'

import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.header_contents}>
            <h2>Order your favourite food here</h2>
            <p>Choose from a divrse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experiance, one delicious meal at a time.</p>
            <button>View Menu</button> 
        </div>
    </div>
  )
}

export default Header