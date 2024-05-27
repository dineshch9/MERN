import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './Community.css'
import jwt from 'jsonwebtoken'

function Nav(){
    var [display,func] = useState({display:"none"})

    function logout(){
        localStorage.removeItem('token')
				window.location.href = 'http://localhost:5173/index2.html'
    }
    const token = localStorage.getItem('token')
    const user =  jwt.decode(token);

    return(
    <nav>
        <img src="src/assets/nit-logo.png" alt="nit logo" id="nitlogo"/>
        <div id='title'>
            <h1>National Institute of Technology</h1>
            <h3>Andhra Pradesh</h3>
        </div>
        <div id='profile' onClick={showprofile}>
            <img src="src/assets/AccountLogo.png"/>
            <ul style={display}>
                <li>{user.name}</li>
                <li>{user.rollno}</li>
                <button id='logout' onClick={logout}>Logout</button>
            </ul>
        </div>
    </nav>   
    )
    function showprofile(){
        func(toggle)
    }
    function toggle(){
        if(display.display == "none"){
            return {display:"block"}
        }else{
            return {display:"none"}
        }
    }
}



export default Nav