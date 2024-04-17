import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { items } from './ProdData/Data';

const Hero = () => {
  return (
    <div className="backGround border rounded shadow-lg p-4">
      <div className="content text-center mt-4">
        <h2 className="text-dark">Evin Shopy, T-shirt's store.</h2>
        <p className="text-dark">Welcome to Evin Shopy - Your Destination for Stylish Threads! Explore our collection of trendy shirts and chic clothing that blend comfort with fashion effortlessly. Step into a world where every stitch tells a story and every fabric reflects your unique style. Start your fashion journey with us today!</p>
        <Link to="/products" className="btn btn-warning">Shop Now</Link>
      </div>
      <Carousel className="mt-2">
        {items.map(item => (
          <Carousel.Item key={item.id}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <img
                className="d-block"
                style={{ height: '25rem', maxWidth: '100%' }}
                src={item.imgSrc}
                alt={item.title}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
