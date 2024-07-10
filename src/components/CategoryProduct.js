import React,{useContext} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {CartContext} from '../context/cartContext';


const CategoryProduct = ({id,title,image,specs,features,price,stock,rating,discountPercentage}) => {
  const navigate=useNavigate();
  const { addProduct } = useContext(CartContext);

  // const Stars = ({count}) => {
  //   const fullStars = Math.floor(count);
  // const partialStar = count - fullStars;
  //   const starsArray=[];
  //   // for(let i=1;i<=5;i++){
  //   //   starsArray.push(
  //   //     <span key={i} 
  //   //       style={
  //   //         {color:i<=count? 'yellow' : 'gray',
  //   //         fontSize: '1.2em',}
  //   //         }>
  //   //           ★
  //   //     </span>
  //   //   )
      
  //   // }
  //   for (let i = 1; i <= 5; i++) {
  //   const starStyle = {
  //     color: i <= fullStars ? 'yellow' : 'gray',
  //     fontSize: '1.5em',
  //   };

  //   // If it's a partial star, add a fractional part
  //   if (i === fullStars + 1 && partialStar > 0) {
  //     starStyle.clipPath = `polygon(0 0, ${partialStar * 100}% 0, ${partialStar * 100}% 100%, 0 100%)`;
  //   }

  //   starsArray.push(
  //     <span key={i} style={starStyle}>
  //       ★
  //     </span>
  //   );
  // }
  //   return starsArray;
  // }
  const Stars = ({ count }) => {
    console.log('Stars count:', count);
  
    const fullStars = Math.floor(count);
    const partialStar = count - fullStars;
  
    const starsArray = [];
    for (let i = 1; i <= 5; i++) {
      const starStyle = {
        color: i <= fullStars ? 'yellow' : 'gray',
        fontSize: '1.5em',
      };
  
      // If it's a partial star, add a linear gradient for the fractional part
      if (i === fullStars + 1 && partialStar > 0) {
        starStyle.background = `linear-gradient(to right, yellow ${partialStar * 100}%, gray ${partialStar * 100}%)`;
        starStyle.webkitBackgroundClip = 'text';
        starStyle.display = 'inline-block';
        starStyle.webkitTextFillColor = 'transparent';
      }
  
      starsArray.push(
        <span key={i} style={starStyle}>
          ★
        </span>
      );
    }
  
    return starsArray;
  };
  
  const NoNavAdd = (e) => {
    e.preventDefault();
    addProduct({ id, title, price, image });
  };

  return (
    <React.Fragment key={id}>
      <Product>

    {/* <ProductTitle>
        <Link to={`/products/${id}`}>{title}</Link>
        </ProductTitle> */}
      
      <SLink to={`/products/${id}`}>
        <Card>
        
        {/* <Link to={`/products/${id}`}> */}
        {/* <Link to={`products/${id}`} */}
        
      <CardImage src={`/assets/${image}`} alt={title} />
     

      <CardBody>
      
         
        <CardTitle> {title}</CardTitle>
        <Rating><Stars count={rating}/> </Rating>
        <ProductInfo>
            {/* <ProductInfoHeader>Features</ProductInfoHeader> */}
            <ul>
              {features?.map((f,i) => (
                <ProductInfoLI key={`feature${i}`}>{f}</ProductInfoLI>
              ))}

            </ul>
            </ProductInfo>
        </CardBody>

        
      
    
        {/* <figure>
          <ProductImageContainer>
            <ProductImageContainerImage src={`/assets/${image}`} alt={title}>
            </ProductImageContainerImage>
          </ProductImageContainer>
        </figure> */}

        {/* <aside> */}
          {/* <ProductInfo>
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>
          </ProductInfo>
          
          {specs.capacity &&
          <ProductInfo>
            <ProductInfoHeader><h3>Capacity</h3></ProductInfoHeader>
            <label>{specs.capacity}</label>
          </ProductInfo>
          } */}
         

       
        <aside>
          <ProductFP>
            &pound;{price}
          </ProductFP>
          <Dis>
            {discountPercentage}% off
          </Dis>
          <ProductInfoStock>
            <ProductInfoStockLabel>Stock Level:{stock}</ProductInfoStockLabel>
            <ProductInfoStockLabel>FREE Delivery</ProductInfoStockLabel>
          </ProductInfoStock>
          <ProductAction>
           
            <ProductActionButton 
              onClick={NoNavAdd}>
              Add to Basket
            </ProductActionButton>
          </ProductAction>

          </aside>
        
  </Card>
  </SLink>
  </Product>
  </React.Fragment>
  
  
   
    
  );
};
const Product = styled.div`
  margin-left: 100px;
`
const SLink = styled(Link)`
  text-decoration: none;
`
const ProductTitle = styled.div`
grid-column: 1/span 3;
color: darkslategray;
font-weight: bold;
font-size: 1.5em;
padding-left:10px ;
`;

const Card = styled.div`
//   margin-right: 100px;
//  padding-left: 300px;
//   margin-left: 2000px;
display: flex;
 width: 1000px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  // border: 0.1px solid grey;

  &:hover {
    transform: scale(1.009);
  }
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  flex: 1; /* Take up remaining space in the flex container */
  padding: 20px;
`;

const CardTitle = styled.h5`
  font-size: 15px;
  margin-bottom: 10px;
  color: darkslategray;
font-weight: bold;
font-size: 1.5em;
padding-left:10px ;
`;

const Rating = styled.div`
  padding-left: 10px;
`
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
const ProductImageContainer = styled.div`
  padding: 10px;
  width: 60%;
`;

const ProductImageContainerImage= styled.img`
  width: 100%;
  height: 100%;
`;

const ProductInfo = styled.div`
  // display: flex;
  // flex-direction: column;
  margin-top: 10px;

  & ul{
    padding-left: 30px;
  }
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
const Dis = styled.div`
  color: green;
  font-size: 16px;
  font-weight: 600;
`
const ProductInfoStock = styled.div`
padding-left: 10px;
margin-top: 20px;
padding-top: 10px;
background-color: white;
height: 30%;
width: 80%;
border-radius: 5px;
font-weight: bold;
display: flex;
flex-direction: column;
`;

const ProductInfoStockLabel = styled.label`
padding-bottom: 5px;
// display: block;
display: flex;
flex-direction: column;
color: #007185;
`;

const ProductAction = styled.div`
// display:flex;
// flex-direction: column;
margin-right: 30px;
`;

const ProductActionButton = styled.button`
  width: 160px;
  height: 30px;
  border-radius: 10px;
  margin-top: 20px;
  background: #e47911;
  border: solid 1px slategrey;
  font-weight: bold;
  cursor: pointer;
`;
export default CategoryProduct;