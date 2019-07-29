import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ControlledCarousel from './components/ControlledCarousel'
import images from './services/images'
import NavBar from './components/NavBar'
import DinnerMenu from './components/Dinner'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images,
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <ControlledCarousel images={this.state.images} />
        <DinnerMenu />

      </div>
    );
  }
}

export default App;
