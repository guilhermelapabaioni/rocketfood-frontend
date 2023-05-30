import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS_DARK.dark_200};
  padding: 1rem 1.4rem;
  border-radius: .6rem;
  min-width: 16rem;
  min-height: 24rem;

  @media (min-width: 768px) {
    min-width: 24rem;
    min-height: 42rem;
  }
`

export const Content = styled.div`
  height: 100%;
  
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  > .buttonIcon {
    align-self: end;
  }

  > .foodImage{
    align-self: center;
    >img {
      width: 100%;
      max-width: 92px;
      height: auto;
      margin: 0 auto;
    }
  }

  > .foodName{
    align-self: center;
  }

  > .description{
    display: none;
  }

  > .price {
    color: ${({ theme }) => theme.COLORS_OTHERS.cake_200};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
    font-size: 1.6rem;
  }

  @media (min-width: 768px){
    > .foodImage{
      >img {
        max-width: 146px;
      }
    }

    > .foodName{
      font-size: 1.8rem;
    }

    > .description{
      display: block;
      color: ${({ theme }) => theme.COLORS_LIGHT.light_400};
      font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
      font-size: 1.4rem;
      line-height: 160%;
      max-width: 16rem;
      margin: 0 auto;
    }

    > .price {
      font-size: 1.8rem;
    }
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    gap: 2rem;
    p {
      color: ${({ theme }) => theme.COLORS_LIGHT.light_300};
      font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
      font-size: 1.6rem;
    }
  }

  > button {
    padding: 1rem;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 2rem;
  }
`