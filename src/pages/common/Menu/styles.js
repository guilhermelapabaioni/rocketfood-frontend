import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS_DARK.dark_400};

  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  
  > div:nth-child(1) {
    background: ${({ theme }) => theme.COLORS_DARK.dark_700};
    padding: 3rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    > h2{
      color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
      font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
      font-size: 2.2rem;
      font-weight: 400;
      line-height: 2.5rem;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  
`