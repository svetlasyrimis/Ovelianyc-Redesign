import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ControlledCarousel from './components/ControlledCarousel';
import images from './services/images';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import DinnerMenu from './components/Dinner';
import CateringMenu from './components/Catering';
import PhotoSection from './components/PhotoSection';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images,
    }
  }
  render() {
    return (

      <>
        <div className="App">
          <NavBar />
          <ControlledCarousel images={this.state.images} />
        </div>
        <div className="About Me">


          <DinnerMenu />
          <CateringMenu />

          <AboutUs />

          <PhotoSection />
        </div>
      </>



    );
  }
}

export default App;
