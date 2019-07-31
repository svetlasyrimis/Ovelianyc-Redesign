import React from 'react';
import { Brunch_Cold_Starters, Brunch_Hot_Starters, Brunch_Salads, Brunch_Egg_Fare, Brunch_Burger_Sandwiches, Brunch_Sweet_stuff, Brunch_Sides } from '../Data/brunch_Menu';

class Brunch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Brunch_Cold_Starters: Brunch_Cold_Starters,
      Brunch_Hot_Starters: Brunch_Hot_Starters,
      Brunch_Salads: Brunch_Salads,
      Brunch_Egg_Fare: Brunch_Egg_Fare,
      Brunch_Burger_Sandwiches: Brunch_Burger_Sandwiches,
      Brunch_Sweet_stuff: Brunch_Sweet_stuff,
      Brunch_Sides: Brunch_Sides,
    };
  }
  render() {
    return (
      <div className="Dinner">
        <div className="Dinner_menu">
          <h1>Cold Starters</h1>
          <div className="menuItems">
            {this.state.Brunch_Cold_Starters.map(foodItem => (
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
          <h1>Cold Starters</h1>
          <div className="menuItems">
            {this.state.Brunch_Hot_Starters.map(foodItem => (
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
          <h1>Cold Starters</h1>
          <div className="menuItems">
            {this.state.Brunch_Salads.map(foodItem => (
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
          <h1>Cold Starters</h1>
          <div className="menuItems">
            {this.state.Brunch_Egg_Fare.map(foodItem => (
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
          <h1>Cold Starters</h1>
          <div className="menuItems">
            {this.state.Brunch_Burger_Sandwiches.map(foodItem => (
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
          <h1>Cold Starters</h1>
          <div className="menuItems">
            {this.state.Brunch_Sweet_stuff.map(foodItem => (
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
          <h1>Cold Starters</h1>
          <div className="menuItems">
            {this.state.Brunch_Sides.map(foodItem => (
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
      </div>
    )
  }
}


export default Brunch;