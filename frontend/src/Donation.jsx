import React,{useState} from "react"
import ReactDOM from 'react-dom/client'
import './Donation.css'
import Footer from "./Footer"
ReactDOM.createRoot(document.getElementById('root')).render(
    <Donation/>
)

function Donation(){
    return(
        <>
        <Navbar/>
        <div id="theory">
            <div>
                <h1>Ways to Make a Difference</h1>
                <h4>You can donate funds for any of the requests pulled to Develope NIT AP. Please remember to indicate the specific request that you wish to support with your funds. You can specify the designated purpose on your cheque or use the fields provided in the online donation process, or write to dean.acr.office@nitap.ac.in specifying the cause you are supporting You can also reach us at 022 25767023</h4>
            </div>
            <img src="src/assets/NitGate.jpg" alt=""/>
        </div>
        <div id="cards">
            <Card1/>
            <Card2/>
            <Card3/>
        </div>
        <Footer/>
        </>
    )
}

function Navbar(){
    return(
        <>
        <nav id="navbar">
            <img src="src/assets/nit-logo.png" alt="nit logo" id="nitlogo"/>
            <div id='title'>
                <h1>National Institute of Technology</h1>
                <h3>Andhra Pradesh</h3>
            </div>
        </nav>   
        </>
    )
}

function Card1(){
    return(
        <div id="card">
        <h2>Donate through Bank Transfer</h2>
        <p>State Bank of India, Tadepalligudem, Andhra Pradesh
        <br />Account Name: NIT Andhra Donation Account
        <br />Account No: 10725730111
        <br />Swift Code: SBININBB519
        <br />IFSC Code: SBIN0001109
        </p>
        <br />
        <p>ICICI Bank, Tadepalligudem, Andhra Pradesh
            <br />Account Name: NIT Andhra Pradesh Donation Account
            <br />Account No: 002001027634
            <br />IFSC Code: ICIC0000020</p>
        </div>
    )
}
function Card2(){
    return(
        <div id="card">
        <h2>Donate by Online Payment</h2>
        <p>Payment can be made through credit and debit cards, Net Banking UPI, Google Pay, Paytm, PhonePe etc. by clicking on the link below</p>
        <div id="paymentmodesbtns">
            <button onClick={()=>window.location.href=('./DonationForm.html')}>Online Payment Link</button>
            <button onClick={()=>{window.open('https://donate.stripe.com/test_aEU6sm1vt7QNe88000')}}>Through Cards</button>
        </div>
        </div>
    )
}
function Card3(){
    return(
        <div id="card">
        <h2>Donate by Cheque</h2>
        <p>The cheque should be in favor of ''Registrar NIT Andhra Pradesh Donation Account ''. Kindly specify the account of the allocation of gift at the back of the cheque.</p>
        <br />
        <p>Cheques should be mailed to: Dean Alumni & Corporate Relations central vista office Main Building, First Floor NIT Andhra Pradesh, Tadepalligudem - 531126 , INDIA</p>
        </div>
    )
}