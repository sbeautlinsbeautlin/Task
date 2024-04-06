import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"
import logo from '../assets/images/logo.jpg'; // Import your logo image







const Header = () => {
  return (
    <header className='header'>
       <div className='logo'>
          <img src={logo} alt="Logo" style={{ borderRadius: '70%', width: '70px', height: '70px',marginRight: '20px' }} />
       
        <div className='header-links' style={{color:"orange",backgroundColor:"2px solid orange"}}>
          <Link to="/home" >Home</Link>
          <Link to="/product" className='' style={{marginRight: '10px'}}>Products</Link>
          <Link to="/order" className='' style={{marginRight: '10px'}}><i class ="fas fa-shopping-cart"/>order</Link>
          <Link to="/product/cart" className='' style={{marginRight: '10px'}}><span role="img" aria-label="shopping-cart" style={{fontSize:"3rem",position:"relative",left:"800px"}}>🛒</span></Link>
          
        </div>
       
      </div>
    </header>
  )
}

export default Header;
