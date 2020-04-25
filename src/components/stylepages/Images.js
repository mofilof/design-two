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
        <h1>Image usage</h1>
        <p>This carousel contains three images that work well with a small quote or alone. Why? Because they have one main motive and a calm background without to many distracting elements. "Landscape" images work great on desktops while "portraits" are great on mobile phones.</p>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100"
              src={Lift} alt="Ski lift." />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
              src={Skiier} alt="Alpine skier." />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
              src={Hockey} alt="Hockey player." />
          </Carousel.Item>
        </Carousel>

        <h1>The winter sports club, style guide</h1>
        <div className="row">
          <div className="col-sm-5">
            <img className="d-block portrett"
              src={Skates} alt="Close up ice skate photo" />
          </div>
          <div className="col">
            <h2>Detail images</h2>
            <p>Close up images, are easy to asociate with something. Even if they only show one piece not a situation. </p>

            <p>Images with a spesific detail like skates or skis can be used as links. This image (left) could for examle link to an article about a equipment swap/ second hand events arranged by the club. </p>

            <p>Instead of using images or buttons to redirect or illustrate something in an article it is a good idea to use the clubs official pictograms. They are a group of stylized icons.</p>
          </div>
        </div>

      </main>

    </>
  );
}
export default Images;