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
      <div className="Menu">

        <div className="menuCategory">
          <h1>Appetizer</h1>
          <div className="menuItems">
            {this.state.dinner_Appetizer.map(foodItem => (
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

        <div className="menuCategory">
          <h1>Entrees</h1>
          <div className="menuItems">
            {this.state.dinner_Entrees.map(foodItem => (
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

        <div className="menuCategory">
          <h1>Salads</h1>
          <div className="menuItems">
            {this.state.dinner_Salads.map(foodItem => (
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

        <div className="menuCategory">
          <h1>Sides</h1>
          <div className="menuItems">
            {this.state.dinner_sides.map(foodItem => (
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

        <div className="menuCategory">
          <h1>Spreads</h1>
          <div className="menuItems">
            {this.state.dinner_Spreads.map(foodItem => (
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