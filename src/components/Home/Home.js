import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home(props) {
  return (
    <div className='ContainerApp'>
      <div className='main'>
        <button className='bn33'><Link className='link1' to="/login">Login</Link></button>

        <br />

        <button className='bn33'><Link className='link1' to="/signup">SignUp</Link></button>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome   ${props.name} !` : "Login please"}</h2>
    </div>
  )
}

export default Home
