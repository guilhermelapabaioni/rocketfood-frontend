import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  gap: 2rem;

  > div {
    margin-bottom: 2rem;
    h2 {
      font-size: 3.2rem;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 0;
  }
`

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h2{
    display: none;
  }

  >  a {
    align-self: center;    
  }

  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.COLORS_DARK.dark_700};
    width: clamp(32rem, 75vw, 48rem);
    padding: 6.4rem;

    border-radius: .6rem;

    > h2{
      display: block;
      font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
      font-size: 3.2rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS_LIGHT.light_100};

      padding-block: 2rem;
      text-align: center;
    }
  }
`

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;

  > label {
    font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS_LIGHT.light_400};

    margin-left: .4rem;
  }
`
