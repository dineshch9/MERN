import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './AllComments.css'

function SortBy(){
    var [display,func] = useState({display:"none"})
    return(
    <>
    <p id='sortby' onClick={showOptions}>
        <div id='sortbybtn'>Sort by <i class="gg-sort-az"></i> </div>
        <ul style={display}>
            <li><button>Newest</button></li>
            <li><button>Most Liked</button></li>
        </ul>
    </p>
    </>
    )

    function showOptions(){
        func(toggle)
    }
    function toggle(){
        if(display.display == "none"){
            return {display:"flex"}
        }else{
            return {display:"none"}
        }
    }
}

export default SortBy