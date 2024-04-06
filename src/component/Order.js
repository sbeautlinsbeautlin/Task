import React, { useState } from 'react';
import products from './products';
import '../component/styles.css'; // Assuming you have a styles file

const CardSymbols = {
  VISA: '💳',
  MASTERCARD: '💳',
  AMEX: '💳',
  DISCOVER: '💳',
};

const OrderComponent = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePaymentMethodSelect = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod || !customerName || !customerAddress) {
      setErrorMessage('Please fill out all fields.');
      return;
    }
    // Perform order submission logic here
    // For demonstration, we're showing an alert
    alert('Order placed successfully!');
    // Redirect to products page
    window.location.href = '/product';
    // Reset form fields and error message
    setPaymentMethod('');
    setCustomerName('');
    setCustomerAddress('');
    setErrorMessage('');
  };

  return (
    <div style={{ color: 'white', textAlign: "center" }}>
      <h1 style={{ color: "orange" }}>ORDER</h1><br />
      <p>Total: &#x20B9; {products.totalPrice}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodSelect} style={{ color: "black" }}>
            <option value="">Select Payment Method</option>
            <option value="VISA">Visa</option>
            <option value="MASTERCARD">Mastercard</option>
            <option value="AMEX">American Express</option>
            <option value="DISCOVER">Discover</option>
          </select>
        </div><br />
        <div>
          <label htmlFor="customerName">Customer Name:</label>
          <input type="text" id="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        </div><br />
        <div>
          <label htmlFor="customerAddress">Customer Address:</label>
          <input type="text" id="customerAddress" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
        </div><br />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit" className='button-submit'>Submit</button>
      </form><br /><br /><br />
      <div style={{ display: 'flex', textAlign: "center", position: "relative" }}>
        <div style={{ marginRight: '20px', position: "relative", left: "200px" }}>
          <img src="https://tse2.mm.bing.net/th/id/OIP.FOBIMRIyYSVQzLLM0RzwAgHaD4?w=343&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Payment Method 1" style={{ marginBottom: '5px', height: "50px", width: "100px", margin: "30px" }} />
        </div>
        <div style={{ marginRight: '20px', position: "relative", left: "200px" }}>
          <img src="https://tse1.mm.bing.net/th/id/OIP.IV_77KhZAhXqe5yPlFv15AHaE1?w=250&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Payment Method 2" style={{ marginBottom: '5px', height: "50px", width: "100px", margin: "30px" }} />
        </div>
        <div style={{ marginRight: '20px', position: "relative", left: "200px" }}>
          <img src="https://tse4.mm.bing.net/th/id/OIP.1sCtYs-dM8A3QeYgEwQ7-AAAAA?rs=1&pid=ImgDetMain" alt="Payment Method 3" style={{ marginBottom: '5px', height: "50px", width: "100px", margin: "30px" }} />
        </div>
        <div style={{ marginRight: '20px', position: "relative", left: "200px" }}>
          <img src="https://tse1.mm.bing.net/th/id/OIP.OiWwGKp35Iv06-cKUO1A4AHaEo?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Payment Method 4" style={{ marginBottom: '5px', height: "50px", width: "100px", margin: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
