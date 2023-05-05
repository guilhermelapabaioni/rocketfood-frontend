import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS_DARK.dark_700};

  padding: 2rem;
  width: 100vw;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;

  
`

export const DivButtonMenu = styled.div`
  @media (min-width: 768px){
    display: none;
  }
`

export const DivInputSearch = styled.div`
  display: none;
  width: 46%;

  @media (min-width: 768px) {
    display: block;
  }
`

export const DivButtonOrder = styled.div`
  position: relative;
  text-align: center;

  > a {
    > p {
      display: none;
    }
  }

  > p {
    position: absolute;
    top: -.8rem;
    right: -.4rem;
    background-color: ${({ theme }) => theme.COLORS_OTHERS.tomato_100};
    color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
    width: fit-content;
    padding: .2rem .6rem;
    font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 10rem;
  }

  @media (min-width: 768px) {
    > a {
      background-color: ${({theme}) => theme.COLORS_OTHERS.tomato_100};
      padding: 1rem 2rem;
      border-radius: .5rem;
      
      > p {
        display: block;
      }
    }

    > p {
      display: none;
    }
  }
`

export const DivButtonExit = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`
