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

  // componentDidUpdate() {
  // this.myRef.current.scrollTo(0, 0);
  // }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }


  render() {
    return (
      <div className="App" ref={this.myRef} >

        <NavBar />
        <ControlledCarousel />
        <OurMenu />
        <ControlledTabs />
        <AboutUs />
        <PhotoSection />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
