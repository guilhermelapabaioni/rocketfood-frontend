import { useState, useEffect, useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container, Logo, SliderWrapper } from './styles'

import {PrevArrow} from '../PrevArrow'
import {NextArrow} from '../NextArrow'

export function Section({ title, children, ...rest }) {
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    const totalItems = slider.props.children.length
    const visibleItems = slider.props.slidesToShow
    const isScrollable = totalItems > visibleItems
    const breakpoint = slider.props.responsive.find(
      ({ breakpoint }) => window.innerWidth <= breakpoint
    )
    const breakpointItems = breakpoint
      ? breakpoint.settings.slidesToShow
      : visibleItems
    const isScrollableOnBreakpoint = totalItems > breakpointItems
    if (isScrollableOnBreakpoint) {
      slider.slickNext() // Inicia o Slider na primeira página
    }
  }, [children])

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }

  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  const arrowStyle = {
    // Estilo das setas
    backgroundColor: 'black',
    opacity: '0.6',
    zIndex: '1'
  }

  const settings = {
    dots: false,
    infinite: true,
    edgeFriction: 800,
    speed: 1000,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
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
