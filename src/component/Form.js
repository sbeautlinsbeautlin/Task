import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Perform validation
    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    // If there are errors, set them in state and return
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If no errors, perform further actions like submitting the form
    window.alert('Login Successfully:', { phoneNumber, email });
    window.location.href = '/order'
  };

  return (
    <div ><h1 style={{color:"orange",textAlign:"center",top:"40px"}}>SIGN IN</h1>

    

    <div className="w-full max-w-xs mx-auto" style={{textAlign:"center",border:"5px solid white",height:"300px",width:"550px",position:"relative",right:"-360px",backgroundColor:"orange",top:"50px"}}><br/>
      <form onSubmit={handleSubmit} className="bg-white border-yellow-500 border-4 shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{color:"black",border:"1 px solid",textAlign:"center"}}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="phoneNumber" style={{color:"black"}} >
            Phone Number:
          </label>
          <input
            className={`shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phoneNumber ? 'border-red-500' : ''}`}
            id="phoneNumber"
            type="tel" 
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs italic"><span role="img" aria-label="warning">⚠️</span>{errors.phoneNumber}</p>}
        </div><br/><br/>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email" style={{color:"black",margin:"20px"}}>
            Email:
          </label>
          <input
            className={`shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-orange-500' : ''}`}
            id="email"
            type="email"
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-orange-500 text-xs italic"><span role="img" aria-label="warning">⚠️</span>{errors.email}</p>}
          <br/><br/>
          
          <button className="button-sign" type="submit">
            Sign In
          </button>
          
        </div>
      </form>
    </div>
    </div>
  );
};

export default Form;
