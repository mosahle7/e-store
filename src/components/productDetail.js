import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById2 } from '../fetcher';
import styled from 'styled-components';

const ProductDetail = () => {
  // const [product,setProduct] = useState({errorMessage:'',data:{}});
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const {productId}=useParams();
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchData = async() => {
      try{
        const productData = await getProductById2(productId);
        setProduct(productData[0]); 
        // console.log(productData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
     
      
    }
    fetchData();
  },[productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!product) return <p>No product found</p>; 
  const createMarkup = () => {
    return { __html: product?.description}
  }
  
  return (
    <article>
        <ProductTitle>
          {product.title}
        </ProductTitle>
        <figure>
          <ProductImageContainer>
            <ProductImageContainerImage src={`/assets/${product.image}`} alt={product.title}>
            </ProductImageContainerImage>
          </ProductImageContainer>
        </figure>

        <aside>
        <ProductInfo>
            <h3>Dimensions</h3>
            <label>{product.specs?.dimensions}</label>
          </ProductInfo>
          {product.specs?.capacity &&
          <ProductInfo>
          <ProductInfoHeader><h3>Capacity</h3></ProductInfoHeader>
          <label>{product.specs?.capacity}</label>
          </ProductInfo>
          }
          <ProductInfo>
            <ProductInfoHeader>Features</ProductInfoHeader>
            <ul>
              {product.features?.map((f,i) =>{
                return<ProductInfoLI key={`feature${i}`}>{f}</ProductInfoLI>
              })}
            </ul>
            </ProductInfo>
        </aside>
        <aside>
          <ProductFP>
            &pound;{product.price};
          </ProductFP>
          <ProductInfoStock>
            <ProductInfoStockLabel>Stock Level:{product.stock}</ProductInfoStockLabel>
            <ProductInfoStockLabel>FREE Delivery</ProductInfoStockLabel>
          </ProductInfoStock>
          <ProductAction>
            <ProductActionButton>Add to Basket</ProductActionButton>
            </ProductAction>

          

        </aside>
        <ProductDescription dangerouslySetInnerHTML={createMarkup()}></ProductDescription>
    </article>
  );
};
const ProductDescription = styled.div `
  grid-column: 1/span 3;
`;
const ProductTitle = styled.div`
grid-column: 1/span 3;
color: darkslategray;
font-weight: bold;
font-size: 1.5em;
padding-left:10px ;
`;

const ProductImageContainer = styled.div`
  padding: 10px;
  width: 60%;
`;

const ProductImageContainerImage= styled.img`
  width: 100%;
  height: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductInfoHeader = styled.h3 `
color: darkslategray;
  font-size: 1em;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 5px;
`;

const ProductInfoLI = styled.li `
padding-top: 5px;
`;

const ProductFP = styled.div`
  color: darkslategray;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
`;

const ProductInfoStock = styled.div`
padding-left: 10px;
margin-top: 20px;
padding-top: 10px;
background-color: white;
height: 25%;
width: 40%;
border-radius: 5px;
font-weight: bold;
flex-direction: column;
`;

const ProductInfoStockLabel = styled.label`
padding-bottom: 5px;
display: block;
color:  #007185;
`;


const ProductAction = styled.div`
display:flex;
flex-direction: column;
`;

const ProductActionButton = styled.button`
  width: 160px;
  height: 30px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #e47911;
  border: solid 1px slategrey;
  font-weight: bold;
`;
export default ProductDetail;