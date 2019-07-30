import React from 'react'
import Button from 'react-bootstrap/Button'


const NavBar = props => {
  let date = new Date().toJSON().slice(0, 10);

  return (
    <nav className='nav'>
      <div className="logo-nav">
        <img className="logo" src="/logo.jpeg" alt="" width="180px" height="180px" />
      </div>
      <div className='link-items'>
        <p onClick={(e) => { window.scrollTo({top: 0,
  behavior: 'smooth'});}} className="link">Home</p>
        <p className="link">Menu</p>

        <p onClick={(e) => { window.scrollTo({top: 1500,
  behavior: 'smooth'});}}className="link" >About Us</p>
        <p onClick={(e) => { window.scrollTo(0, 1500); }} className="link">Contact</p>
        
        <a href="https://resy.com/cities/ny/ovelia" className="link" target='blank'> <Button variant="danger" className='resy'>Book Now <span>Resy</span></Button> </a>
      </div>
    </nav>

  )
}

export default NavBar