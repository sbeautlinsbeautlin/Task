

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to fetch cart items from the JSON server
//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:8888/products');
//         setCartItems(response.data);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   // Function to remove a product from the cart
//   const removeProduct = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8888/products/${id}`);
//       const updatedCart = cartItems.filter(item => item.id !== id);
//       setCartItems(updatedCart);
//     } catch (error) {
//       console.error('Error removing product:', error);
//     }
//   };

//   // Calculate total price
//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div className="cart">
//       {cartItems.map((item) => (
//         <div key={item.id} className="cart-item">
//           <img src={item.imageurl} alt={item.name} style={{width:"23%",height:"23%"}} />
//           <div className="cart-item-details" style={{ color: "white" }}>
//             <h3>Name:{item.name}</h3>
//             <p>Description{item.description}</p>
//             <p>Price: ${item.price}</p>
            
//             <button onClick={() => removeProduct(item.id)}>Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className="total-price">
//         Total Price: ${totalPrice}
//       </div>
//     </div>
//   );
// };

// export default Cart;
// ===============================================================================================
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [quantities, setQuantities] = useState({});

//   // Function to fetch cart items from the JSON server
//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:8888/products');
//         setCartItems(response.data);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   // Function to remove a product from the cart
//   const removeProduct = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8888/products/${id}`);
//       const updatedCart = cartItems.filter(item => item.id !== id);
//       setCartItems(updatedCart);
//     } catch (error) {
//       console.error('Error removing product:', error);
//     }
//   };

//   // Function to handle quantity change
//   const handleQuantityChange = (id, quantity) => {
//     setQuantities(prevState => ({
//       ...prevState,
//       [id]: quantity
//     }));
//   };

//   // Function to calculate the subtotal for each item
//   const calculateSubtotal = (item) => {
//     const quantity = quantities[item.id] || 1;
//     return item.price * quantity;
//   };

//   // Calculate total price including all subtotal prices
//   const totalPrice = cartItems.reduce((acc, item) => {
//     const subtotal = calculateSubtotal(item);
//     return acc + subtotal;
//   }, 0);

//   return (
//     <div className="cart">
//       {cartItems.map((item) => (
//         <div key={item.id} className="cart-item">
//           <img src={item.imageurl} alt={item.name} style={{ width: "23%", height: "23%" }} />
//           <div className="cart-item-details" style={{ color: "white" }}>
//             <h3>Name: {item.name}</h3>
//             <p>Description: {item.description}</p>
//             <p>Price: ${item.price}</p>
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <p style={{ marginRight: "10px" }}>Quantity:</p>
//               <select value={quantities[item.id] || 1} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}>
//                 {[...Array(10)].map((_, index) => (
//                   <option key={index + 1} value={index + 1}>{index + 1}</option>
//                 ))}
//               </select>
//             </div>
//             <p>Subtotal: ${calculateSubtotal(item)}</p>
//             <button onClick={() => removeProduct(item.id)}>Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className="total-price">
//         Total Price: ${totalPrice.toFixed(2)}
//       </div>
//       <Link to="/form">
//         <button>Order</button>
//       </Link>
//     </div>
//   );
// };

// export default Cart;
// ==================================================================================

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [quantities, setQuantities] = useState({});

//   // Function to fetch cart items from the JSON server
//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:8888/products');
//         setCartItems(response.data);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   // Function to remove a product from the cart
//   const removeProduct = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8888/products/${id}`);
//       const updatedCart = cartItems.filter(item => item.id !== id);
//       setCartItems(updatedCart);
//     } catch (error) {
//       console.error('Error removing product:', error);
//     }
//   };

//   // Function to handle quantity change
//   const handleQuantityChange = (id, quantity) => {
//     setQuantities(prevState => ({
//       ...prevState,
//       [id]: quantity
//     }));
//   };

//   // Function to calculate the subtotal for each item
//   const calculateSubtotal = (item) => {
//     const quantity = quantities[item.id] || 1;
//     return item.price * quantity;
//   };

//   // Calculate total price including all subtotal prices
//   const totalPrice = cartItems.reduce((acc, item) => {
//     const subtotal = calculateSubtotal(item);
//     return acc + subtotal;
//   }, 0);

