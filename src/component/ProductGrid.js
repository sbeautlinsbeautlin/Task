
import React from 'react';
import Product from './Product';


const ProductGrid = ({ products,heading }) => {
  
  
  return (
    <div className='heading'>
      <h1 style={{color:"orange",textAlign:"center"}}>{heading} </h1>
      
    
    <div className="grid-container">
      
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default ProductGrid;



