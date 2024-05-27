import React,{useState} from "react"
import ReactDOM from 'react-dom/client'
import './Community.css'

function Footer(){
    return(
        <footer>
            <p>Donation Web Application &copy; Developed by  Dinesh & Prem </p>
            <p>SoureCode at <img src="src/assets/github-icon.png" onClick={()=>{window.open('https://github.com/dineshch9/Batchno.32-miniproject-nitandhra23')}}/></p>
        </footer>
    )
}

export default Footer