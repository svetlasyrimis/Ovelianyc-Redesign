import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const NavBar = props => {
  let date = new Date().toJSON().slice(0, 10);

  return (
    <nav className='nav'>
      <div>
        <img className="logo" src="/logo.jpeg" alt="" width="120px" height="120px" />
      </div>
      <div className='link-items'>
        <Link to="/" className="link">Home</Link>
        <Link to="/menu" className="link">Menu</Link>

        <Link to="/about" className="link">About Us</Link>
        <a href="https://resy.com/cities/ny/ovelia" className="link" target='blank'> <Button variant="danger" className='resy'>Book Now <span>Resy</span></Button> </a>
      </div>
    </nav>

  )
}

export default NavBar