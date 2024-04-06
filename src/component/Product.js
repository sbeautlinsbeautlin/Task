
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Rating from './Ratings'; // Import the Rating component
// import axios from 'axios';

// const Product = ({ product }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [rating, setRating] = useState(0);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   const addToCart = async () => {
//     try {
//       // Perform a POST request to add the product to the cart
//       await axios.post('http://localhost:8888/products', product);
//       alert('Product added to cart successfully!');
//     } catch (error) {
//       console.error('Error adding product to cart:', error);
//       alert('Failed to add product to cart. Please try again.');
//     }
//   };

//   const placeOrder = () => {
//     // Logic to place order
//   };

//   const handleRatingChange = (value) => {
//     setRating(value);
//   };

//   return (
//     <div className="product">
//       <img src={product.imageurl} alt="Product" onClick={toggleDetails} />
//       {showDetails && (
//         <div>
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           {/* Display the Rating component */}
//           <Rating onChange={handleRatingChange} />
//           <p>Price: {product.price}</p>
//           <div>
//             {/* Remove Link to="/product/cart" and replace with onClick={addToCart} */}
//             <button onClick={addToCart}>Add to Cart</button>
//             <Link to="/product/order">
//               <button onClick={placeOrder}>Place Order</button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Ratings'; // Import the Rating component
import axios from 'axios';
import '../component/styles.css';

const Product = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [rating, setRating] = useState(0);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const addToCart = async () => {
    try {
      // Perform a POST request to add the product to the cart
      await axios.post('http://localhost:8888/products', product);
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Failed to add product to cart. Please try again.');
    }
  };

  const placeOrder = () => {
    // Logic to place order
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="product" >
      <div style={{position:"relative",right:"-50px"}}>
      <img src={product.imageurl} alt="Product" onClick={toggleDetails} /></div>
      {showDetails && (
        <div style={{position:"relative",left:"-20px"}}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {/* Display the Rating component */}
          <Rating onChange={handleRatingChange} />
          <p>Price: &#x20B9;{product.price}</p>
          <div>
            {/* Remove Link to="/product/cart" and replace with onClick={addToCart} */}
            <button onClick={addToCart} className="custom-button">Add to Cart</button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;


