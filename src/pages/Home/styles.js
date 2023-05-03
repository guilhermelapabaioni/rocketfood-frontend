import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS_DARK.dark_400};
  overflow-y: auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-block: 8rem;
  
  padding-inline: 1rem;
  padding-block: 2rem;

  @media (min-width: 768px) {
    padding-block: 8rem;
    padding-inline: 6rem;
  } 
`

export const Intro = styled.div`
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  height: 12rem;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  border-radius: .5rem;

  > div:nth-child(1){
    display: flex;
    align-items: end;
    width: 65%;

    > .mobile {
      position: relative;
      left: -1.4rem;
      width: 110%;
      max-width: 197px;
      height: 112%;
    }
     
    > .desktop {
      display: none;
    }
  }
    
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .4rem;
    width: 100%;

    margin: 0 auto;

    > h2{
      font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
      color: ${({ theme }) => theme.COLORS_LIGHT.light_300};
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 140%;
    }

    > p{
      font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
      color: ${({ theme }) => theme.COLORS_LIGHT.light_300};
      font-size: 1rem;
      line-height: 140%;
    }
  }

  @media (min-width: 762px) {
    min-height: 16rem;

    > div:nth-child(1){

      > .mobile {
        display: none;
      }
     
      > .desktop {
        display: block;
        position:relative;
        left: -8%;
        width: 100%;
        max-width: 656px;
        height: 140%;
      }
  }
    
  > div:nth-child(2) {
    width: 100%;
    display: flex;
    gap: .4rem;

    > h2{
      font-size: 3.2rem;
    }

    > p{
      font-size: 1.6rem;
    }
  }

  }
`