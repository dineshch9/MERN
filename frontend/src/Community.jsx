import React from 'react'
import ReactDOM from 'react-dom/client'
import './Community.css'
import Nav from './Nav'
import Comment from './Comment'
import CommunityHeading from './CommunityHeading'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Community/>
)

function Community(){
    return(
    <>
        <Nav/>
        <CommunityHeading/>
        <main id='CommunityBody'>
            <div id='comments'>
                <Comment comment="It is essential and necessary to have a barber shop within our campus like before.saloon facility should be present in campus." likes={1324} problem="some theory about experiences"/>
                <Comment comment="Kindly provide washing machines to enhance the quality of your laundry." likes={1225}/>
                <Comment comment="please construct Cycle Shed near hostels and academic blocks. because due to hot weather our cycle life is reducing and sometime tubes are bursting" likes={1125}/>
                <Comment comment="printers not available for taking xeroxes when emergency" likes={1105} problem="when returning for summer vacation library was closed and i am not able to print xeroxes for that i went outing and took a print and faced a lot of difficulty."/>
            </div>
            <div id='clmn'>
            <div onClick={()=>{window.location.href = './AllComments.html'}}>
                Upcoming Suggestions
            </div>
            <div onClick={()=>{window.location.href = './req_done.html'}}>
                Requests Done
            </div>
            </div>
        </main>
        <Footer/>
    </>  
        )
}

