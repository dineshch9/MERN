import React,{useState} from "react"
import ReactDOM from 'react-dom/client'
import './DonationForm.css'
import Footer from "./Footer"
ReactDOM.createRoot(document.getElementById('root')).render(
    <DonationForm/>
)

function DonationForm(){
    return(
        <>
            <Navbar/>
            <Images/>
            <a id="form_btn" href="#form">
                <h1>Form</h1>
                <img src="src/assets/keyboard_double_arrow_down.svg" alt="" />
            </a>
            <Form/>
            <Footer/>
        </> 
    )
}

function Navbar(){
    return(
        <>
        <nav>
            <img src="src/assets/nit-logo.png" alt="nit logo" id="nitlogo"/>
            <div id='title'>
                <h1>National Institute of Technology</h1>
                <h3>Andhra Pradesh</h3>
            </div>
        </nav>   
        </>
    )
}

function Images(){
    return(
        <div id="toppart">
        <div id="paymentregion">
            <img src="src/assets/MoneyQR.png" id="qrimg"></img>
            <div id="upis">
                <img src="src/assets/Google-Pay.png" alt=""></img>
                <img src="src/assets/PhonePay.png" alt=""></img>
                <img src="src/assets/yono.png" alt="" />
            </div>
        </div>
        <div id="theory">
            <h1>Scan The Given Code to Donate Money '&'</h1><br />
            <h1>Fill The Form</h1>
        </div>
        </div>
    )
}

function Form(){
    return(
        <div id="form">
        <form action="">
            <h1 style={{alignSelf:"center"}}>Donation Form</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Enter your Name"/>
        <label htmlFor="email">Email ID</label>
        <input type="email" name="email" placeholder="Enter your Email"/>
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" placeholder="Enter amount you have Donated"/>
        
        <label htmlFor="Department">Department</label>
        <select name="Department" id="Department">
            <option value="Computer Science">Computer Science</option>
            <option value="Electronics">Electronics</option>
            <option value="Electrical">Electrical</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Metallurgy">Metallurgy</option>
            <option value="Chemical">Chemical</option>
        </select>
        
        
        <label htmlFor="transactionID">TransactionID</label>
        <input type="number" name="transactionID" placeholder="Enter Transaction ID"/>
        <label htmlFor="ContactNo">ContactNo</label>
        <input type="number" name="ContactNo" placeholder="Enter Contact No"/>
        <input type="submit" value="Submit" id="submit"/>
        </form>
        </div>
    )
}