import React from 'react';
// import Accordion from '../components/Accordion/Accordion'
// import ProductContainer from '../components/ProductUI/ProductContainer';
import { Carousel} from "react-bootstrap";

const Home = () => {
return (
	<div>
	 <div className = 'market-root'>
    <div className='market-splash'>
{/* carousel starts here   */}
  <Carousel variant="" className="h-100">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slider_image.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/header-picture.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="/images/slider_image.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
{/* carousel ends here */}
        </div>   
    </div>
	</div>
);
};

export default Home;