//   return (
//     <div className="cart">
//       {cartItems.map((item) => (
//         <div key={item.id} className="cart-item" style={{ border: "2px solid white", padding: "10px",height:"500px",width:"700px",position:"relative",right:"-250px" }}>
//           <img src={item.imageurl} alt={item.name} style={{ width: "23%", height: "50%", position:"relative",bottom:"-20px" }} />
//           <div className="cart-item-details">
//             <h3 style={{position:"relative",right:"-200px",top:"-200px",color:"white"}}>Name: {item.name}</h3>
//             <p style={{color:"white",textAlign:"justify",textJustify:"inter-word", width:"500px",height:"50px",position:"relative",right:"-200px",top:"-200px"}}>Description: {item.description}</p>
//             <p style={{position:"relative",right:"-200px",top:"-180px",color:"white"}}>Price: ${item.price}</p>
//             <div>
//               <p style={{color:"white",position:"relative",left:"200px",top:"-200px" }}>Quantity:</p>
//               <select style={{position:"relative",left:"300px",top:"-240px"}} value={quantities[item.id] || 1} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}>
//                 {[...Array(10)].map((_, index) => (
//                   <option key={index + 1} value={index + 1}>{index + 1}</option>
//                 ))}
//               </select>
//             </div>
//             <p style={{position:"relative",right:"-200px",top:"-200px",color:"white"}}>Subtotal: ${calculateSubtotal(item)}</p>
//             <div style={{textAlign:"center"}}>
//             <button onClick={() => removeProduct(item.id)} style={{textAlign:"center",position:"relative",bottom:"60px"}}>Remove</button>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div className="total-price" style={{textAlign:"center",color:"white"}}>
//         Total Price: ${totalPrice.toFixed(2)}
//       </div >
//       <Link to={{
//         pathname: "/order",
//         state: { cartItems: cartItems.filter(item => quantities[item.id] > 0) } // Pass only selected items as state
//       }}>
//         <button style={{textAlign:"center"}}>Order</button>
//       </Link>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../component/styles.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0); // Initialize total price state
  const [showServiceInfo, setShowServiceInfo] = useState(false);
  const [showWarrantyInfo, setShowWarrantyInfo] = useState(false);
  const [showReplacementInfo, setShowReplacementInfo] = useState(false);
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);

  // Function to fetch cart items from the JSON server
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8888/products');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  // Function to remove a product from the cart
  const removeProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8888/products/${id}`);
      const updatedCart = cartItems.filter(item => item.id !== id);
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  // Function to handle quantity change
  const handleQuantityChange = (id, quantity) => {
    setQuantities(prevState => ({
      ...prevState,
      [id]: quantity
    }));
  };

  // Function to calculate the subtotal for each item
  const calculateSubtotal = (item) => {
    const quantity = quantities[item.id] || 1;
    return item.price * quantity;
  };

  // Calculate total price including all subtotal prices
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      const subtotal = calculateSubtotal(item);
      return acc + subtotal;
    }, 0);
    setTotalPrice(total);
  }, [cartItems, quantities]); // Recalculate total price whenever cart items or quantities change

  return (
    <div className="cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item" style={{ border: "2px solid white", padding: "10px", height: "500px", width: "750px", position: "relative", right: "-250px" }}>
          <img src={item.imageurl} alt={item.name} style={{ width: "23%", height: "50%", position: "relative", bottom: "-20px" }} />
          <div className="cart-item-details">
            <h3 style={{ position: "relative", right: "-200px", top: "-200px", color: "orange" }}>Name: {item.name}</h3>
            <p style={{ color: "orange", textAlign: "justify", textJustify: "inter-word", width: "500px", height: "50px", position: "relative", right: "-200px", top: "-200px" }}>Description: {item.description}</p><br /><br />
            <p style={{ position: "relative", right: "-200px", top: "-180px", color: "orange" }}>Price: ₹{item.price}</p><br /><br />
            <div>
              <p style={{ color: "orange", position: "relative", left: "200px", top: "-190px" }}>Quantity:</p>
              <div style={{ position: "relative", top: "-200px" }}>
                <select style={{ position: "relative", left: "300px", top: "-10px" }} value={quantities[item.id] || 1} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}>
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </div>
            </div>
            <p style={{ position: "relative", right: "-200px", top: "-200px", color: "orange" }}>Subtotal: ₹{calculateSubtotal(item)}</p>
            <div style={{ textAlign: "center" }}>
              <button className="custom-button" onClick={() => removeProduct(item.id)} style={{ textAlign: "center", position: "relative", bottom: "100px" }}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <br /><br />

      <div className="total-price" style={{ textAlign: "center", color: "white" }}>
        Total Price: ₹ {totalPrice.toFixed(2)}<br /><br />

        <Link to="/form">
          <button className='button-order'>Proceed to Order</button></Link>

      </div >
      <img src="https://tse2.mm.bing.net/th/id/OIP.4_p4U9ycd27HFj-dlaLmowHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7" style={{ marginBottom: '5px',height:"50px",width:"50px",borderRadius:"50px"}}/>
      <h3 style={{color:"white"}} > Offers</h3><br/><br/>
      <div style={{ display: 'flex' }}>
        <img src="https://tse3.mm.bing.net/th/id/OIP.TKId3ps59h0oMo8vfYSA_QHaD7?w=291&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
        <img src="https://tse4.mm.bing.net/th/id/OIP.2oJTrrueN3eI0hmHYJEuIgHaEc?w=266&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
        <img src="https://tse3.mm.bing.net/th/id/OIP.YiSJYy3l3AZwsE4HizZ7wAHaDt?w=283&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
      </div><br/>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        
        <div>
          <img
            src="https://www.bing.com/th?id=OIP.j3-Lb2pbyh7i9g3MJ9bElgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Service option available"
            style={{ marginBottom: '5px', height: "50px", width: "50px", borderRadius: "50px", cursor: "pointer" }}
            onClick={() => setShowServiceInfo(!showServiceInfo)}
          />
          <h3 style={{ color: "white", display: "inline-block", cursor: "pointer" }} onClick={() => setShowServiceInfo(!showServiceInfo)}>Service option available</h3>
          {showServiceInfo && (
            <p style={{ color: "white" }}>Additional information about service option...</p>
          )}
        </div>

        <div>
          <img
            src="https://tse1.mm.bing.net/th?q=Warranty+Logo.png&pid=ImgDet&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&w=120&h=123&c=7&dpr=1.5"
            alt="2 Year Warranty Care"
            style={{ marginBottom: '5px', height: "50px", width: "50px", borderRadius: "50px", cursor: "pointer" }}
            onClick={() => setShowWarrantyInfo(!showWarrantyInfo)}
          />
          <h3 style={{ color: "white", display: "inline-block", cursor: "pointer" }} onClick={() => setShowWarrantyInfo(!showWarrantyInfo)}>2 Year Warranty Care</h3>
          {showWarrantyInfo && (
            <p style={{ color: "white" }}>Additional information about 2 Year Warranty Care...</p>
          )}
        </div>

        <div>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.niQy0MCdFjMEskDU1K2x2gAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="10 days Replacement by Brand"
            style={{ marginBottom: '5px', height: "50px", width: "50px", borderRadius: "50px", cursor: "pointer" }}
            onClick={() => setShowReplacementInfo(!showReplacementInfo)}
          />
          <h3 style={{ color: "white", display: "inline-block", cursor: "pointer" }} onClick={() => setShowReplacementInfo(!showReplacementInfo)}>10 days Replacement by Brand</h3>
          {showReplacementInfo && (
            <p style={{ color: "white" }}>Additional information about 10 days Replacement by Brand...</p>
          )}
        </div>

        <div>
          <img
            src="https://www.bing.com/th?id=OIP.7ZjT-IZcuRIzwon8KIPuYgAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Free Delivery"
            style={{ marginBottom: '5px', height: "50px", width: "50px", borderRadius: "50px", cursor: "pointer" }}
            onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}
          />
          <h3 style={{ color: "white", display: "inline-block", cursor: "pointer" }} onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}>Free Delivery</h3>
          {showDeliveryInfo && (
            <p style={{ color: "white" }}>Additional information about Free Delivery...</p>
          )}
        </div>
      </div>

      
      
    </div>
  );
};

export default Cart;

