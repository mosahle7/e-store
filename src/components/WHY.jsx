import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import { styled } from 'styled-components';
const WHY = () => {
  return (
    <section>
        {/* <Container> */}
            <Content>
                <Title className = "mb-5 text-center">
                    Why mSt Store?
                </Title>
                <Container>
                    <Row>
                        <Col lg="4" md="4" className='mb-2 text-center'>
                        <img src="/assets/item1.svg" alt="A descriptive text about the image" width="100" height="100"/>
                            <ITitle>Clear Prices, Limitless Choices</ITitle>
                            <ItemCont>
                             Transparent pricing on all tech items. Clarity guaranteed from smartphones to laptops and TVs.
                            </ItemCont>
                        </Col>

                        <Col lg="4" md="4" className='text-center'>
                        <img src="/assets/item2.svg" alt="A descriptive text about the image" width="100" height="100"/>
                            <ITitle>Easy Shopping, Instant Satisfaction</ITitle>
                            <ItemCont>
                             Spend minutes to find your perfect gadget. Swift checkout tailored to your needs.
                            </ItemCont>
                        </Col>

                        <Col lg="4" md="4" className='text-center'>
                        <img src="/assets/item3.svg" alt="A descriptive text about the image" width="100" height="100"/>
                            <ITitle>Personalize Your Tech Experience</ITitle>
                            <ItemCont>
                             Explore smartphones, laptops, and TVs your way. No surprises, just straightforward shopping for all your tech needs.
                            </ItemCont>
                        </Col>
                    </Row>
                </Container>
            </Content>
        {/* </Container> */}

    </section>

  );
};

export default WHY;
const Title = styled.h2`
// background: black;
font-weight: 600;
`
const Content = styled.div`
width: 100%;
background: black;
color: white;
`
const ITitle = styled.h4`
font-weight: 500;
`
const ItemCont = styled.div`

`
