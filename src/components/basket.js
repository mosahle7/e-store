import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components';
import {CartContext} from '../context/cartContext';
import {Link,useNavigate} from 'react-router-dom';
import {UpIcon, DownIcon, TrashIcon} from "./Icons";
import { useAuth } from '../context/AuthContext';
const Basket = () => {
  
  // const [, forceUpdate] = React.useReducer(x => x + 1, 0); // Create a forceUpdate function
  const { addProduct,getItems,clearBasket, increaseQuantity, decreaseQuantity, removeProduct} = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Update cart items whenever they change
    setCartItems(getItems());
  }, [getItems]);
  
  // useEffect(() => {
  //   setCartItems(getItems());
  // },[getItems]);
  // useEffect(() => {
  //   const updatedItems = getItems();
  //   setCartItems(updatedItems);
  //   console.log('Updated cart items:', updatedItems);
  // }, [getItems]);
  
  const checkOut = () => {
    if (cartItems.length>0)
    return(
    <CheckoutButton onClick={() => navigate('/checkout')}>Checkout</CheckoutButton>
    )
  }

  

  const clear = () => {
    if(cartItems.length>0){
      return(
        <>
        <BasketHeaderLine/>
        <BasketButton onClick={() => setCartItems(clearBasket())}>Clear</BasketButton>
        </>
  )}}

  
    // else{
    //   return(
    //     // <div>The Basket is currently empty</div>
    //     <>
    //   {/* <EmptyBasket>The Basket is currently empty</EmptyBasket>
    //   <StartAdd>Start Adding to Basket</StartAdd> */}
    //   </>
    // )}
  
  const dis = () => {
    if (cartItems.length>0){
    return(
      <>
      <BasketHeader>
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </BasketHeader>
        <BasketHeaderLine/>
  </>)}
   else{
      return(
      <>
      <EmptyBasket>The Basket is currently empty</EmptyBasket>
      <StartAdd><Link to ={`/`}>Start Adding to Basket</Link></StartAdd>
      </>
    )}
  }

    const renderCart = () => {
      
     
      if (cartItems.length > 0){  
        return cartItems.map((p) => (
          <React.Fragment key={p.id}>
          <BasketEle>
          <Link to={`/products/${p.id}`}>
            {/* <img src={`/assets/${p.image}`}/> */}
            <Card>
      <CardImage src={`/assets/${p.image}`} alt="Card Image" />
      <CardBody>
        <CardTitle>{p.title}</CardTitle>
        {/* <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
        <CardButton href="#" className="btn btn-primary">
          Go somewhere
        </CardButton> */}
      </CardBody>
    </Card>
            </Link>
            
          </BasketEle>
  
          <BasketQty>
            {p.quantity}
            
            <UpIcon width={20} onClick={() => setCartItems(increaseQuantity({id: p.id}))}/>
            <DownIcon width={20} onClick={() => setCartItems(decreaseQuantity({id: p.id}))}/>
            <BasketTrash><TrashIcon width={20} onClick={() => setCartItems(removeProduct({id: p.id}))}/></BasketTrash>
          </BasketQty>
          <BasketPrice>&pound;{p.price}</BasketPrice>
          </React.Fragment>
        ));

      }}

      const renderTotal = () => {
        const cartItems = getItems();
        const total = cartItems.reduce((accumulator, item) => {
          return accumulator + item.price * item.quantity;
        }, 0);
        return total;
      }

      const total = () => {
        if (cartItems.length>0)
        return(
          <BasketTotal>Total: &pound;{renderTotal()}</BasketTotal>
      )}
      
      

  // debugger;
  return (
    
    <BasketContainer>
      <BasketTitle>Shopping Basket</BasketTitle>
      
      <BasketTable>
          {dis()}
          <BasketHeader>
          {renderCart()}

        </BasketHeader>
  
        {clear()}
        {/* <BasketHeader>
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
          {dis()}
        </BasketHeader>
        <BasketHeaderLine/>

        <BasketHeader>
          {renderCart()}
        </BasketHeader>
  
        <BasketHeaderLine/>

        <BasketButton onClick={() => setCartItems(clearBasket())}>Clear</BasketButton> */}
        {checkOut()}
      </BasketTable>
      {total()}
    </BasketContainer>

  );
};

export default Basket;
const Card = styled.div`
  display: flex;
  width: 750px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
`;

const CardBody = styled.div`
  flex: 1; /* Take up remaining space in the flex container */
  padding: 20px;
`;

const CardTitle = styled.h5`
  font-size: 15px;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

const CardButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
`;
const BasketEle = styled.div`
  padding-bottom: 20px;
`
const StartAdd = styled.div`
  padding-top: 10px;
  text-align : center;
  margin-left: 350px;
`;
const EmptyBasket = styled.div`
  font-size: 20px;
  color: grey;
  text-align: center;
  margin-left: 350px;
`;
const BasketContainer = styled.div`
  width: 1000px;
  display: grid;
  padding: 20px;
  grid-template-rows: .25fr 0.35fr 0.25fr;
  grid-template-columns: 0.5fr 1fr 0.1fr;
`;

const BasketTable = styled.div`
  grid-column:1/ span 3;
  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
`;

const BasketHeader = styled.div `
  display: grid;
  grid-template-columns: 40fr 5fr.05fr;
`;

const BasketHeaderLine = styled.hr `
  margin-bottom : 20px;
  border : 1px solid gray;
`;

const BasketTitle = styled.h2`
  text-align: center;
  grid-column:1/ span 3;
  // margin-right: 30px;
  padding-bottom: 20px;
  margin-left: 350px;
`;

const BasketQty = styled.div `
  font-size : 18px;
  font-weight: bold;
  display: grid;
  grid-template-columns: .1fr .05fr .1fr .1fr;
`;

const BasketTotal = styled.div `
  justify-self: end;
`;
const BasketButton = styled.button`
  border-radius: 8px;
  height: 40px;
  
`;
const CheckoutButton = styled.button`
  border-radius: 8px;
  height: 40px;
  margin-left: 1170px;
  margin-top: -2000px;
`;
const BasketHeaderh = styled.h4 `
  padding-right: 10px;
`;

const BasketPrice = styled.div `
  font-weight: bold;
`;

const BasketTrash = styled.div`
  padding-left:20px;
`;
