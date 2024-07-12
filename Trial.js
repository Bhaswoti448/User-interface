import React, { useState } from 'react'
import './Trial.css'
import email_icon from '../Assetss/emailicon.png'
import password_icon from '../Assetss/passwordicon.png'
import user_icon from '../Assetss/usericon.png'


import { useHistory, withRouter } from 'react-router-dom/cjs/react-router-dom'

const Trial = () => {
  const history = useHistory();
     const [action, setAction] = useState("Log In");
     const [selectedOption, setSelectedOption] = useState('');
     const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
    const handleLogin = () => {
      if (selectedOption === 'user') {
        history.push("/user"); // Redirect to the user page
      } else if (selectedOption === 'admin') {
        history.push("/admin"); // Redirect to the admin page
      }
    };
 return (
 <div className='container'>
    <div className="header">
      <div className="text">{action}</div>
        <div className="underline"></div>
   </div>
<div className="inputs">
      {action==="Log In"?<div></div>: <div className="input">

               </div>}
            <div className="input">
               <img src={email_icon} alt="" />
               <input type="email" placeholder='DTAC Id'/>
               </div>
            <div className="input">
               <img src={password_icon} alt="" />
               <input type="password" placeholder='Password' />
            </div>
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="User/Admin" placeholder='User/Admin'/>
          </div>

        </div>

       {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
       <div className="submit-container">
        <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{history.push("/admin")}}>Log In</div>
        </div>
    </div>
    
   )
}
export default withRouter(Trial)

