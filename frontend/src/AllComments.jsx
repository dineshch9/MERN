import React,{useState} from "react"
import ReactDOM from 'react-dom/client'
import Nav from "./Nav";
import Comment from "./Comment";
import SortBy from "./SortBy";
import Footer from "./Footer";
import './AllComments.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <AllComments/>
)

function AllComments(){
    var [display,func] = useState({display:"none"})
    var [comment,setcomment] = useState(["install washing machines","Expensive textbooks and course materials","Inadequate laboratory equipment","Limited access to recreational facilities"]);
    var [description,setdescription] = useState(["dhobi is taking too much money","High costs of textbooks and required materials can put financial strain on students, especially those from low-income backgrounds.","In science, engineering, and other technical fields, a shortage of laboratory equipment can hinder hands-on learning experiences and experimentation."," A lack of affordable or accessible recreational facilities on campus can impact students' physical and mental well-being, as they may struggle to find ways to relax and de-stress outside of their academic responsibilities."]);
    var likes = [76,50,84,30]
    var [tempcmnt,settcmnt] = useState('')
    var [tempdes,settdes] = useState('')
    return(
        <>
        <Nav/>
        <h1>All Commnets</h1>
        <h3 onClick={showOptions} id="newbtn">New +</h3>
        <form action=""style={display} onSubmit={e=>{e.preventDefault();showOptions()}}>
            <input type="textarea" name="newcomment" id="newcomment" placeholder="| enter your Suggestion" value={tempcmnt} onChange={e=>settcmnt(e.target.value)}/>
            <textarea name="textarea" id="problem" cols="20" rows="10" placeholder="enter Description" value={tempdes} onChange={e=>settdes(e.target.value)}></textarea>
            <button id="Postbtn" onClick={dummyfunc}>Post</button>
        </form>
        <SortBy/>
        <div id="here">
            {comment.map((e,i)=>{
            return  <Comment key={i} comment={e} likes={likes[i]?likes[i]:0} problem={description[i]}/>
            })}
        </div>
        <Footer/>
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
    function dummyfunc(){
        setcomment([...comment,tempcmnt])
        setdescription([...description,tempdes])
        settcmnt('')
        settdes('')
        console.log(comment)
        console.log(description)
    }

}