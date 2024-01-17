import React from 'react';
import { useState , useEffect } from 'react';
import {useParams } from 'react-router-dom';
import {getProducts} from '../fetcher';
import CategoryProduct from './CategoryProduct';
const Category = () => {
  const [products, setProducts]= useState({
    errorMessage: "",
    data: [],
  });
  // const [loading,setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    const fetchData= async() => {
      const responseObject = await getProducts(categoryId);
      setProducts(responseObject);
      // setLoading(false);
    }
    fetchData();
  }, [categoryId]);

  // if (loading) {
  //   return <div>Loading... Wait for few seconds!</div>
  // }

  const renderProducts = () => {
    return products.data.map(p => <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>);
  }

  
  return (
    <div>
      {products.errorMessage && <div>Error: {products.errorMessage}</div>}
        {products.data && renderProducts()}
    </div>
    // <div key={id} onClick={() => onCategoryClick(id)}> {title} </div>
   
  );
};

export default Category;