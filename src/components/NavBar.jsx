import React from 'react'
import Button from 'react-bootstrap/Button'
import OveliaLogo from '../assets/OveliaLogo.png'
// let date = new Date().toJSON().slice(0, 10);
import { Navbar, Nav } from 'react-bootstrap';

const NavBars = props => {

  return (

    <nav className='nav'>
      <div className="logo-nav">
        <img className="logo" src={OveliaLogo} alt="logo-pic" />
      </div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className='link-items'>

              <p onClick={(e) => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });

              }} className="link">Home</p>

              <p onClick={(e) => {
                window.scrollTo({
                  top: 600,
                  behavior: 'smooth'
                });
              }} className="link">Menu</p>

              <p onClick={(e) => {
                window.scrollTo({
                  top: 2800,
                  behavior: 'smooth'
                });
              }} className="link" >About Us</p>

              <p onClick={(e) => {
                window.scrollTo({
                  top: 4300,
                  behavior: 'smooth'
                });
              }} className="link">Contact</p>

              <a href="https://resy.com/cities/ny/ovelia" className="link" target='blank'> <Button variant="danger" className='resy'>Book Now <span className="white">RESY</span></Button> </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </nav >


  )
}

export default NavBars