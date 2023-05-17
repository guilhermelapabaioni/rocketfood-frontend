import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Container = styled.div`
  max-width: 100vw;
  position: relative;
`

export const SliderWrapper = styled(Slider)`

  .slick-slide > div {
    margin: 0 1rem;
    height: 100%;
  }

  .slick-slide {
    height: 100%;
    width: fit-content; /* Usando fit-content para que o tamanho do slide seja definido pelo seu conteúdo */
  }

  .slick-arrow::before{
    display: none;
  }

  @media (min-width: 768px) {
    .slick-arrow{
      display: block;
    }

    .slick-prev,
    .slick-next {
      display: block;
      width: 80px;
      height: 100%;
      z-index: 1;
    }

    .slick-prev {
      left: 0;
      background: linear-gradient(
        to right,
        rgba(0, 10, 15, 1) 40%,
        rgba(0, 10, 15, 0) 100%
      );

      &::before{
        height: 100%;
        display: flex;
        align-items: center;
        
        content: '<';
        color: white;
        opacity: 1;
        font-size: 32px;
        font-size: 4rem;
        font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
      }
    }

    .slick-next {
      background: linear-gradient(
        to left,
        rgba(0, 10, 15, 1) 40%,
        rgba(0, 10, 15, 0) 100%
      );

      &::before{
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        
        content: '>';
        color: white;
        opacity: 1;
        font-size: 32px;
        font-size: 4rem;
        font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
      }
    }
  }
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.COLORS_LIGHT.light_300};
  font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: .6rem;

  @media screen and (min-width: 768px) {
    font-size: 3.2rem
  }
`
