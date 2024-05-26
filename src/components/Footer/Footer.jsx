import React from 'react'
import styles from "./Footer.module.css"
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className={styles.footer} id="footer">
        <div className={styles.footer_content}>
            <div className={styles.footer_content_left}>
                <img src={assets.twiggyLogo} alt=''/>
                <p>This is a dummy project for food delivery. please do not use it for food ordering. Thanks</p>
                <div className={styles.footer_social_icons}>
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className={styles.footer_content_center}>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className={styles.footer_content_right}>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 1234567899</li>
                    <li>contact@dummy.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className={styles.footer_copyright}>Copyright 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer