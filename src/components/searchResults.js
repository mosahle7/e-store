import React from 'react';
import { getProductsByQuery } from '../fetcher';
import { useSearchParams } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';
import { useState, useEffect} from 'react';

const SearchResults = () => {
  const [products, setProducts]= useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('s');

  useEffect(() => {
    const fetchData= async() => {
      const responseObject = await getProductsByQuery(query);
      setProducts(responseObject);
      console.log(responseObject);
      setLoading(false);
    }
    fetchData();
  }, [query]);

  const renderProducts = () => {
    if(loading) {
      return <div>Loading ...</div>
    }
    else if (products.length > 0){ 
    return products.map(p => (<CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>));
  }
    else{
      return <div>No results found!</div>; 
    } 
};
  return (
    <div>
      {/* {products.errorMessage && <div>Error: {products.errorMessage}</div>} */}
        {renderProducts()}
    </div>
    // <div key={id} onClick={() => onCategoryClick(id)}> {title} </div>
   
  );
};

export default SearchResults;