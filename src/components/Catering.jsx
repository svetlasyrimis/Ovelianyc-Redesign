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
      <div className="Dinner">
        <div className="Dinner_menu">
          <h1>Catering 15</h1>
          <div className="menuItems">
            {this.state.catering_15.map(foodItem => (
              <div key={foodItem.id}>
                <div className="namePrice">
                  <p>{foodItem.name}</p>
                  <p>{foodItem.price}</p>
                </div>
                <p>{foodItem.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="Dinner_menu">
          <h1>Catering 25</h1>
          <div className="menuItems">
            {this.state.catering_25.map(foodItem => (
              <div key={foodItem.id}>
                <div className="namePrice">
                  <p>{foodItem.name}</p>
                  <p>{foodItem.price}</p>
                </div>
                {foodItem.details}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

