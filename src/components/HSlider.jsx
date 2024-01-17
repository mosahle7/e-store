import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled} from 'styled-components';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


const HSlider = () => {
  const settings = {
    dots: true,
    // fade: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };


  return (
    <HomeSlider>
      <Slider {...settings}>
      <SLink to = '/categories/1'>
        <SliderItem>
          <Slider1>
          <Container>
            <Content>
              <Text1>Mobiles</Text1>
              <Text2>At Exciting Prices!</Text2>
              <SButton className="btn mt-4">
              <Link to='/categories/1'>Buy Now</Link>
              </SButton>
            </Content>
            </Container>
          </Slider1>
        </SliderItem>
        </SLink>
        

        <SLink to = '/categories/2'>
        <SliderItem>
          <Slider2>
          <Container>
            <Content>
              <Text1>Laptops</Text1>
              <Text2>At Exciting prices!</Text2>
              <SButton className="btn mt-4">
              <Link to='/categories/2'>Buy Now</Link>
              </SButton>
            </Content>
            </Container>
          </Slider2>
        </SliderItem>
        </SLink>

        <SLink to = '/categories/3'>
        <SliderItem>
          <Slider3>
          <Container>
            <Content>
              <Text1>Televisions</Text1>
              <Text2>At Exciting Prices!</Text2>
              <SButton className="btn mt-4">
              <Link to='/categories/3'>Buy Now</Link>
              </SButton>
            </Content>
            </Container>
          </Slider3>
        </SliderItem>
        </SLink>
      </Slider>
    </HomeSlider>
  );
}
export default HSlider;

const HomeSlider = styled.div `
  // width: 100%;
  overflow: hidden;
`
const SLink= styled(Link)`
  text-decoration: none;
`

const SliderItem = styled.div `
  max-width: 100%;
  height: 500px;

`
const Slider1 = styled.div `
  background: linear-gradient(rgb(0,13,107,0.5),  rgb(0, 13, 107, 0.5)),
  url("/assets/s1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;

`
const Slider2 = styled.div `
  background: linear-gradient(rgb(0,13,107,0.5),  rgb(0, 13, 107, 0.5)),
  url("/assets/s21.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;

`
const Slider3 = styled.div `
  background: linear-gradient(rgb(0,13,107,0.5),  rgb(0, 13, 107, 0.5)),
  url("/assets/12t.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;

`
const Content = styled.div `
  color: white;
  padding-top: 150px;
`
const  Text1 = styled.h4 `
  // text-decoration: none;
`
const  Text2 = styled.h1 `
  font-size: 3.2rem;
  font-weight: 600;
  // text-decoration: none;
`

const SButton = styled.button`
background: #fff;
color:  #000d6b;
border: none;
outline: none;
padding: 8px 60px;

> a{
  text-decoration: none;
  font-weight: 600;
  color: #000d6b;

  &:hover {
  color: blue;
  // background: #fff;
  }
}
  &:hover {
    background: white;
  }
`