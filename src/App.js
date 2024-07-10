import './App.css';
import React, {useEffect} from 'react';
import { useState } from 'react';
// import Category from './components/Category';
import {getCategories} from './fetcher';
// import {getProducts} from './fetcher';
// import CategoryProduct from './components/CategoryProduct';
import ProductDetail from './components/productDetail';
import Pr from './fetcher3'
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/Category';
import Layout from './components/Layout';
import Home from './components/Home';
import OrderConfirmation from './components/orderConfirmation';
import SearchResults from './components/searchResults';
import Login from './components/Login';
import { AuthContextProvider } from './context/AuthContext';
import {
  // RouterProvider,
  Routes,
  Route,
  //Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState({errorMessage:'',data:[]})
  // const [loading,setLoading] = useState(true);
  useEffect(() => {
    const fetchData=async () => {
      const responseObject=await getCategories();
      console.log(responseObject)
      setCategories(responseObject);
      // setLoading(false);
    };
    fetchData();
  },[]);
  // if (loading) {
  //   return <div>Loading... Wait for few seconds!</div>
  // }
  

  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route
         path='/' 
         element={
         <AuthContextProvider> 
          <Layout categories={categories}/> </AuthContextProvider>}>
          <Route index element={ <Home/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path='search' element={<SearchResults/>}/>
          <Route path='categories/:categoryId' element={<Category/>}/>
          <Route path='products/:productId' element={<ProductDetail/>}/>
          <Route path='gotit' element={<Pr />} />
          </Route>
          
      
        <Route path='checkout' element={<Checkout/>}/>
        <Route path ='login' element={<AuthContextProvider> <Login/> </AuthContextProvider>}/>
        <Route path = 'orderConfirmation' element={<OrderConfirmation/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
