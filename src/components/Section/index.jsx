import { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Logo, SliderWrapper } from './styles';

export function Section({ title, children, ...rest }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    edgeFriction: 800,
    speed: 800,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: false
  };

  return (
    <Container {...rest}>
      <Logo>{title}</Logo>
      <SliderWrapper {...settings} ref={sliderRef}>
        {children}
      </SliderWrapper>
    </Container>
  );
}
