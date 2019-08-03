import React from 'react';
import './App.css';
import ControlledCarousel from './components/ControlledCarousel';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import PhotoSection from './components/PhotoSection';
import ContactForm from './components/ContactForm';
import ControlledTabs from './components/ControlledTabs';
import OurMenu from './components/OurMenu'
import Footer from './components/Footer'
import { Link, animateScroll as scroll } from "react-scroll";

class App extends React.Component {

  constructor(props) {
    super(props)
    // this.myRef = React.createRef()   // Create a ref object 
    // this.scrollToTop = this.scrollToTop.bind(this);
  }
  // scrollToTop() {
  //   scroll.scrollToTop();
  // }
  // scrollTo = (offset) => {
  //   scroller.scrollTo('scroll-to-element', {
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //     offset: offset
  //   })
  // }
  // componentDidUpdate() {
  // this.myRef.current.scrollTo(0, 0);
  // }
  // componentDidUpdate() {
  //   window.scrollTo(0, 0);
  // }


  render() {
    return (
      <div className="App" >

        <NavBar />
        <ControlledCarousel />
        <OurMenu id="menu"/>
        <ControlledTabs />
        <AboutUs id="about-us"/>
        <PhotoSection />
        <ContactForm id="contact"/>
        <Footer />
      </div>
    );
  }
}

export default App;
