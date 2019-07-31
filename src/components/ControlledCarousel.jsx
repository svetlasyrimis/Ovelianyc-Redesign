import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import images from '../services/images'

export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

      index: 0,
      direction: null,
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    // d-block w-100
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {images.map((image) => {
          return <Carousel.Item>
            <img key={image.id}
              width='500px'
              height='600px'
              src={image.src}
              description={image.description}
              className="d-block w-100"
            />
            <Carousel.Caption>
              <p>Modern Greek Food &</p>
              <p>cocktails since 2006</p>
            </Carousel.Caption>
          </Carousel.Item>
        })}
      </Carousel>
    );
  }
}


