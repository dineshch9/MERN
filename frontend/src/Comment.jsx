import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './Community.css'

function Comment(props){
    const {comment,likes,problem} = props;
    var [lik,setlike] = useState(likes);
    var [pth,func] = useState("src/assets/like.png")
    return(
        <>
        <article id='comment'>
            <h3>{comment}</h3>

            {theory(problem)} {/* for para of problem */}

            <div id='countsection'>
                <img src={pth} alt="" id="like" onClick={()=>func(toggle)}/>
                <h4 id="count">{lik}</h4>
            </div> 
            
        </article>
        </>
    )
    function toggle(){
        if(pth==="src/assets/like.png"){
            setlike(lik+1)
            return "src/assets/liked.png"
        }else{
            setlike(lik-1)
            return "src/assets/like.png"
        }
    }
    function theory(problem){
        if(problem){return  <p>{problem}</p>}
    }
}

export default Comment