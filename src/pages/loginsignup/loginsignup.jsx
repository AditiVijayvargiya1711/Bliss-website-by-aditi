import React from 'react'
import "./loginsignup.css"

const loginsignup = () => {
  function func1(){
    let login=document.getElementById("login")
    let signup=document.getElementById("signup")
    signup.style.display="none"
    login.style.display="block"
  }
  function func2(){
    let login=document.getElementById("login")
    let signup=document.getElementById("signup")
    signup.style.display="block"
    login.style.display="none"
  }
  return (
    <div id="forms">
      <form id="login" className="form">
        <input className="email" name="email" type="text" placeholder="E-mail Address"/>
        <input className="password" name="password"type="text" placeholder="Password"/>
        <button className="submit">SIGN IN</button>
        <div className="statement"onClick={func2}>Don't have an account, click here to Sign up.</div>
      </form>
      <form id="signup" className="form">
        <input className="email" name="email" type="text" placeholder="E-mail Address"/>
        <input className="password" name="password"type="text" placeholder="Password"/>
        <button className="submit">SIGN UP</button>
        <div className="statement" onClick={func1}>Already has an accout, click here to Sign in.</div>
      </form>
    </div>
  )
}

export default loginsignup
