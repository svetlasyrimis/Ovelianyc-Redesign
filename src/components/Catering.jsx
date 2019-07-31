import { catering_15, catering_25 } from '../Data/catering_Menu';
import React from 'react';


export default class Catering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catering_15: catering_15,
      catering_25: catering_25,
    }
  }
  render() {
    return (
      <div className="Catering_menu">
        <div>
          <h3>CATERING FOR 15</h3>
          {this.state.catering_15.map(foodItem => (
            <p key={foodItem.id}>{foodItem.name} {foodItem.price} {foodItem.details}</p>
          ))}
        </div>
        <div>
          <h3>CATERING FOR 20</h3>
          {this.state.catering_25.map(foodItem => (
            <p key={foodItem.id}>{foodItem.name} {foodItem.price} {foodItem.details}</p>
          ))}
        </div>
      </div>
    )
  }
}

