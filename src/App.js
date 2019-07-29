import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ControlledCarousel from './components/ControlledCarousel'
import images from './services/images'



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
        <h1>Test</h1>
        <ControlledCarousel images={this.state.images}/>
      </div>
    );
  }
}

export default App;
