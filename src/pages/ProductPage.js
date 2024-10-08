import React from 'react';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';

const ProductPage = ({ match }) => {
  return (
    <div>
      <Navbar />
      <ProductDetail id={match.params.id} />
    </div>
  );
};

export default ProductPage;
