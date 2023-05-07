import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  position: relative;

  > .arrowLeft, .arrowRight{
    display: none;
  }

  @media screen and (min-width: 860px) {
    > .arrowLeft, .arrowRight{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 100%;
    }

    > .arrowLeft {
      left: 0;
      right: auto;

      background: linear-gradient(to left, transparent 0, #00070A 100%);
    }

    > .arrowRight {
      left: auto;
      right: 0;
      justify-content: right;

      background: linear-gradient(to right, transparent 0, #00070A 100%);
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

export const Carousel = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;
  display: flex;
  gap: 1.6rem;

  @media screen and (min-width: 860px){
    overflow-x: hidden;
    gap: 2rem;
  }
`

export const ArrowContainer = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  z-index: 10;
`

export const Items = styled.div`
  display: flex;
  gap: 1.6rem;

  @media screen and (min-width: 768px){
    gap: 2rem;
  }
`
