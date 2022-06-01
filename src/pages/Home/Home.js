import React from 'react';
import { Carousel } from 'react-bootstrap';
import mujib11 from '../../assets/image/mujib11.jpg';
import mujib1 from '../../assets/image/mujib1.jpg';
import mujib2 from '../../assets/image/mujib2.jpg';
import './Home.css';

const Home = () => {
    return (
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={mujib11}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={mujib1}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mujib2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Home;