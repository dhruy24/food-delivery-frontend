import React, { useState } from 'react'
import styles from "./LoginModal.module.css";
import { assets } from '../../assets/assets';

function LoginModal(props) {

    const {setLogin} = props || {};
    const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <div className={styles.login_popup}>
        <form className={styles.login_popup_container}>
            <div className={styles.login_popup_title}>
                <h2>{currentState}</h2>
                <img src={assets.cross_icon} alt="" onClick={()=>setLogin(false)} />
            </div>
            <div className={styles.login_popup_inputs}>
                {currentState === "Login"?<></>:<input type='text' placeholder='Your Name' required/>}
                <input type='email' placeholder='Your email' required/>
                <input type='password' placeholder='Password' required/>
            </div>
            <button>{currentState === "Sign Up"?"Create Account":" Login"}</button>
            <div className={styles.login_popup_condition}>
                <input type='checkbox' required />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currentState === "Login"
                ?<p>Create a new account ?<span onClick={()=>{setCurrentState("Sign Up")}}>Click here</span></p>
                :<p>Already have an account?<span onClick={()=>{setCurrentState("Login")}}>Login here</span></p>} 
        </form>
    </div>
  )
}

export default LoginModal