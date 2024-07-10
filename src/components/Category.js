import React from 'react';
import { useState , useEffect } from 'react';
import {useParams } from 'react-router-dom';
import {getProductByCategory} from '../fetcher';
import CategoryProduct from './CategoryProduct';
const Category = () => {
  const [products, setProducts]= useState(null);
  // const [loading,setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    const fetchData= async() => {
      const responseObject = await getProductByCategory(categoryId);
      setProducts(responseObject);
      console.log(responseObject)
      // setLoading(false);
    }
    fetchData();
  }, [categoryId]);

  // if (loading) {
  //   return <div>Loading... Wait for few seconds!</div>
  // }

  const renderProducts = () => {
    return products.map(p => <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>);
  }

  
  return (
    <div>
      {/* {products.errorMessage && <div>Error: {products.errorMessage}</div>} */}
        {products && renderProducts()}
    </div>
    // <div key={id} onClick={() => onCategoryClick(id)}> {title} </div>
   
  );
};

export default Category;