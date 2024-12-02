import React from 'react'
// import "./styles.css"
const AdminLogin = () => {
  return (

    <div className='login-main'>
<div className="container card shadow text-white round padding glass">
      <form className="container padding-16" onsubmit="if (!window.__cfRLUnblockHandlers) return false; return false;" id="loginForm" name="loginForm">
      </form>
      <h2 className="center text-red">Admin Login</h2>
      <input className="input border round-xxlarge card input-icons phone-icon" type="text" maxlength="10" name="mobile" id="mobile" placeholder="Enter your Mobile" required=""></input>
      <br>
      </br>
      <input className="input  border round-xxlarge card input-icons lock-icon" type="password" name="password" id="password" placeholder="Enter your Password" required=""></input>
      <br>
      </br>
      <span id="status"></span>
      <br>
      </br>
      <button id="loginbtn" className="btn round block red padding card round-xxlarge" onclick="if (!window.__cfRLUnblockHandlers) return false; login()">Log In</button>
      <br>
      </br>
      <a className="btn round block blue padding card round-xxlarge" href="/">Sign up</a>
      <br>
      </br>
      <a className="btn round block black padding card round-xxlarge" href="/">Forgot Password</a>



    </div>

    </div>


  )
}

export default AdminLogin