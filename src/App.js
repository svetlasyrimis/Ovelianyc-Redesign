import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ControlledCarousel from './components/ControlledCarousel'
import images from './services/images'
import NavBar from './components/NavBar'
import PhotoSection from './components/PhotoSection'
import ContactForm from './components/ContactForm';



class App extends React.Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     field: value
    //  }
  }
  

  
  render() {
    return (
      <div className="App">
        <NavBar />
        <ControlledCarousel  />
        <PhotoSection />
        <ContactForm />
      </div>
    );
  }
}

export default App;
