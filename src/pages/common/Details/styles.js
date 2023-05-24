import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100vh;

  background-color: ${({ theme }) => theme.COLORS_DARK.dark_500};
  overflow-y: auto;
`

export const Content = styled.div`
  height:100vh;
  
  padding-block: 8rem;
  padding-inline: 1.6rem;

  display: flex;
  flex-direction: column;

  gap: 2rem;

  position: relative;

  > div:nth-child(1) {
    position: absolute;
    top: 9rem;
    > a {
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 2fr;

    align-items: center;
    justify-content: center;

    padding-inline: 6rem;

    > div:nth-child(1) {
      left: 4vw;
      top: 12rem;
      > a {
        font-size: 2.6rem;
      }
    }
  }
`

export const FoodImage = styled.div`
  padding-top: 4rem;
  margin: 0 auto;

  > img {
    max-width: 264px;
  }

  @media (min-width: 768px) {
    padding: 0;

    > img {
      display: flex;
      align-items: right;
      min-width: 26vw;
    }
  }
`

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 2rem;

    > h2 {
      color: ${({ theme }) => theme.COLORS_LIGHT.light_300};
      font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
      font-weight: 500;
      font-size: 2.7rem;
      line-height: 140%;
    }

    > p {
      color: ${({ theme }) => theme.COLORS_LIGHT.light_300};
      font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
      font-size: 1.6rem;
      line-height: 140%;
    }

    > button {
      margin-top: 2rem;
    }

    @media (min-width:768px){
      align-items: start;

      > h2 {
        font-size:4rem;
      }

      > p {
        font-size: 2.4rem;
      }

      > button{
        width: fit-content;
        padding: 2rem 4rem;
      }
    }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  width: 100%;

  > .quantityOrder{
      color: ${({ theme }) => theme.COLORS_OTHERS.cake_200};
      font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
      font-size: 1.6rem;
    }

  @media (min-width:768px){
    justify-content: flex-start;
  }
`