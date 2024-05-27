import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Signin.css'

function Signin() {
  var [flag, func] = useState(true)
  var [logstyle, stylefunc1] = useState('bgdark')
  var [regstyle, stylefunc2] = useState('bgwhite')
  return (
    <>
      <button id='donation' onClick={() => window.location.href = './Donation.html'}>Donate</button>
      <div className='sign_in'>
        <div id='options'>
          <button id={logstyle} onClick={() => { func(true); stylefunc1('bgdark'); stylefunc2('bgwhite') }}>Login</button>
          <button id={regstyle} onClick={() => { func(false); stylefunc1('bgwhite'); stylefunc2('bgdark') }}>Register</button>
        </div>
        <Login />
        
      </div>
    </>
  )

  function Login() {
    var [email, fun1] = useState('')
    var [password, fun2] = useState('')
    var [name, fun3] = useState('')
    var [rollno, fun4] = useState('')

    async function registerUser(event) {
      event.preventDefault()

      const response = await fetch('http://localhost:8085/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          rollno
        }),
      })

      const data = await response.json()

      if (data.status === 'ok') {
        history.push('/login')
      }
    }

    async function loginUser(event) {
      event.preventDefault()

      const response = await fetch('http://localhost:8085/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()

      if (data.user) {
        localStorage.setItem('token', data.user)
        
        // alert('Login successful')
        window.location.href = 'http://localhost:5173/Community.html'
      } else {
        alert('Please check your username and password')
      }
    }

    if (flag) {
      return (
        <form onSubmit={loginUser} method="POST" >
          <h2>Login Page</h2>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='Enter Your email' value={email} onChange={(e) => { fun1(e.target.value) }} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder='Enter Your Password' value={password} onChange={(e) => { fun2(e.target.value) }} />
          <input type="submit" value="Login" id='btn' />
        </form>
      )
    }
    else {
      return (
        <>
          <h2>Register Form</h2>
          <form onSubmit={registerUser} method="POST">
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" id="Name" placeholder='Enter Your Name' value={name} onChange={(e) => { fun3(e.target.value) }} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Enter Your email' value={email} onChange={(e) => { fun1(e.target.value) }} />
            <label htmlFor="rollno">Rollno</label>
            <input name="rollno" id="rollno" placeholder='Enter Your rollno' value={rollno} onChange={(e) => { fun4(e.target.value) }} />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" placeholder='Set Your Password' value={password} onChange={(e) => { fun2(e.target.value) }} />
            <input id='btn' style={{ height: '35px' }} type='submit' value={"Register"} />
          </form>
        </>
      )
    }
  }
}

export default Signin