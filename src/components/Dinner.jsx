import React from 'react';
import { dinner_menu } from '../Data/dinner_menu';

export default class Dinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dinner_menu: dinner_menu
    }
  }

  render() {
    return (
      <div className="Dinner_menu">
        {this.state.dinner_menu.map(foodItem => (
          <p key={foodItem.id}>{foodItem.name} {foodItem.price} {foodItem.details}</p>

        ))}
      </div>

    );
  }
}