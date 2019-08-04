import React from 'react'
import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'



const Footer = () => {
  return (
    <footer>
      <a href="https://www.facebook.com/Ovelia-121941401149823/" target='blank'><img src={fb} className="footer-icon" alt="fb-icon" /></a>
      <a href="https://www.instagram.com/oveliapsistaria/?hl=en/" target='blank'><img src={insta} className="footer-icon" alt="instagram-icon" /></a>
    </footer>
  )
}

export default Footer 