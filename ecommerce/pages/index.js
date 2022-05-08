import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      HeroBanner

      <div className="products-heading">
        <h2>Best Selling Products in the World</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"].map((product) => (
          product
        ))}
      </div>

      Footer
    </>
  )
}

export default Home;
