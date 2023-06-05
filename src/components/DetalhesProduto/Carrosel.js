import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Carrosel()  {
    return (
      <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="barraca.png"
            alt="Slide 1"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="imagem2.jpg"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="imagem3.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
    );
  };
  