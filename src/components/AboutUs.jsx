import React from 'react'
import AboutUsPic from '../assets/AboutUsPic.png'

class AboutUs extends React.Component {
  render() {
    return (
      <div className="AboutUs">
          <div className="AboutImg">
            <img src={AboutUsPic}
            alt="about-us"
            />
          </div>
        <div className="Info">
          <h1>About Ovelia</h1>
          <p>
            Restaurants run in their family. John and Litsa owned an eatery in Athens, Greece, which is where they are from.
            In 1974, John left to help his nephew open a restaurant in Manhattan. Litsa and Chris joined him a year later, and after Peter was born, Litsa became a stay-at-home cook while she raised the boys in Astoria.John worked in other people’s restaurants throughout his career. Eleven years ago, when John was near retirement age, the family opened Ovelia, the Hellenic grill house and bar on 30th Avenue at 34th Street.
        </p>
        </div>
        </div>
    )
  }
}

export default AboutUs;