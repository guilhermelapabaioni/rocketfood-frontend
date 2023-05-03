import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100vh;

  background-color: ${({ theme }) => theme.COLORS_DARK.dark_500};
  overflow-y: auto;
`

export const Content = styled.div`
  margin-top: 8rem;
  padding: 1.6rem;
  height: calc(100vh - 8rem);

  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  > div:nth-child(1) {
    position: absolute;
    top: 1rem;
    > a {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
    align-items: center;
    margin: 0;
    padding: 4rem;
    gap: 4rem;

    > div:nth-child(1){
      top: 12rem;
    }
  }
`

export const FoodImage = styled.div`
  padding-top: 4rem;
  margin: 0 auto;

  > img {
    width: 20rem;
  }

  @media (min-width: 768px) {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;

    > img {
      width: 36vw;
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
    }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  width: 100%;

  @media (min-width:768px){
    justify-content: flex-start;
  }
`