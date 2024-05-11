import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../src/images/slide1.jpg';
import slide2 from '../src/images/slide2.jpg';

function Crossfade() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crossfade;
