import React from 'react';
import StripePaymentButton from './StripePaymentButton';
import { useState } from 'react';
import { styled } from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { HomeIcon, CartIcon } from './Icons';
import Search from './search';

const OrderConfirmation = () => {
  

 
  
      return(
        <>
    <header>
      <div id='headerHomeIcon'>
        <Link to='/'><HomeIcon width={40} /></Link>
      </div>

      <Search />
      <div id='headerTitle'>
        My Store
      </div>
      <div id='headerCartIcon'>
        <Link to='/basket'><CartIcon width={40} /></Link>
      </div>
      {/* <div id='login'>
        <Link to='/login'>Login</Link>
      </div> */}
    </header>
        <div>
      <StripePaymentButton/>
    </div>
    </>
      )
};

export default OrderConfirmation;

// const Back = styled.button`
  

// `

