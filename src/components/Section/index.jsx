import { useState, useEffect, useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container, Logo, SliderWrapper } from './styles'

export function Section({ title, children, ...rest }) {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: false,
    edgeFriction: 800,
    speed: 800,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768, // Exemplo de breakpoint para telas com largura igual ou menor que 1024px
        settings: {
          slidesToShow: 2 // Altere o número de slides exibidos para 2
        }
      },
      {
        breakpoint: 1024, // Exemplo de breakpoint para telas com largura igual ou menor que 768px
        settings: {
          slidesToShow: 4 // Altere o número de slides exibidos para 3
        }
      }
      // Adicione mais objetos de breakpoint conforme necessário
    ]
  }

  return (
    <Container {...rest}>
      <Logo>{title}</Logo>
      <SliderWrapper {...settings} ref={sliderRef}>
        {children}
      </SliderWrapper>
    </Container>
  )
}
