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


class App extends React.Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
    
  }
  

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
