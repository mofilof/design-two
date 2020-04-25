import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Skates from './images/skates.png';
import Lift from './images/lift.png';
import Skiier from './images/skiier.png';
import Hockey from './images/hockey.png';

function Images() {
  return (
    <>
      <main>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100"
              src={Lift} alt="Close up ice skate photo" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
              src={Skiier} alt="Close up ice skate photo" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
              src={Hockey} alt="Close up ice skate photo" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h1>The winter sports club, style guide</h1>
        <img className="d-block portrett"
          src={Skates} alt="Close up ice skate photo" />
        <img className="d-block landskap"
          src={Lift} alt="Close up ice skate photo" />
        <img className="d-block landskap"
          src={Skiier} alt="Close up ice skate photo" />
        <img className="d-block landskap"
          src={Hockey} alt="Close up ice skate photo" />
      </main>

    </>
  );
}
export default Images;