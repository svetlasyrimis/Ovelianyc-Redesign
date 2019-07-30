import React from 'react';
import { dinner_Appetizer, dinner_Entrees, dinner_Salads, dinner_sides, dinner_Spreads } from '../Data/dinner_menu';

export default class Dinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dinner_Appetizer: dinner_Appetizer,
      dinner_Entrees: dinner_Entrees,
      dinner_Salads: dinner_Salads,
      dinner_sides: dinner_sides,
      dinner_Spreads: dinner_Spreads,
    }
  }

  render() {
    return (
      <>
        <div className="Dinner_menu">
          <h1>Appetizer</h1>
          {this.state.dinner_Appetizer.map(foodItem => (
            <p key={foodItem.id}>{foodItem.name} {foodItem.price} {foodItem.details}</p>
          ))}
        </div>
        <div className="Dinner_menu">
          <h1>Entrees</h1>
          {this.state.dinner_Entrees.map(foodItem => (
            <p key={foodItem.id}>{foodItem.name} {foodItem.price} {foodItem.details}</p>
          ))}
        </div>
        <div className="Dinner_menu">
          <h1>Salads</h1>
          {this.state.dinner_Entrees.map(foodItem => (
            <p key={foodItem.id}>{foodItem.name} {foodItem.price} {foodItem.details}</p>
          ))}
        </div>
        <div className="Dinner_menu">
          <h1>Sides</h1>
          {this.state.dinner_Entrees.map(foodItem => (
            <p key={foodItem.id}>{foodItem.name} {foodItem.price} {foodItem.details}</p>
          ))}
        </div>
        <div className="Dinner_menu">
          <h1>Spreads</h1>
          {this.state.dinner_Entrees.map(foodItem => (
            <p key={foodItem.id}>{foodItem.name} {foodItem.price} {foodItem.details}</p>
          ))}
        </div>
      </>
    );
  }
}