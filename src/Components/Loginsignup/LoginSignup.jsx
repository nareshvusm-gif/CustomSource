import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.jpg';
import pwd_icon from '../Assets/pwd.jpg';
import user_icon from '../Assets/person.jpg';

const LoginSignup = () => { 
    
    const [action, setAction] = useState("Login");
    
    return(
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
            <div className="inpupts">

                {action === "Login" ? <div> </div> : <div className="input">
                    {/* <img src={user_icon} alt="person" className="icon" /> */}
                    <input type="text" placeholder="Name"/>
                </div>
                }
               
                <div className="input">
                    {/* <img src={email_icon} alt="email" className="icon" /> */}
                    <input type="email" placeholder="Email Id"/>      
                    </div>
                <div className="input">
                    {/* <img src={pwd_icon} alt=""/>  */}
                    <input type="password" placeholder="Password" />
                </div>
               </div>
                    {action === "Sign Up" ? <div></div>: 
                    <div className="forget-password">Lost your password? <span>Click Here!</span></div>}
  
                <div className="submit-container">
                    <div className={action ==="Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action ==="Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}><span>Login</span></div>
                </div>
        </div>
    );
};

export default LoginSignup;
