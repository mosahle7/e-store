// StripePaymentButton.js
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import { styled } from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

const StripePaymentButton = () => {
  const [success, setSuccess] = useState(false);
  const {getItems, clearBasket} = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    // Update cart items whenever they change
    setCartItems(getItems());
  }, [getItems]);

  useEffect(() => {
    if (success&&cartItems.length>0){
      clearBasket();
    }
  })

  const clear = () => {
    if(cartItems.length>0){
        setCartItems(clearBasket());
}}

const SucF = () => {
  setSuccess(false);
}

  const renderTotal = () => {
    const cartItems = getItems();
    const total = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity
    }, 0);
    return total;
  }
  
  const descr = () => {
    const cartItems = getItems();
    return cartItems.map((p) => p.title).join(', ');
        
  }
  const handleToken = (token) => {
    // Send the token to your server or handle the payment on the client
    console.log(token);
    setSuccess(true);
  
  };

  return (
    
    <>
    {!success && renderTotal()>0 &&(
    <Stripe>
    <StripeCheckout
      stripeKey="pk_test_51OLWEOSHmrjiq0I91FqxoTqovTepiYho7ng7aD9CSn4q5vb1wWsZyQhU4ozlQiDtpwLTtma4JudGjWkKVXyMGEx900Zicz2pSw" // Replace with your Stripe publishable key
      label= "Proceed to payment"
      token={handleToken}
      amount={(renderTotal())} // Amount in cents (adjust as needed)
      currency="USD"
      name="My Store"
      description={descr()}

    />

    
    </Stripe>
    
    )}

    {success && (
      <>
      {/* {clear()}  /* to prevent inf rerenders */}
    <div>Payment Successful!
      
      <Link to ={'/'}><Continue>Continue Shopping!</Continue></Link> 
      </div>
      {/* {SucF()} */}
    </>
   
  )}
  </>
)
    }
export default StripePaymentButton;
const Stripe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 10vh;
`;

const Continue = styled.div`
  color: blue;
  cursor: pointer;
`